
<script lang="ts">
    // take input of array of numbers 1 or 0
    
    export let binaries: (0 | 1)[] = [];
</script>

<div class="bg-orange-300/70 rounded-sm px-4 py-2 w-full grid punch-card gap-y-1 shadow-md">
    {#each binaries as binary}
        {#if binary === 1}
            <div class="bg-white punch rounded-full punched"></div>
        {:else}
            <div class="punch" />
        {/if}
    {/each}
</div>