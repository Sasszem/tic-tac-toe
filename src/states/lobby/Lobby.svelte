<script>
    import {state} from "../../state.js";
    import ServerRow from "./ServerRow.svelte";

    $: games = $state.game.games;
    $: noGames = games.length === 0;

    function create() {
        state.createNew();
    }
</script>

<style>
    * {
        font-family: 'Courier New', Courier, monospace;
    }

    button {
        padding: 3px;
    }

    .table {
        width: 90%;
        margin: 0 auto;
        border: double;
        margin-bottom: 30px;
    }
    
    .button {
        border-style: double;
        border-radius: 10px;
    }

    .new {
        background: chartreuse;
    }

    .container {
        width: 50%;
        margin: 0 auto;
        border-style: double;
    }

    .header {
        width: 90%;
        margin: 0 auto;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>

<div class="container">
    <div class="header box-set">
        <h2>List of games: </h2>
        <button class="new button" on:click={create}>Create new</button>
    </div>
    {#if noGames}
        <h3>No games alaviable!</h3>
    {:else}
        <div class="table">
            {#each games as g}
                <ServerRow game={g}/>
            {/each}
        </div>
    {/if}
</div>


