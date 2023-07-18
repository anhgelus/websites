<script>
    import Header from "../common/Header.svelte";
    import Footer from "../common/Footer.svelte";
    import CenteredHeroOverlayBtn from "@anhgelus/ui/src/Molecules/Hero/CenteredHeroOverlayBtn.svelte";
    import ParagraphImage from "@anhgelus/ui/src/Organisms/Contents/ParagraphImage.svelte";
    import ButtonEndPage from "@anhgelus/ui/src/Atoms/Button/ButtonEndPage.svelte";
    import Button from "@anhgelus/ui/src/Atoms/Button/Button.svelte";
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
        if (c.presentation.startsWith("/projects")) return [c.presentation, c.story, c.content, c.rules]
        c.presentation = genLinkFromProject(project.name, c.presentation)
        c.story = genLinkFromProject(project.name, c.story)
        c.content = genLinkFromProject(project.name, c.content)
        c.rules =  genLinkFromProject(project.name, c.rules)
        return [c.presentation, c.story, c.content, c.rules]
    }

    let links = () => project.content.links

    let data = () => {
        return `<h2>Credits</h2><p>${project.credits}</p>`
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
            return "tab tab-bordered tab-active no-load";
        } else if (tab !== query) {
            return "tab tab-bordered no-load"
        }
        return "tab tab-active tab-bordered no-load";
    }
</script>

<Header bgColor="{bgColorAccent}"/>

<CenteredHeroOverlayBtn title={project.name} description={project.description} {bgColor}
                        image={genLinkFromProject(project.name, project.image)} btn="Découvrez en plus!" btnHref="#scrolled"/>

<section class="mx-auto max-w-6xl mt-14" id="scrolled">
    <div class="tabs mx-auto justify-center">
        <a href="?tab=presentation" class={tabClazz("presentation")}>Présentation</a>
        <a href="?tab=story" class={tabClazz("story")}>Histoire</a>
        <a href="?tab=content" class={tabClazz("content")}>Contenus</a>
        <a href="?tab=rules" class={tabClazz("rules")}>Règles</a>
    </div>
    {#await getContent()}
        <Button isDisabled=true name="Loading" customClass="loading-spinner loading loading-md" />
    {:then data}
        <ParagraphImage contents={data} />
    {:catch error}
        <div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! {error.response.status}</span>
        </div>
    {/await}
    <div class="my-16 mx-8 xl:mx-0">
        <Prose data={data()} />
    </div>
</section>

<ButtonEndPage name="Découvrez mes autres RPs" href="/projects" />

<Footer bgColor="{bgColorAccent}" noSpace="true"/>