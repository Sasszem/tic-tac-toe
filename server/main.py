import websockets
import asyncio
import json

USERS = {}
GAMES = set()

def evaluate(board, symbol):
    # rows
    for i in range(3):
        if all(x==symbol for x in board[i]):
            return "won"
    for i in range(3):
        if all(x[i]==symbol for x in board):
            return "won"
    if all(board[i][i]==symbol for i in range(3)):
        return "won"
    if all(board[i][2-i]==symbol for i in range(3)):
        return "won"
    if all(all(x for x in b) for b in board):
        return "draw"

def getName(name):
    i = sum((1 if n.startswith(name) else 0 for n in USERS))
    if i==0:
        return name
    else:
        return "{}#{}".format(name, i)
        
    

async def sendData(client):
    client["game"]["games"] = list(GAMES)
    await client["socket"].send(json.dumps(client["game"]))

async def sendAll():
    for u in USERS:
        await sendData(USERS[u])

async def hello(ws, path):
    
    client = {
        "socket": ws,
        "game": {
            "name": "",
            "state": "notConnected", #todo
            "board": [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            "games": [],
            "opponent": "",
            "yourTurn": False,
            "yourSymbol": "",
            "result": "",
        },
    }
    try:
        while True:
            
            msg = json.loads(await ws.recv())            
            game = client["game"]
            state = game["state"]

            if state == "notConnected":
                assert(msg["type"]=="join")
                game["name"] = getName(msg["name"])
                USERS[game["name"]] = client
                game["state"] = "lobby"
                print("new player: {}".format(game['name']))
            elif state == "lobby":
                if msg["type"] == "createNewGame":
                    game["state"] = "waitingForGame"
                    game["yourTurn"] = True
                    game["yourSymbol"] = "X"
                    GAMES.add(game["name"])
                    await sendAll()
                elif msg["type"] == "connect":
                    if msg["game"] in GAMES:
                        game["opponent"] = msg["game"]
                        game["state"] = "game"
                        game["yourSymbol"] = "O"
                        GAMES.remove(game["opponent"])
                        game["board"] = USERS[game["opponent"]]["game"]["board"]
                        USERS[game["opponent"]]["game"]["opponent"] = game["name"]
                        USERS[game["opponent"]]["game"]["state"] = "game"
                        await sendData(USERS[game["opponent"]])
                        await sendAll()
            elif state == "game":
                if msg["type"] == "click":
                    if game["yourTurn"] and not game["result"]:
                        if not game["board"][msg["row"]][msg["column"]]:
                            game["board"][msg["row"]][msg["column"]] = game["yourSymbol"]
                            game["yourTurn"] = False
                            USERS[game["opponent"]]["game"]["yourTurn"] = True
                            res = evaluate(game["board"], game["yourSymbol"])
                            if res=="won":
                                game["result"] = "won"
                                USERS[game["opponent"]]["game"]["result"] = "lost"
                            if res=="draw":
                                game["result"] = "draw"
                                USERS[game["opponent"]]["game"]["result"] = "draw"
                            await sendData(USERS[game["opponent"]])
                if msg["type"] == "backToLobby":
                    game["result"] = ""
                    game["board"] = [["" for _ in range(3)] for _ in range(3)]
                    game["opponent"] = ""
                    game["state"] = "lobby"
                    game["yourTurn"] = False
                    await sendAll()

            else:
                print("Unknown packet!!")
            await sendData(client)
    except websockets.exceptions.ConnectionClosedOK:
        game = client["game"]
        name = game["name"]
        if USERS[name]["game"]["opponent"]:
            op = USERS[name]["game"]["opponent"]
            USERS[op]["game"]["state"] = "lobby"
            USERS[op]["game"]["yourTurn"] = False
            USERS[op]["game"]["opponent"] = ""
            USERS[op]["game"]["result"] = ""
            USERS[op]["game"]["board"] = [["" for _ in range(3)] for _ in range(3)]
        del USERS[name]
        print("Lost connection with '{}'".format(name))
        if name in GAMES:
            GAMES.remove(name)
        await sendAll()

start_server = websockets.serve(hello, "0.0.0.0", 9000)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
