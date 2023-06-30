<script defer>
    import Header from "./common/Header.svelte";
    import Footer from "./common/Footer.svelte";

    import FullImage from '@anhgelus/ui/src/Atoms/Image/FullImage.svelte';
    import CenteredHeroOverlayBtn from '@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte';
    import Paragraph from '@anhgelus/ui/src/Molecules/Paragraph/Paragraph.svelte';

    export let bgColorAccent, bgColor;
    export let contents = [
        {
            file: "home.presentation",
            image: "https://placekitten.com/1920/1080",
            alt: "Image"
        }
    ]
</script>

<Header bgColor="{bgColorAccent}"/>

<CenteredHeroOverlayBtn title="AW Projects" description="The project to govern them all!" {bgColor}
                        image="https://placekitten.com/1920/1080" btn="Excuse me?" btnHref="#scrolled"/>
<section class="mx-auto max-w-6xl mt-14" id="scrolled">
    <div class="grid grid-cols-2 justify-center items-center gap-12">
        {#each contents as c, i}
            {#if i%2 === 0}
                <Paragraph path={c.file}/>
                <FullImage src={c.image} alt={c.alt} />
            {:else}
                <FullImage src={c.image} alt={c.alt} />
                <Paragraph path={c.file}/>
            {/if}
        {/each}
    </div>
</section>

<!--<ButtonEndPage name="Bouton de fin de page" href="/lien" />-->

<Footer bgColor="{bgColorAccent}"/>
