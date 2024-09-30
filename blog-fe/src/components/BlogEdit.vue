<template>
    <div class="rounded flex-col justify-center">

        <!-- tags -->
        <div class="flex-cols justify-center items-cente bg-slate-100 rounded-md py-6 px-10 mb-4 mx-4">
            <p class="align-middle text-left font-bold">Tags: </p>
            <div class="flex mt-2">
                <button v-for="(t, index) in tags" class="border-2 border-gray-500 text-gray-500 mr-1 px-3 py-1.5">{{ t
                    }}</button>
            </div>
        </div>

        <!-- edit -->
        <div class="text-left flex-cols justify-center items-center bg-slate-100 rounded-md py-6 px-10 mb-4 mx-4">
            <div class="flex justify-end">
                <button class="border border-gray-500 px-4 py-1.5">save</button>
            </div>

            <p class="mb-0">Title (Unique) - Meta keyword</p>
            <input v-model="titleText" type="text" placeholder="blog title" class="w-full h-10 rounded border">
            <p class="mb-0">URL (Unique)</p>
            <input v-model="urlText" type="text" placeholder="blog url" class="w-full h-10 rounded border">
            <p class="mb-0">Description</p>
            <textarea v-model="descriptionText" placeholder="description" class="w-full rounded border"></textarea>
            <p class="mb-0">Meta keyword</p>
            <textarea v-model="metaKeywordText" placeholder="meta keyword" class="w-full rounded border"></textarea>
            <p class="mb-0">Meta description</p>
            <textarea v-model="metaDescritpText" placeholder="meta description"
                class="w-full rounded border"></textarea>
            <p class="mb-0">Feature image</p>
            <p class="mb-0">Feature image ALT</p>
            <input v-model="imageALTText" type="text" placeholder="image alt" class="w-full h-10 rounded border">

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

const titleText = ref('')
const urlText = ref('')
const descriptionText = ref('')
const metaKeywordText = ref('')
const metaDescritpText = ref('')
const imageALTText = ref('')

const tags = ref(["cash", "blackjack", "cypto"]);

//load tag

//load by id


</script>
<style scoped></style>
