<script setup>
import { ref } from 'vue'
import BlogManager from './BlogManager.vue';
import Header from './Header.vue';
import BlogEdit from './BlogEdit.vue';

// defineProps({
//   msg: String,
// })

const count = ref(0)
const isEditMode = ref(false);
</script>

<template>
  <div>
    <Header />
    <BlogManager v-if="!isEditMode"/>
    <BlogEdit v-else/>
  </div>
</template>

<style scoped></style>
