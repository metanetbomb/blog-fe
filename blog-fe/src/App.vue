<script setup>
import Blogs from './components/Blogs.vue';
import BlogView from './components/BlogView.vue';

</script>

<template>
  <!-- <div class="w-screen h-12 top-0  bg-purple-300"></div> -->
  <!-- <div > -->
    <!-- <nav class="fixed top-0 h-12 w-screen bg-blue-200"> -->
      <nav class=" h-12 w-screen bg-blue-200">
      <router-link class="mr-2" to="/">Blog View</router-link>
      <router-link class="mr-2" to="/manager">Blog Manager</router-link>
      <router-link class="mr-2" to="/tags">Tag Manager</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    <router-view>


    </router-view>
  <!-- </div> -->
  <!-- <div> -->
    <!-- <Blogs /> -->
    <!-- <BlogView /> -->
  <!-- </div> -->
</template>

<style scoped></style>
