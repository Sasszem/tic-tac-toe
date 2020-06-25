<script>
    import Cell from "./Cell.svelte";
    import {state} from "../../state.js";

    function back() {
        state.backToLobby();
    }
</script>

<style>
    * {
        font-family: 'Courier New', Courier, monospace;
    }

    table {
        display: inline-block;
        border-style: double;
        border-radius: 5px;
    }

    .green {
        color: green;
    }
    .red {
        color: red;
    }
    .yellow {
        color: orange;
    }
</style>

<div class="outer">
    <h2>
        Playing againts {$state.game.opponent}
    </h2>
    <h3>
        Your symbol is <span class={($state.game.symbol === "X") ? "green" : "red"}>{$state.game.symbol}</span>
    </h3>
    <table>
        {#each [0, 1, 2] as i}
            <tr>
                {#each [0, 1, 2] as j}
                    <td>
                        <Cell row={i} column = {j}/>
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
    {#if $state.game.result === ""}
        {#if $state.game.yourTurn}
            <p class="yourTurn">Your turn!</p>
        {:else}
            <p class="enemyTurn">Waiting for your enemy...</p>
        {/if}
    {:else}
        {#if $state.game.result === "won"}
            <p class="green">You won!</p>
        {:else if $state.game.result === "lost"}
            <p class="red">You lost!</p>
        {:else if $state.game.result === "draw"}
            <p class="yellow">It's a draw</p>
        {/if}
        <button class="endGame" on:click={back}>Back to lobby</button>
    {/if}
</div>