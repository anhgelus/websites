<script>
    export let name = '';
    export let center = false;
</script>
{#if center}
    <h2 class="font-bold text-3xl text-center">{name}</h2>
{:else}
    <h2 class="font-bold text-3xl">{name}</h2>
{/if}