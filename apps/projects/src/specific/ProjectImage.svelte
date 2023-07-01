<script>
    import Title from '@anhgelus/ui/src/Atoms/Title/Title.svelte';
    import {genSlug} from "@anhgelus/functions";

    export let image;
    export let projectName;
    export let right = false;
    let clazz = () => {
        if (!right) {
            return "ml-3/10"
        }
        return "mr-3/10 ml-auto"
    }
</script>

<a href="/projects/{genSlug(projectName)}">
    <div class=" h-full w-full flex items-center relative min-h-66 max-w-full project-image">
        <div class="absolute w-full h-full brightness-50 z-0 bg clickable" style="background: fixed center/cover url({image})"></div>
        <div class="text-accent-content relative z-10 uppercase clickable {clazz()}">
            <Title name={projectName} clickable />
        </div>
    </div>
</a>
