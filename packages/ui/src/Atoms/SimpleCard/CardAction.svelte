<script>
    export let bgColor = 'bg-base-100';
    export let title = 'SimpleCard title!';
    export let content = '';
    content = content.split('|');
    export let imageLink = '';
    export let imageAlt = '';
    export let btn = '';
    export let btnLink = '';
    export let btnColor = '';
    export let isBlank = false;
</script>

<div class="card w-96 {bgColor} shadow-xl text-{bgColor}-content">
    <figure><img src="{imageLink}" alt="{imageAlt}" /></figure>
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        {#each content as c}
            <p>{c}</p>
        {/each}
        <div class="card-actions justify-end">
            {#if isBlank}
                {#if btnColor.length !== 0}
                    <a class="btn {btnColor}" href="{btnLink}" target="_blank" rel="noreferrer">{btn}</a>
                {:else}
                    <a class="btn" href="{btnLink}" target="_blank" rel="noreferrer">{btn}</a>
                {/if}
            {:else}
                {#if btnColor.length !== 0}
                    <a class="btn {btnColor}" href="{btnLink}">{btn}</a>
                {:else}
                    <a class="btn" href="{btnLink}">{btn}</a>
                {/if}
            {/if}
        </div>
    </div>
</div>