<script>
    export let name = '';
    export let href = '';
    export let isBlank = false;
    export let isDisabled = false;
    export let customClass = "";
</script>

{#if isDisabled}
    <a {href} class="btn {customClass}" disabled="disabled">{name}</a>
{:else}
    {#if isBlank}
        <a {href} class="btn {customClass}" target="_blank" rel="noreferrer">{name}</a>
    {:else}
        <a {href} class="btn {customClass}">{name}</a>
    {/if}
{/if}