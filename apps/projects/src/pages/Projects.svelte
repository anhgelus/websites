<script>
    import Header from "./common/Header.svelte";
    import Footer from "./common/Footer.svelte";
    import ProjectImage from "../specific/ProjectImage.svelte";
    import ProjectSeparator from "../specific/ProjectSeparator.svelte";

    export let bgColorAccent, bgColor;
</script>

<Header bgColor="{bgColorAccent}"/>
<ProjectImage image="https://placekitten.com/1920/712" projectName="Test" />
<ProjectSeparator bgColor="{bgColor}" />
<ProjectImage image="https://placekitten.com/1920/712" projectName="Test 2 " right />
<Footer bgColor="{bgColorAccent}" noSpace="true"/>
