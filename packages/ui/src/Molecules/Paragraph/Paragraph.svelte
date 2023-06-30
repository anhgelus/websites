<script>
    import {Request} from "@anhgelus/functions/src/query/Request"
    import Button from "../../Atoms/Button/Button.svelte";

    export let path = "hello-world";
    path = path.replace(".", "/");

    export let barTop = false;
    export let barBottom = false;
    export let barColor = "border-gray-700";

    const content = new Request(path, 'md').getContent();
</script>

{#if barTop}
    <div class="border-t {barColor} max-w-lg mx-auto my-5"></div>
{/if}

{#await content}
    <Button isDisabled=true name="Loading" customClass="loading-spinner loading loading-md" />
{:then data}
    <div class="my-12 prose">
        {@html data}
    </div>
{:catch error}
    <div class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! {error}</span>
    </div>
{/await}

{#if barBottom}
    <div class="border-b {barColor} max-w-lg mx-auto my-5"></div>
{/if}
