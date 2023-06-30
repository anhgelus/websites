<script>
    import Title from "../../Atoms/Title/Title.svelte";
    import Subtitle from "../../Atoms/Title/Subtitle.svelte";

    export let title = '';
    export let description = '';
    export let image = '';
    export let bgColor = 'bg-base-100';
    export let isNotFullHeight = false;
</script>

{#if !isNotFullHeight}
    <div class="hero min-h-screen {bgColor}"  style="background-image: url({image});">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center">
            <div class="max-w-md">
                <Title name="{title}"/>
                <Subtitle name="{description}" />
            </div>
        </div>
    </div>
{:else}
    <div class="hero min-h-75 {bgColor}" style="background-image: url({image});">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center">
            <div class="max-w-md">
                <Title name="{title}"/>
                <Subtitle name="{description}" />
            </div>
        </div>
    </div>
{/if}
