<script>
    import NavbarLink from "../../Atoms/Navbar/NavbarLink.svelte";

    // export let bgColor = '';
    export let links = [
        {
            name: 'Home',
            href: '/'
        }
    ];
</script>

<div class="flex-none sm:mr-12 mx-auto">
    <ul class="menu menu-horizontal px-1">
        {#each links as link}
            <NavbarLink href={link.href} name={link.name}/>
        {/each}
    </ul>
</div>