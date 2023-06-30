<script>
    import Players from "../Partners/Players.svelte";
    import Title3 from "../../Atoms/Title/Title3.svelte";

    export let players = [
        {
            name: "",
            team: "",
            youtube: "",
            twitch: "",
            image: ""
        }
    ]
    export let name = ""
</script>

<div class="my-8">
    <div class="my-4">
        <Title3 name="Équipe {name}" />
    </div>
    <Players {players} />
</div>