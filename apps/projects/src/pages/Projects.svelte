<script>
    import Header from "./common/Header.svelte";
    import Footer from "./common/Footer.svelte";
    import ProjectImage from "../specific/ProjectImage.svelte";
    import ProjectSeparator from "../specific/ProjectSeparator.svelte";
    import {genLinkFromProject} from "@anhgelus/functions";

    export let bgColorAccent, bgColor;
    export let projects = [{
        "name": "",
        "image": "",
        "description": ""
    }]
</script>

<Header bgColor="{bgColorAccent}"/>
{#each projects as project, i}
    {#if i%2 !== 0}
        <ProjectImage image={genLinkFromProject(project.name, project.image)} projectName={project.name} right />
    {:else }
        <ProjectImage image={genLinkFromProject(project.name, project.image)} projectName={project.name} />
    {/if}
    {#if i !== projects.length - 1}
        <ProjectSeparator bgColor={bgColor} />
    {/if}
{/each}
<Footer bgColor="{bgColorAccent}" noSpace="true"/>
