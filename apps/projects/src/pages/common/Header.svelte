<script defer>
    import Navbar from '@anhgelus/ui/src/Organisms/Navbar/Navbar.svelte';

    export let bgColor = 'bg-base-100';
    export let isNavbarAnimated = true;

    function displayNavbar() {
        const navbar = document.getElementById('navbar')
        if (isNavbarAnimated) {
            if (window.scrollY > 1) {
                navbar?.classList.remove('op-dis');
            } else {
                navbar?.classList.add('op-dis');
            }
        }
    }

    const links = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Projects",
            href: "/projects",
        }
    ]
</script>

<style>
    .z-25 {
        z-index: 25;
    }
</style>

<svelte:window on:scroll={displayNavbar} />

<div class="op-dis fixed w-screen z-25" id="navbar"><Navbar name="AW Projects" {bgColor} {links}/></div>