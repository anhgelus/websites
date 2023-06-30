<script>
    import Title from "../../Atoms/Title/Title.svelte";
    import Subtitle from "../../Atoms/Title/Subtitle.svelte";

    export let title = '';
    export let description = '';
    export let bgColor = 'bg-base-100';

    export let isNotFullHeight = false;
</script>

{#if !isNotFullHeight}
    <div class="hero min-h-screen {bgColor}">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <Title name="{title}"/>
                <Subtitle name="{description}" />
            </div>
        </div>
    </div>
{:else}
    <div class="hero min-h-75 {bgColor}">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <Title name="{title}"/>
                <Subtitle name="{description}" />
            </div>
        </div>
    </div>
{/if}

