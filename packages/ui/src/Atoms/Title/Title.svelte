<script>
    export let name = '';
    export let center = false;
</script>
{#if center}
    <h1 class="font-bold text-5xl text-center">{name}</h1>
{:else}
    <h1 class="font-bold text-5xl">{name}</h1>
{/if}