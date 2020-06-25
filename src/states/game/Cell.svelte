<script>
    import {state} from "../../state.js";

    export let row, column;

    $: text = $state.game.board[row][column];
    
    function click() {
        state.click(row, column);
    }
</script>

<style>
    button {
        width: 5em;
        height: 5em;
    }

    .oSelected {
        color: red;
    }
    .xSelected {
        color: green;
    }
</style>

<button on:click={click} class={(text === "O") ? "oSelected" : "xSelected"}>{text}</button>