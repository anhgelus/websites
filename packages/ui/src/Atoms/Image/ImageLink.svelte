<script>
    import Image from "./Image.svelte";

    export let src = "";
    export let alt = "";
    export let customClass = "";
    export let href = '';
    export let isBlank = false;
    export let customLinkClass = '';
</script>


{#if isBlank}
    <a {href} class="link {customLinkClass}" target="_blank" rel="noreferrer"><Image {src} {alt} {customClass} /></a>
{:else}
    <a {href} class="link {customLinkClass}"><Image {src} {alt} {customClass} /></a>
{/if}