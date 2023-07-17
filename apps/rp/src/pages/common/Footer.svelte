<script>
    import Footer from '@anhgelus/ui/src/Organisms/Footer/Footer.svelte';

    export let bgColor = 'bg-base-200';
    export let noSpace = false;
</script>

{#if !noSpace}
<div class="mt-16">
    <Footer {bgColor}/>
</div>
{:else}
<Footer {bgColor}/>
{/if}
