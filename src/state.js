import {writable} from 'svelte/store';
import { xlink_attr } from 'svelte/internal';

function createState(defVal) {
    let ws = new WebSocket("ws://46.107.120.54:85");
    const { subscribe, set, update } = writable({
        ws: ws,
        connected: false,
        game: {
            state: "name",
            games: [],
            yourTurn: false,
            yourSymbol: "O",
        }
    });

    ws.onopen = function() {
        update(n=>{
            return {
                ...n,
                connected:true
            };
        });
    }
    
    ws.onmessage = function(evt) {
        console.log(JSON.parse(evt.data))
        update(state => {return {...state, game: JSON.parse(evt.data)}});
    }

    ws.onerror = function(evt) {
        update(state=>{return {...state, cantConnect: true}});
    }

    return {
		subscribe,
        
        click: (i, j) => {
            ws.send(JSON.stringify({type:"click", row: i, column: j}));
        },

        setName: (name) => {
            ws.send(JSON.stringify({type: "join", name: name}))
        },

        refreshGames: () => {
            console.log("Refresh")
            ws.send(JSON.stringify({type: "requestGamesList"}))
        },

        connectToGame: (game) => {
            ws.send(JSON.stringify({type: "connect", game:game}))
        },

        createNew: () => {
            ws.send(JSON.stringify({type: "createNewGame"}))
        },

        backToLobby: () => {
            ws.send(JSON.stringify({type: "backToLobby"}))
        }
	};
}


export let state = createState()