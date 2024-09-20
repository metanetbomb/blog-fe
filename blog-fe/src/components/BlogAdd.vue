<template>

    <div class="flex justify-center items-center border border-yellow-400 rounded-md py-6 px-10 mb-4 mx-4">
        <p class="w-36 align-middle">Add new Blogs: </p>
        <input class="text-center h-10 border-2 border-gray-500 rounded mr-2" type="text" placeholder="Blog title"
            v-model="title" />
        <input class="text-center h-10 border-2 border-gray-500 rounded mr-2" type="text" placeholder="Blog url"
            v-model="url" />
        <button class="h-10 text-gray-600 border-2 border-black rounded-md py-0 m-0" @click="clickSave">Save</button>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const title = ref("");
const url = ref("");

const clickSave = async () => {
    console.log(title.value);
    console.log(url.value);
    await store.dispatch("blogs/saveNewBlog", { title: title.value, url: url.value })
        .then(() => { cleanUI() });
}
const cleanUI = () => {
    console.log("cleanUI");
    title.value = "";
    url.value = "";
}
</script>


<style scoped></style>
