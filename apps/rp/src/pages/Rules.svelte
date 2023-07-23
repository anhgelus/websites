<script>
    import Header from "./common/Header.svelte";
    import Footer from "./common/Footer.svelte";
    import ParagraphImage from "@anhgelus/ui/src/Organisms/Contents/ParagraphImage.svelte";
    import CenteredHeroOverlayBtn from "@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte";
    import ButtonEndPage from "@anhgelus/ui/src/Atoms/Button/ButtonEndPage.svelte";

    export let bgColorAccent, bgColor;
    export let contents = [
        {
            file: "",
            image: "",
            alt: "",
            asImage: true
        }
    ]
</script>

<Header bgColor="{bgColorAccent}"/>
<CenteredHeroOverlayBtn title="Règles" description="Les règles généralistes" {bgColor}
                        image="/rules-wallpaper.jpg" btn="Mmmm" btnHref="#scrolled"/>
<section class="mx-auto max-w-6xl mt-14" id="scrolled">
    <ParagraphImage {contents} />
</section>

<ButtonEndPage name="Découvrez les RP" href="/rp" />

<Footer bgColor="{bgColorAccent}" noSpace="true"/>