<script>

    export let bgColor = 'bg-base-100';
    export let title = 'SimpleCard title!';
    export let content = '';
    content = content.split('|');
</script>

<div class="card w-96 {bgColor} shadow-xl text-{bgColor}-content">
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        {#each content as c}
            <p>{c}</p>
        {/each}
    </div>
</div>
