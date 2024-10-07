<template>

    <div class="flex justify-center items-center border-2 rounded-md py-6 px-10 mb-4 mx-4 m-4">
        <p class="w-36 align-middle">Add new tag: </p>
        <input class="text-center h-10 border-2 border-gray-500 rounded mr-2" type="text" placeholder="Tag title"
            v-model="title" />
        <input class="text-center h-10 border-2 border-gray-500 rounded mr-2" type="text" placeholder="Meta tag title"
            v-model="meta" />
        <button class="h-10 text-gray-600 border-2 border-black rounded-md py-0 m-0" @click="clickSave" :disabled="title==''">Save</button>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const title = ref("");
const meta = ref("");

const clickSave = async () => {
    console.log(title.value);
    console.log(meta.value);
    if(title.value != "")
    await store.dispatch("tags/createTags", { title: title.value, meta: meta.value })
        .then(() => { cleanUI() });
}
const cleanUI = () => {
    console.log("cleanUI");
    title.value = "";
    meta.value = "";
}
</script>


<style scoped></style>
