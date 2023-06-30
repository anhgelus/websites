<script>
    import Button from "./Button.svelte";

    export let name = '';
    export let href = '';
</script>

<div class="text-center">
    <Button {name} {href} customClass="btn-secondary my-16"/>
</div>
