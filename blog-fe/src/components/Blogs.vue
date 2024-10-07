<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
import BlogManager from './BlogManager.vue';
import Header from './Header.vue';
import BlogEdit from './BlogEdit.vue';

const blogId = ref(0)
const isEditMode = ref(false);

const store = useStore();
store.dispatch("tags/setTags", "token");

const onOpenEditMode = (id) => {
  if (id != 0) {
    if (blogId.value = id)
      isEditMode.value = true;
  }
}
const onCloseEditMode = () => {
  isEditMode.value = false;
}
</script>

<template>
  <div class="flex justify-center">
    <!-- <Header /> -->
    <div class="w-full lg:w-[980px] flex justify-center items-center mt-2">
      <BlogManager v-if="!isEditMode" @open="onOpenEditMode" />
      <BlogEdit v-else :id="blogId" @close="onCloseEditMode" />
    </div>
  </div>
</template>

<style scoped></style>
