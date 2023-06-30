<script>
    import Image from "./Image.svelte";

    export let src = "";
    export let alt = "";
    export let customClass = "";
</script>

<Image {src} {alt} customClass="flex-initial mx-auto {customClass}" />