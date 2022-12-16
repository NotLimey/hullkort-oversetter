<script lang="ts">
	import BinaryOutput from '../components/BinaryOutput.svelte';
    import PunchCard from '../components/PunchCard.svelte';
	import { binaryToBinaryArray, toBinary } from '../lib/translateToBinary';
	import type { PageData } from './$types';
    
    export let data: PageData;
    const chunkSize = 960;
    let chunks: ((0 | 1)[])[] = [];
    let input = 'Hei kristoffer hvordan går det med ryggen?';
    let binaryOutput = '';

    const convertToChunks = (arr: (0 | 1)[]): (0 | 1)[][] => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const convert = (val: string) => {
        const bin = toBinary(val)
        const binArr = binaryToBinaryArray(bin);
        chunks = convertToChunks(binArr);
        binaryOutput = bin;
    }

</script>


<h1 class="text-3xl">{data.title}</h1>
<p>{data.description}</p>
<div class="my-4">
    <textarea class="bg-black border border-stone-700 text-gray-100 w-full px-4 py-1.5" rows="5" type="text" bind:value={input} on:change={e => input = e.currentTarget.value} />
    <button class="bg-white text-black px-4 py-1.5 rounded-md" on:click={() => convert(input)}>Oversett</button>
</div>
<div class="flex flex-col gap-y-4 mt-6">
    {#each chunks as chunk}
        <PunchCard binaries={chunk} />
    {/each}
</div>
<BinaryOutput value={binaryOutput} />