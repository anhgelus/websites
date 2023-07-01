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

<h1 class="font-bold sm:text-5xl text-4xl {clazz()}">{name}</h1>