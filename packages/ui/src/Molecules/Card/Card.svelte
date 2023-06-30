<script>
    import ParagraphText from "../../Atoms/Paragraph/ParagraphText.svelte";
    import Button from "../../Atoms/Button/Button.svelte";
    import ButtonPrimary from "../../Atoms/Button/ButtonPrimary.svelte";

    export let title = '';
    export let content = [""];
    export let btn = '';
    export let btnLink = '';
    export let isBtnPrimary = false;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <ParagraphText text={content} />
        <div class="card-actions justify-end">
            {#if isBtnPrimary}
                <ButtonPrimary name={btn} href={btnLink} />
            {:else}
                <Button name={btn} href={btnLink} />
            {/if}
        </div>
    </div>
</div>
