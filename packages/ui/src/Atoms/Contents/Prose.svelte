<script>
    import {onMount} from "svelte";

    export let data = "";

    onMount(() => {
        document.querySelectorAll(".prose img").forEach(img => {
            if (img.classList.contains("rounded-md")) return;
            img.classList.add("rounded-md");
        });
    });
</script>

<div class="my-12 prose max-w-full">
    {@html data}
</div>