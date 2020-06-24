<script>
    let value;
    import {state} from "./state.js";

    function click() {
        state.setName(value);
    }
</script>

<style>
    * {
        font-family: 'Courier New', Courier, monospace;
    }
    
    .offline {
        color: red;
    }
</style>

<div class="">
    <div class="">
        <h1>
            Tic-tac-toe!
        </h1>
    </div>
    <form>
        <p>
            Enter your name:
        </p>
        <input type="text" bind:value autofocusla>
        <input type="submit" on:click|preventDefault={click} value="Join">
    </form>
    {#if $state.cantConnect}
        <p class="offline">Offline!</p>
    {/if}
</div>
