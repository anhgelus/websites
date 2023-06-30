<script>

    import Text from "../../Atoms/Text/Text.svelte";
    import ParagraphTitle from "./ParagraphTitle.svelte";

    export let text = "Hello World";
    text = text.split("|");
    export let isJustify = false;
</script>

<style>
    .text-justify {text-align-last: center}
</style>

{#if isJustify}
    <div class="text-justify">
        {#each text as t}
            {#if t === ""}
                <Text text="&nbsp;" customClass="mb-2" />
            {:else }
                <Text text="{t}" customClass="mb-2" />
            {/if}
        {/each}
    </div>
{:else}
    <div class="text-justify">
        {#each text as t}
            {#if t === ""}
                <Text text="&nbsp;" customClass="mb-2" />
            {:else }
                <Text text="{t}" customClass="mb-2" />
            {/if}
        {/each}
    </div>
{/if}

