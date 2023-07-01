<script>
    import Header from "../common/Header.svelte";
    import Footer from "../common/Footer.svelte";
    import CenteredHeroOverlayBtn from "@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte";
    import ParagraphImage from "@anhgelus/ui/src/Organisms/Contents/ParagraphImage.svelte";
    import ButtonEndPage from "@anhgelus/ui/src/Atoms/Button/ButtonEndPage.svelte";

    export let bgColorAccent, bgColor;
    export let project = {
        "name": "",
        "image": "",
        "description": "",
        "content": {
            "presentation": {
                "path": "",
                "image": "",
                "alt": "",
                "asImage": false
            },
            "faq": {
                "path": "",
                "image": "",
                "alt": "",
                "asImage": false
            },
            "docs": {
                "path": "",
                "image": "",
                "alt": "",
                "asImage": false
            },
            "links": [
                {
                    "name": "",
                    "href": "",
                    "primary": false,
                    "secondary": false,
                    "external": false
                }
            ],
            "credits": "",
            "specific": {
                "path": "",
                "image": "",
                "alt": "",
                "asImage": false
            }
        }
    }

    let contents = () => {
        const c = project.content
        return [c.presentation, c.faq, c.docs, c.specific]
    }
</script>

<Header bgColor="{bgColorAccent}"/>

<CenteredHeroOverlayBtn title={project.name} description={project.description} {bgColor}
                        image={project.image} btn="Discover more!" btnHref="#scrolled"/>

<section class="mx-auto max-w-6xl mt-14" id="scrolled">
    <ParagraphImage contents={contents()} />
</section>

<ButtonEndPage name="Discover other projects" href="/projects" />

<Footer bgColor="{bgColorAccent}" noSpace="true"/>