<script>
    import Header from "../common/Header.svelte";
    import Footer from "../common/Footer.svelte";
    import CenteredHeroOverlayBtn from "@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte";
    import ParagraphImage from "@anhgelus/ui/src/Organisms/Contents/ParagraphImage.svelte";
    import ButtonEndPage from "@anhgelus/ui/src/Atoms/Button/ButtonEndPage.svelte";
    import Link from "@anhgelus/ui/src/Atoms/Link/Link.svelte";
    import Prose from "@anhgelus/ui/src/Atoms/Contents/Prose.svelte";
    import {genLinkFromProject, genPathFromProject} from "@anhgelus/functions";

    export let bgColorAccent, bgColor;
    export let routeData = {
        router: {
            route: (path) => {}
        },
        params: new Map().set("hello", "world"),
        getQuery: (id) => {}
    };
    export let project = {
        "name": "",
        "image": "",
        "description": "",
        "content": {
            "presentation": "presentation",
            "story": "story",
            "content": "content",
            "rules": "rules"
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
    }
    let contents = () => {
        const c = project.content
        c.presentation = genLinkFromProject(project.name, c.presentation)
        c.story = genLinkFromProject(project.name, c.story)
        c.content = genLinkFromProject(project.name, c.content)
        c.rules =  genLinkFromProject(project.name, c.rules)
        console.log(c)
        return [c.presentation, c.story, c.content, c.rules]
    }

    let links = () => project.content.links

    let data = () => {
        return `<h2>Credits</h2><p>${project.content.credits}</p>`
    }
    
    let getContent = async () => {
        const tab = routeData.getQuery("tab")
        let path
        let content = [{
            "file": "",
            "image": "",
            "alt": "",
            "asImage": true
        }]
        switch (tab) {
            case "presentation":
            case undefined:
                path = contents()[0];
                break;
            case "story":
                path = contents()[1];
                break;
            case "content":
                path = contents()[2];
                break;
            case "rules":
                path = contents()[3];
                break;
            default:
                path = undefined
        }
        if (path === undefined) {
            routeData.router.route("404")
            return
        }
        content = await (await fetch(window.location.origin + path + ".json")).json()
        content.forEach((c) => {
            c.file = genPathFromProject(project.name, c.file)
            c.image = genLinkFromProject(project.name, c.image)
        })
        return content
    }

    let tabClazz = (tab) => {
        const query = routeData.getQuery("tab")
        if ((query === undefined || query === "presentation") && tab === "presentation") {
            return "tab tab-lifted tab-active";
        } else if (tab !== query) {
            return "tab tab-lifted"
        }
        return "tab tab-active tab-lifted";
    }
</script>

<Header bgColor="{bgColorAccent}"/>

<CenteredHeroOverlayBtn title={project.name} description={project.description} {bgColor}
                        image={genLinkFromProject(project.name, project.image)} btn="Découvrez en plus!" btnHref="#scrolled"/>

<section class="mx-auto max-w-6xl mt-14" id="scrolled">
    <div class="tabs">
        <Link content="Présentation" href="?tab=presentation" customClass={tabClazz("presentation")} />
        <Link content="Histoire" href="?tab=story" customClass={tabClazz("story")} />
        <Link content="Contenus" href="?tab=content" customClass={tabClazz("content")} />
        <Link content="Règles" href="?tab=rules" customClass={tabClazz("rules")} />
    </div>
    <ParagraphImage contents={getContent()} />
    <div class="my-16 mx-8 xl:mx-0">
        <Prose data={data()} />
    </div>
</section>

<ButtonEndPage name="Découvrez mes autres RPs" href="/projects" />

<Footer bgColor="{bgColorAccent}" noSpace="true"/>