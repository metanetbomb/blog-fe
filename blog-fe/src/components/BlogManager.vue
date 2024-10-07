<template>
    <div class="w-full lg:w-[960px]  rounded flex-col justify-center">

        <BlogAdd />
        <BlogCard v-for="(c, index) in cardList" :key="index" @edit="onEdit" :id="c.id" :title="c.title" :date="c.date"
            :pined="c.is_pined" :status="c.status" />

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
const emit = defineEmits(['open']);
const store = useStore();
// const cardList = ref([
//     { id: 1, date: "2024-08-20", title: "Blong01", is_pined: false, status: "show" },
//     { id: 2, date: "2024-08-20", title: "Blong02", pined: false, status: "show" },
//     { id: 3, date: "2024-08-20", title: "Blong02", pined: false, status: "show" },
//     { id: 4, date: "2024-08-20", title: "Blong04", pined: false, status: "show" },
//     { id: 5, date: "2024-08-20", title: "Blong05", pined: false, status: "show" },
//     { id: 6, date: "2024-08-20", title: "Blong06", pined: false, status: "show" },
// ]);
// store.dispatch("tags/setTags", "token");
store.dispatch("blogs/setBlogCards");
const cardList = computed(() => store.getters['blogs/getBlogCards']);

const onEdit = async (id) => {

    const blogData = await store.dispatch("blogs/setBlog", id);
    if (blogData) {
        emit("open", id);
    }
}

</script>


<style scoped></style>
