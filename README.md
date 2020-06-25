# tic-tac-toe

A very simple tic-tac-toe project. Really I'm just trying out svelte and experimenting with websockets, so I coded this up in a day or two.
Demo should be alaviable [here](http://justthatguy.ddns.net), but I don't think I'll leave the server open forever...

## building

### client

- You need `npm` installed.
- Clone the repo, run `npm install`.
-To launch test server: `npm run dev`. 
Please note that in debug mode the page will try to connect to `localhost:9000` instead of the production server! (this is set up in `rollup.config.js` via the replace plugin)
- To build the page: `npm run build`

### server

#### Using pipenv

I've used pipenv, that should manage dependencies for you. 

To launch server:

- cd into `server`
- `pipenv run python3 main.py`

#### Without pipenv

- `sudo pip3 install websockets`
- `cd server`
- `python3 main.py`

This code requires `websockets 8` which requires `python 3.7`! It is still possible to run the server on rapsbian, nust you have to build python from source which takes a long time.