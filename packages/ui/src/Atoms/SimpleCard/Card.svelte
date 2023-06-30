<script>
    export let bgColor = 'bg-base-100';
    export let title = 'SimpleCard title!';
    export let content = '';
    content = content.split('|');
    export let imageLink = '';
    export let imageAlt = '';
</script>

<div class="card w-96 {bgColor} shadow-xl text-{bgColor}-content">
    <figure><img src="{imageLink}" alt="{imageAlt}" /></figure>
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        {#each content as c}
            <p>{c}</p>
        {/each}
    </div>
</div>