<style>
    * {
        font-family: 'Courier New', Courier, monospace;
    }

    p {
        display: inline-block;
        content: " ";
        width: 50px;
        height: 50px;
        border-style: double;
        border-radius: 25px;
        border-color: black transparent black transparent;
        border-width: 5px;
        animation: spinner 1s linear infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>


<h2>Waiting for another player...</h2>
<p></p>