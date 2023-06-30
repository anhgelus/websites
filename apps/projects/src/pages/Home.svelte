<script defer>
    import CenteredHeroOverlayBtn from '@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte';
    import Header from "./common/Header.svelte";
    import Footer from "./common/Footer.svelte";

    export let bgColorAccent, bgColor;
</script>

<Header bgColor="{bgColorAccent}"/>

<CenteredHeroOverlayBtn title="Titre" description="Description" {bgColor}
                        image="https://placekitten.com/1920/1080" btn="En savoir plus" btnHref="#scrolled"/>
<section class="mx-auto max-w-6xl mt-14" id="scrolled">

</section>

<!--<ButtonEndPage name="Bouton de fin de page" href="/lien" />-->

<Footer bgColor="{bgColorAccent}"/>
