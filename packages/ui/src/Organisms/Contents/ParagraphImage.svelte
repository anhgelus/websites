<script>
    import Image from "../../Atoms/Image/Image.svelte";
    import Paragraph from "../../Atoms/Paragraph/Paragraph.svelte";

    export let contents = [
        {
            file: "home.presentation",
            image: "https://placekitten.com/1920/1080",
            alt: "Image"
        }
    ]
</script>

<div class="grid grid-cols-2 justify-center items-center gap-x-24 gap-y-36">
    {#each contents as c, i}
        {#if i%2 === 0}
            <Paragraph path={c.file}/>
            <Image src={c.image} alt={c.alt} customClass="mx-auto rounded-md" />
        {:else}
            <Image src={c.image} alt={c.alt} customClass="mx-auto rounded-md" />
            <Paragraph path={c.file}/>
        {/if}
    {/each}
</div>