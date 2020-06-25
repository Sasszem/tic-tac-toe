import {writable} from 'svelte/store';

// state.js
// custom svelte store for storing game state
// and communicating with the server via websockets


// store factory function
function createState(address) {
    // create and connect websocket
    let ws = new WebSocket(address);

    const { subscribe, update } = writable({
        ws: ws,
        game: {
            state: "name",
            games: [],
            // other state variables will get populated via server messages
            // these are just the strictly-needed defaults
        }
    });


    // send packet helper
    // serializes packet to JSON
    // enforces type attribute
    function sendPacket(type, data = {}) {
        ws.send(JSON.stringify({...data, type: type}));
    }


    // on message
    // set local state to server state
    ws.onmessage = function(evt) {
        update(state => {return {...state, game: JSON.parse(evt.data)}});
    }


    // on error
    // set cantConnect to true, state to "name"
    // returning to the name screen and 
    ws.onerror = function(evt) {
        update(state=>{return {...state, cantConnect: true, state: "name"}});
    }

    // return custom store
    // implementing the sending of event messages
    return {
		subscribe,

        
        click: (row, column) => {
            sendPacket("click", {row, column});
        },

        setName: (name) => {
            sendPacket("join", {name});
        },

        connectToGame: (game) => {
            sendPacket("connect", {game});
        },

        createNew: () => {
            sendPacket("createNewGame");
        },

        backToLobby: () => {
            sendPacket("backToLobby")
        }
	};
}


// server address
const serverAddress = "__gameServerAddress__";

export let state = createState(serverAddress)