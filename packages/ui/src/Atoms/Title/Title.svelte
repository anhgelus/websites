<script>
    export let name = '';
    export let center = false;
    export let clickable = false;
    const clazz = () => {
        let clazz = '';
        if (clickable) clazz += ' clickable';
        if (center) clazz += ' text-center';
        return clazz;
    }
</script>

<h1 class="font-bold text-5xl {clazz()}">{name}</h1>