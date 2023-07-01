<script>
    import Image from "../../Atoms/Image/Image.svelte";
    import Paragraph from "../../Atoms/Paragraph/Paragraph.svelte";

    export let contents = [
        {
            file: "home.presentation",
            image: "https://placekitten.com/1920/1080",
            alt: "Image",
            asImage: true
        }
    ]

    $: console.log(contents)
</script>

{#each contents as c, i}
    {#if !c.asImage}
        <Paragraph path={c.file}/>
    {:else if i%2 === 0}
        <div class="grid grid-cols-2 justify-center items-center gap-x-24 gap-y-36">
            <Paragraph path={c.file}/>
            <Image src={c.image} alt={c.alt} customClass="mx-auto rounded-md" />
        </div>
    {:else}
        <div class="grid grid-cols-2 justify-center items-center gap-x-24 gap-y-36">
            <Image src={c.image} alt={c.alt} customClass="mx-auto rounded-md" />
            <Paragraph path={c.file}/>
        </div>
    {/if}
{/each}
