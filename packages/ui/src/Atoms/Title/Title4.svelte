<script>
    export let name = '';
    export let center = false;
</script>
{#if center}
    <h4 class="text-xl text-center">{name}</h4>
{:else}
    <h4 class="text-xl">{name}</h4>
{/if}