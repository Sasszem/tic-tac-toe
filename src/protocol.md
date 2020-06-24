# Protocol

Server-client communications works using websockets (dev port: 8765)
Each message should be JSON, and should have a type attribute

## Packet types

### join

- from client
- contains `name`

### createGame

- from client

### gameCreated

- from server
- has ID

### requestGamesList

- from client
- server should answer with listGames

### listGames

- from server
- contains `games`, a list of `{id, opponent}` objects

### selectGame

- from client
- cointains ID

### gameStart

- from server
- opponent name

### clicked

- from client
- row, column

### setCell

- from server
- row, column, value

### win

- from server

### lose

- from server
