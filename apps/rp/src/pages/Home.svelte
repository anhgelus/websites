<script defer>
    import Header from "./common/Header.svelte";
    import Footer from "./common/Footer.svelte";

    import CenteredHeroOverlayBtn from '@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte';
    import ButtonEndPage from '@anhgelus/ui/src/Atoms/Button/ButtonEndPage.svelte';
    import ParagraphImage from '@anhgelus/ui/src/Organisms/Contents/ParagraphImage.svelte';

    export let bgColorAccent, bgColor;
    export let contents = [
        {
            file: "home.presentation",
            image: "https://placekitten.com/1920/1080",
            alt: "Image",
            asImage: true
        }
    ]
</script>

<Header bgColor="{bgColorAccent}"/>

<CenteredHeroOverlayBtn title="AW RP" description="Le monde du RP" {bgColor}
                        image="/home-wallpaper.jpg" btn="Quoi ?" btnHref="#scrolled"/>
<section class="mx-auto max-w-6xl mt-14" id="scrolled">
    <ParagraphImage {contents} />
</section>

<ButtonEndPage name="Découvrez les RP" href="/projects" />

<Footer bgColor="{bgColorAccent}"/>
