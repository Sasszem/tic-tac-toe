<script>
	import {state} from "./state.js";

	import NameScreen from "./states/NameScreen.svelte";
	import Lobby from "./states/lobby/Lobby.svelte";
	import WaitingForGame from "./states/WaitingForGame.svelte";
	import Game from "./states/game/Game.svelte";

	$: ST = $state.game.state;
</script>

<main class="outer">
	{#if ST === "name"}
	<NameScreen/>
	{:else if ST === "lobby"}
	<Lobby/>
	{:else if ST === "game"}
	<Game/>
	{:else if ST === "waitingForGame"}
	<WaitingForGame/>
	{/if}
</main>

<style>
	.outer {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        border-style: double;
        border-radius: 10px;
		padding: 20px 0 50px 0;
    }
</style>