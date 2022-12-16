
<script lang="ts">
    export let value: string;
    let input = false;
</script>

<div class="flex gap-x-3 mt-12 mb-2">
    <input id="show-binary" type="checkbox" bind:checked={input} />
    <label for="show-binary">Vis binær</label>
</div>
{#if value.length > 0 && input}
<div class="bg-black w-full py-2 px-4 text-white font-mono">
    <p>Binary output: </p>
    <p class="break-all">{value}</p>
</div>
{/if}