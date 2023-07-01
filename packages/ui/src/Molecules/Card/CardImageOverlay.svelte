<script>
    import ParagraphText from "../../Atoms/Contents/ParagraphText.svelte";
    import Button from "../../Atoms/Button/Button.svelte";
    import ButtonPrimary from "../../Atoms/Button/ButtonPrimary.svelte";

    export let title = '';
    export let content = [""];
    export let btn = '';
    export let btnLink = '';
    export let isBtnPrimary = false;
    export let image = "";
    export let alt = "";
</script>

<div class="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src={image} alt={alt} /></figure>
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <div class="test-justify">
            {#each content as c}
                <p>{c}</p>
            {/each}
        </div>
        <div class="card-actions justify-end">
            {#if isBtnPrimary}
                <ButtonPrimary name={btn} href={btnLink} />
            {:else}
                <Button name={btn} href={btnLink} />
            {/if}
        </div>
    </div>
</div>
