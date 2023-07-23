<script>
    import Header from "../common/Header.svelte";
    import Footer from "../common/Footer.svelte";
    import CenteredHeroOverlayBtn from "@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte";
    import ParagraphImage from "@anhgelus/ui/src/Organisms/Contents/ParagraphImage.svelte";
    import Links from "@anhgelus/ui/src/Organisms/Contents/Links.svelte";
    import ButtonEndPage from "@anhgelus/ui/src/Atoms/Button/ButtonEndPage.svelte";
    import Prose from "@anhgelus/ui/src/Atoms/Contents/Prose.svelte";
    import {genLinkFromProject, genPathFromProject} from "@anhgelus/functions";

    export let bgColorAccent, bgColor;
    export let project = {
        "name": "",
        "image": "",
        "description": "",
        "content": {
            "presentation": {
                "file": "",
                "image": "",
                "alt": "",
                "asImage": false
            },
            "faq": {
                "file": "",
                "image": "",
                "alt": "",
                "asImage": false
            },
            "docs": {
                "file": "",
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
                "file": "",
                "image": "",
                "alt": "",
                "asImage": false
            }
        }
    }

    let contents = () => {
        const c = project.content
        if (c.presentation.file.startsWith("projects")) return [c.presentation, c.faq, c.docs, c.specific]
        c.presentation.file = genPathFromProject(project.name, c.presentation.file)
        c.presentation.image = genLinkFromProject(project.name, c.presentation.image)
        c.faq.file = genPathFromProject(project.name, c.faq.file)
        c.faq.image = genLinkFromProject(project.name, c.faq.image)
        c.docs.file = genPathFromProject(project.name, c.docs.file)
        c.docs.image = genLinkFromProject(project.name, c.docs.image)
        c.specific.file = genPathFromProject(project.name, c.specific.file)
        c.specific.image = genLinkFromProject(project.name, c.specific.image)
        return [c.presentation, c.faq, c.docs, c.specific]
    }

    let links = () => project.content.links

    let data = () => {
        return `<h2>Credits</h2><p>${project.content.credits}</p>`
    }

</script>

<Header bgColor="{bgColorAccent}"/>

<CenteredHeroOverlayBtn title={project.name} description={project.description} {bgColor}
                        image={genLinkFromProject(project.name, project.image)} btn="Discover more!" btnHref="#scrolled"/>

<section class="mx-auto max-w-6xl mt-14" id="scrolled">
    <ParagraphImage contents={contents()} />
    <div class="my-16 mx-8 xl:mx-0">
        <Prose data={data()} />
    </div>
    <Links links={links()} />
</section>

<ButtonEndPage name="Discover other projects" href="/projects" />

<Footer bgColor="{bgColorAccent}" noSpace="true"/>