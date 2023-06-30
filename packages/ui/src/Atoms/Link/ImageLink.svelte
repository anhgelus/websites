<script>
    import Link from "./Link.svelte";

    export let src = '';
    export let alt = '';
    export let href = '';
    export let isBlank = false;
    export let customClass = '';
    export let customImageClass = '';
</script>

{#if isBlank}
    <a {href} class="link {customClass}" target="_blank" rel="noreferrer"><img {src} {alt} class="{customImageClass}"></a>
{:else}
    <a {href} class="link {customClass}"><img {src} {alt} class="{customImageClass}"></a>
{/if}
