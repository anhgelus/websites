<script>
    import ImageLink from "./ImageLink.svelte";

    export let src = "";
    export let alt = "";
    export let customClass = "";
    export let href = '';
    export let isBlank = false;
    export let customLinkClass = '';
</script>

<ImageLink {src} {alt} {href} {isBlank} customLinkClass="flex-initial mx-auto {customLinkClass}" {customClass} />