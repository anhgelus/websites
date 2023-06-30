<script>
    import Link from "./Link.svelte";

    export let content = '';
    export let href = '';
    export let isBlank = false;
    export let customClass = '';
    customClass = customClass + ' link-hover';

</script>

<Link {content} {href} customClass="{customClass}" {isBlank} />