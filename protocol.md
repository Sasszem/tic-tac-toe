# Protocol

Server-client communications works using websockets (port: 85)
Each message should be JSON, and should have a type attribute
Client sends events, server replies with state
Server can send state even without a preceeding event

## Event types

### join

- contains `name`

### createNewGame

### connect

- cointains `game` - opponent name

### click

- from client
- `row`, `column`

### backToLobby

## State

Game state has the following fields

- `name` - player name (string)
- `state` - current state (string)
- `board` - 3x3 2D array of strings. Default to `""`
- `games` - array of strings (opponent names)
- `opponent` - current opponent
- `yourTurn` - boolean - if we van make the next move
- `symbol` - string - `"X"` or `"O"`, defaults to `""`
- `result` - string - `"won"`, `"lost"`, `"draw"` or `""` (default)
- `cantConnect` - client ONLY, signals error

### Valid state strings

- `"name"` - default. Name input field.
- `"lobby"` - waiting in lobby
- `"waitingForGame"` - created ga,e. waiting for other player to join
- `"game"` - currently in a game
