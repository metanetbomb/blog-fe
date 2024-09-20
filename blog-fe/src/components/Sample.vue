<script setup>
import { ref } from 'vue'
import sample from '../services/sample';
import blogs from '../services/blogs';

// defineProps({
//   msg: String,
// })

const count = ref(0)
// const data = sample.getSample();
// console.log(data);
// const data = await blogs.getBlogs().then((data)=>{console.log("xsxx")});
</script>

<template>
    <div>
        <h1>Sample</h1>
    </div>
</template>

<style scoped></style>
