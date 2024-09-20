<template>
    <div class="w-[960px]  rounded flex-col justify-center">

        <!-- <div class="flex justify-center items-center border border-yellow-400 rounded-md py-6 px-10 mb-4 mx-4">
            <p class="w-36 align-middle">Add new Blogs: </p>
            <input class="text-center h-10 border-2 border-gray-500 rounded mr-2" type="text" placeholder="Blog title"
                v-model="title" />
            <input class="text-center h-10 border-2 border-gray-500 rounded mr-2" type="text" placeholder="Blog url"
                v-model="url" />
            <button class="h-10 text-gray-600 border-2 border-black rounded-md py-0 m-0"
                @click="clickSave">Save</button>
        </div> -->
        <BlogAdd />
        <BlogCard v-for="(c, index) in cardList" :key="index" :id="c.id" :title="c.title" :date="c.date" :pined="c.is_pined" :status="c.status" />

    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import BlogCard from './BlogCard.vue';
import BlogAdd from './BlogAdd.vue';

// defineProps({
//   msg: String,
// })
const store = useStore();
// const title = ref("");
// const url = ref("");
// const cardList = ref([
//     { id: 1, date: "2024-08-20", title: "Blong01", is_pined: false, status: "show" },
//     { id: 2, date: "2024-08-20", title: "Blong02", pined: false, status: "show" },
//     { id: 3, date: "2024-08-20", title: "Blong02", pined: false, status: "show" },
//     { id: 4, date: "2024-08-20", title: "Blong04", pined: false, status: "show" },
//     { id: 5, date: "2024-08-20", title: "Blong05", pined: false, status: "show" },
//     { id: 6, date: "2024-08-20", title: "Blong06", pined: false, status: "show" },
// ]);
// console.log(cardList.value[0]);
store.dispatch("blogs/setBlogCards");
const cardList = computed(() => store.getters['blogs/getBlogCards']);

// const clickSave = async () => {
//     console.log(title.value);
//     console.log(url.value);
//     await store.dispatch("blogs/saveNewBlog", { title: title.value, url: url.value })
//         .then(() => { cleanUI() });
// }
// const cleanUI = () => {
//     console.log("cleanUI");
//     title.value = "";
//     url.value = "";
// }
</script>


<style scoped></style>
