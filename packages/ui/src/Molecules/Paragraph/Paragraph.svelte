<script>

    import Text from "../../Atoms/Text/Text.svelte";
    import ParagraphTitle from "./ParagraphTitle.svelte";

    export let title = "";
    export let text = "Hello World";
    text = text.split("|");

    export let isCenter = false;
    export let barTop = false;
    export let barBottom = false;
    export let barColor = "border-gray-700";

    $: generateClazz = () => {
        let clazz = "my-12";
        if (isCenter) clazz += " text-center"
        return clazz
    }
</script>

{#if barTop}
    <div class="border-t {barColor} max-w-lg mx-auto my-5"></div>
{/if}

<div class="{generateClazz()}">
    {#if title !== ""}
        <ParagraphTitle name="{title}" />
    {/if}
    <div>
        {#each text as t}
            {#if t === ""}
                <Text text="&nbsp;" customClass="mb-2" alignLast="left" />
            {:else }
                <Text text="{t}" customClass="mb-2" alignLast="left" />
            {/if}
        {/each}
    </div>
</div>

{#if barBottom}
    <div class="border-b {barColor} max-w-lg mx-auto my-5"></div>
{/if}
