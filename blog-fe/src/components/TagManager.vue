<template>
    <div class=" flex justify-center">
        <div class="w-full lg:w-[960px] rounded flex-col justify-center">

            <TagAdd />
            <TagCard v-for="(c, index) in cardList" :key="index" @edit="onEdit" :id="c.id" :title="c.title"
                :meta="c.meta" :blogCount="0" />

        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import TagAdd from './TagAdd.vue';
import TagCard from './TagCard.vue';

const emit = defineEmits(['open']);
const store = useStore();

store.dispatch("tags/setTags", "token");
// store.dispatch("tags/setBlogCards");
const cardList = computed(() => store.getters['tags/getTags']);

const onEdit = async (id) => {

    // const blogData = await store.dispatch("blogs/setBlog", id);
    // if (blogData) {
    //     emit("open", id);
    // }
}

</script>


<style scoped></style>
