<template>
    <div class="w-[960px]  rounded flex-col justify-center">

        <!-- tags -->
        <div class="flex-cols justify-center items-center border border-yellow-400 rounded-md py-6 px-10 mb-4 mx-4">
            <p class="align-middle border font-bold">Tags: </p>
            <div class="flex border">
                <button class="border-2 border-gray-500 text-gray-500">bomb</button> <button>bomb</button>
                <button>bomb</button>
            </div>
        </div>

        <!-- edit -->
        <div
            class="text-left flex-cols justify-center items-center border border-yellow-400 rounded-md py-6 px-10 mb-4 mx-4">
            <div class="border flex justify-end">
                <button class="border border-gray-500 px-4 py-1.5">save</button>
            </div>

            <p class="mb-0 border border-red-500">Title (Unique) - Meta keyword</p>
            <input type="text" placeholder="blog title" class="w-full h-10 rounded border">
            <p class="mb-0">URL (Unique)</p>
            <input type="text" placeholder="blog url" class="w-full h-10 rounded border">
            <p class="mb-0">Description</p>
            <input type="text" placeholder="description" class="w-full h-10 rounded border">
            <p class="mb-0">Meta keyword</p>
            <input type="text" placeholder="meta keyword" class="w-full h-10 rounded border">
            <p class="mb-0">Meta description</p>
            <input type="text" placeholder="meta description" class="w-full h-10 rounded border">
            <textarea class="w-full border border-yellow-400"></textarea>
            <p class="mb-0">Feature image</p>
            <p class="mb-0">Feature image ALT</p>


            <p class="mb-0">Content</p>
            <div class="flex justify-end">
                <button class=" text-right border border-gray-500 px-4 py-1.5">save</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex/dist/vuex.cjs.js';

const props = defineProps({
    id: Number,
});

const store = useStore();

//load tag

//load by id


</script>
<style scoped></style>
