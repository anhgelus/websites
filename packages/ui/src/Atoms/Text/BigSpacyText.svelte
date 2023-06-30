<script>
    import Text from "./Text.svelte";

    export let text;
</script>

<Text customClass="text-xl py-6" {text}/>