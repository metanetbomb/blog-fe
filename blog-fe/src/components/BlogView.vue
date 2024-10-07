<template>
    <div class=" flex justify-center">
        <div class="mt-2 grid grid-cols-4 gap-4 w-[1024px]">
            <BlogViewCard v-for="(i, index) in cardList" class="h-52" 
            :title="i.title"
            />
             
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import BlogViewCard from './BlogViewCard.vue';

// defineProps({
//   msg: String,
// })
const emit = defineEmits(['open']);
const store = useStore();
store.dispatch("blogs/setBlogCards");
const cardList = computed(() => store.getters['blogs/getBlogCards']);
</script>

<style></style>