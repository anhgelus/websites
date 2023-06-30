<script>
    import NavbarTitle from "../../Atoms/Navbar/NavbarTitle.svelte";
    import NavbarRight from "../../Molecules/Navbar/NavbarRight.svelte";

    export let name = '';
    export let bgColor = 'base-100';
    export let links = [{
        name: 'Home',
        href: '/'
    }];
</script>

<div class="navbar {bgColor}">
    <NavbarTitle name={name} />
    <NavbarRight {bgColor}/>
</div>