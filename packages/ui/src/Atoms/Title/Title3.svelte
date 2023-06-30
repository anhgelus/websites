<script>
    export let name = '';
    export let center = false;
</script>
{#if center}
    <h3 class="font-bold text-2xl text-center">{name}</h3>
{:else}
    <h3 class="font-bold text-2xl">{name}</h3>
{/if}