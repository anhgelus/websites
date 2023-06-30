<script>
    import FooterLinks from "../../Molecules/Footer/FooterLinks.svelte";
    import Copyright from "../../Molecules/Footer/Copyright.svelte";
    import Credits from "../../Molecules/Footer/Credits.svelte";

    export let bgColor = "bg-base-200";
</script>

<footer class="footer footer-center p-10 {bgColor} text-base-content rounded">
    <FooterLinks />
    <Copyright />
    <Credits />
</footer>
