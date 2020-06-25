import websockets
import asyncio
import json

USERS = {}
GAMES = []

def getName(name):
    i = sum((1 if n.startswith(name) else 0 for n in USERS))
    if i==0:
        return name
    else:
        return "{}#{}".format(name, i)

class GameState:
    def __init__(self, games):
        self.name = ""
        self.state = "name"
        self.symbol = ""
        self.games = games
        self.reset()
    
    def reset(self):
        self.board = [["" for _ in range(3)] for _ in range(3)]
        self.yourTurn = False
        self.symbol = ""
        self.result = ""
        self.opponent = ""
    def toJSON(self):
        return json.dumps(self.__dict__)

    def evaluate(self):
        board = self.board
        symbol = self.symbol

        # rows
        for i in range(3):
            if all(x==symbol for x in board[i]):
                return "won"

        # columns
        for i in range(3):
            if all(x[i]==symbol for x in board):
                return "won"

        # diagonal 1        
        if all(board[i][i]==symbol for i in range(3)):
            return "won"

        # diagonal 2
        if all(board[i][2-i]==symbol for i in range(3)):
            return "won"

        # check draw
        if all(all(x for x in b) for b in board):
            return "draw"

class Client:
    def __init__(self, socket, games):
        self.socket = socket
        self.state = GameState(games)
    async def sendState(self):
        await self.socket.send(self.state.toJSON())
    async def loop(self):
        async for rawMsg in self.socket:
            msg = json.loads(rawMsg)

            state = self.state.state
            game = self.state
            opponent = USERS[game.opponent] if game.opponent else None

            if state == "name":
                assert(msg["type"]=="join")

                self.state.name = getName(msg["name"])
                USERS[game.name] = self
                game.state = "lobby"
                print("new player: {}".format(game.name))

            elif state == "lobby":
                if msg["type"] == "createNewGame":
                    game.state = "waitingForGame"
                    game.yourTurn = True
                    game.symbol = "X"
                    GAMES.append(game.name)
                    await sendAll()
                elif msg["type"] == "connect":
                    if msg["game"] in GAMES:
                        game.reset()
                        game.opponent = msg["game"]
                        opponent = USERS[game.opponent]
                        game.state = "game"
                        game.symbol = "O"
                        GAMES.remove(game.opponent)
                        game.board = opponent.state.board
                        opponent.state.opponent = game.name
                        opponent.state.state = "game"
                        await opponent.sendState()
                        await sendAll()
            elif state == "game":
                if msg["type"] == "click":
                    row, column = msg["row"], msg["column"]
                    if game.yourTurn and not game.result:
                        if not game.board[row][column]:
                            game.board[row][column] = game.symbol
                            game.yourTurn = False
                            opponent.state.yourTurn = True
                            res = self.state.evaluate()
                            if res=="won":
                                game.result = "won"
                                opponent.state.result = "lost"
                            if res=="draw":
                                game.result = "draw"
                                opponent.state.result = "draw"
                            await opponent.sendState()
                if msg["type"] == "backToLobby":
                    game.reset()
                    game.state = "lobby"
            else:
                print("Unknown packet!!")
                print(msg)
            await self.sendState()

    async def cleanup(self):
        if self.state.opponent:
            opponent = USERS[self.state.opponent]
            opponent.state.reset()
            opponent.state.state = "lobby"
        if self.state.name in GAMES:
            GAMES.remove(self.state.name)
        if self.state.state != "name":
            USERS.pop(self.state.name)
        print("Lost connection with '{}'".format(self.state.name))
        await sendAll()

async def sendAll():
    for _, u in USERS.items():
        await u.sendState()

async def client(ws, path):
    client = Client(ws, GAMES)
    await client.loop()
    await client.cleanup()

start_server = websockets.serve(client, "0.0.0.0", 9000)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
