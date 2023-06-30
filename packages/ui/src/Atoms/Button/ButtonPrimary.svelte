<script>
    import Button from "./Button.svelte";

    export let name = '';
    export let href = '';
    export let isBlank = false;
    export let isDisabled = false;
</script>

<Button {name} {href} {isBlank} {isDisabled} customClass="btn-primary"/>