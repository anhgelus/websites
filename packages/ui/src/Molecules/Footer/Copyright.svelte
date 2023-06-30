<script>
    import Text from "../../Atoms/Text/Text.svelte";

    export let name = "anhgelus World";
    export let year = "2023";
</script>

<div>
    <Text text="{name} &copy; {year} - Contenu sous licence CC-BY-SA 4.0, code source sous licence AGPL" />
</div>
