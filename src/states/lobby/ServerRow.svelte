<script>
    import {state} from "../../state.js";
    
    export let game;

    function connect() {
        state.connectToGame(game);
    }
</script>


<style>
    * {
        font-family: 'Courier New', Courier, monospace;
    }

    .table-row:nth-child(odd) {
        background: silver;
    }

    .table-row:nth-child(even) {
        background: white;
    }

    .table-row {
        padding: 10px;
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .table-row p {
        margin: 0;
    }

    .connect-button {
        background: rgb(10, 226, 197);
        border-radius: 10px;
        border-style: double;
    }
</style>



<div class="table-row">
    <p>{game}</p>
    <button class="connect-button" on:click={connect}>Connect</button>
</div>