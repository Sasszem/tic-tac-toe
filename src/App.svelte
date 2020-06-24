<svelte:head>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
</svelte:head>

<script>
	import {state} from "./state.js";
	import NameScreen from "./NameScreen.svelte";
	import Game from "./Game.svelte";
	import Lobby from "./Lobby.svelte";
	import WaitingForGame from "./WaitingForGame.svelte";
	$: ST = $state.game.state;
</script>

<main class="outer">
	{#if ST == "name"}
	<NameScreen/>
	{:else if ST == "lobby"}
	<Lobby/>
	{:else if ST == "game"}
	<Game/>
	{:else if ST == "waitingForGame"}
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