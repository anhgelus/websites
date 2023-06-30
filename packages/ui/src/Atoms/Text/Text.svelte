<script>
    export let text;
    export let customClass = "";
    export let alignLast = "";
</script>

<style>
    p.left {
        text-align: justify;
        text-align-last: left;
    }
    p.center {
        text-align: justify;
        text-align-last: center;
    }
    p.right {
        text-align: justify;
        text-align-last: right;
    }
</style>

<p class="{customClass} {alignLast}">{text}</p>