<script>
    import ButtonPrimary from "../../Atoms/Button/ButtonPrimary.svelte";
    import Button from "../../Atoms/Button/Button.svelte";

    export let links = [
        {
            "name": "",
            "href": "",
            "primary": false,
            "secondary": false,
            "external": false
        }
    ]
</script>

<div class="flex items-center justify-center gap-12">
    {#each links as link}
        {#if link.primary}
            {#if link.external}
                <ButtonPrimary href={link.href} isBlank=true name={link.name} />
            {:else}
                <ButtonPrimary href={link.href} name={link.name} />
            {/if}
        {:else if link.secondary}
            {#if link.external}
                <Button href={link.href} isBlank=true name={link.name} customClass="btn-secondary" />
            {:else}
                <Button href={link.href} name={link.name} customClass="btn-secondary" />
            {/if}
        {:else}
            {#if link.external}
                <Button href={link.href} isBlank=true name={link.name} />
            {:else}
                <Button href={link.href} name={link.name} />
            {/if}
        {/if}
    {/each}
</div>