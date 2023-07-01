<script>
    import Image from "../../Atoms/Image/Image.svelte";
    import Paragraph from "../../Molecules/Contents/Paragraph.svelte";

    export let contents = [
        {
            file: "home.presentation",
            image: "https://placekitten.com/1920/1080",
            alt: "Image",
            asImage: true
        }
    ]
</script>

{#each contents as c, i}
    {#if !c.asImage}
        <div class="mx-8 xl:mx-0 mb-32">
            <Paragraph path={c.file}/>
        </div>
    {:else if i%2 === 0}
        <div class="md:grid md:grid-cols-2 flex flex-col justify-center items-center md:gap-24 gap-6 md:mb-32 mb-24 mx-8 xl:mx-0">
            <Paragraph path={c.file}/>
            <Image src={c.image} alt={c.alt} customClass="mx-auto rounded-md" />
        </div>
    {:else}
        <div class="md:grid md:grid-cols-2 flex flex-col-reverse justify-center items-center md:gap-24 gap-6 md:mb-32 mb-24 mx-8 xl:mx-0">
            <Image src={c.image} alt={c.alt} customClass="mx-auto rounded-md" />
            <Paragraph path={c.file}/>
        </div>
    {/if}
{/each}
