<template>
    <div class="w-42 h-42 shadow-md rounded bg-pink-200 mx-2">
        <div>
            <img class="mr-4 py-1 rounded overflow-clip" :src="'../src/assets/images/blogs/image-320240822134443.jpg'"
        
        alt="Feature Image">
        </div>
        <p class="mx-2 my-2">{{title}}</p>
        <p class="mx-2 my-2">content</p>
    </div>
</template>
<script setup>

const props = defineProps({
    id: Number,
    title: String,
    

})

</script>
<style></style>