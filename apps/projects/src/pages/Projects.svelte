<script>
    import Header from "./common/Header.svelte";
    import Footer from "./common/Footer.svelte";
    import ProjectImage from "../specific/ProjectImage.svelte";
    import ProjectSeparator from "../specific/ProjectSeparator.svelte";

    export let bgColorAccent, bgColor;
    export let projects = [{
        "name": "",
        "image": "",
        "description": ""
    }]
</script>

<Header bgColor="{bgColorAccent}"/>
{#each projects as project}
    <ProjectImage image={project.image} projectName={project.name} />
    <ProjectSeparator bgColor={bgColor} />
{/each}
<Footer bgColor="{bgColorAccent}" noSpace="true"/>
