<script>
    import Title from '@anhgelus/ui/src/Atoms/Title/Title.svelte';
    import {genSlug} from "@anhgelus/functions";

    export let image;
    export let projectName;
    export let right = false;
    let clazz = () => {
        const global = "text-center w-full md:w-auto"
        if (!right) {
            return `2xl:ml-3/10 lg:ml-64 md:ml-12 md:text-left ${global}`
        }
        return `2xl:mr-3/10 lg:mr-64 md:mr-12 md:ml-auto md:text-right ${global}`
    }
</script>

<a href="/projects/{genSlug(projectName)}">
    <div class=" h-full w-full flex items-center relative lg:min-h-66 min-h-80 max-w-full project-image">
        <div class="absolute w-full h-full brightness-50 z-0 bg clickable" style="background: fixed center/cover url({image})"></div>
        <div class="text-accent-content relative z-10 uppercase clickable {clazz()}">
            <Title name={projectName} clickable />
        </div>
    </div>
</a>
