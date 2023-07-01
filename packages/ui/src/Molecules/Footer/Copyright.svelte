<script>
    import LinkHoverUnderlined from "../../Atoms/Link/Link-HoverUnderlined.svelte";

    export let name = "anhgelus World";
    export let year = "2023";
</script>

<div>
    <p> {name} &copy; {year} - Content under the license CC-BY-SA 4.0, source code under the license AGPL.</p>
    <p>Some images may come from <LinkHoverUnderlined content="Pixabay" href="https://pixabay.com/" isBlank />.</p>
</div>
