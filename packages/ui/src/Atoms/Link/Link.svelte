<script>
    export let content = '';
    export let href = '';
    export let isBlank = false;
    export let customClass = '';
</script>

{#if isBlank}
    <a {href} class="link {customClass}" target="_blank" rel="noreferrer">{content}</a>
{:else}
    <a {href} class="link {customClass}">{content}</a>
{/if}