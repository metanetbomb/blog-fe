<template>
    <div class="flex justify-center border-2 rounded-md mb-2 mx-4">
        <div class="flex items-center">
            <p class="mr-4">{{ ddate }}</p>
            <p class=" w-48 mr-4">{{ title }}</p>
            <img class="w-32 mr-4 py-1 rounded" :src="'../src/assets/images/blogs/image-320240822134443.jpg'"
                alt="Blog Image">
            <button class="m-0 py-0 h-10 mr-4 rounded-md border-2 border-gray-900">edit</button>
            <button class="m-0 py-0 h-10 w-20 mr-4 rounded-md border-2" :class="pinButtonStyle(pined)" @click="onClickPin">{{ pined ?
                "pined" : "pin" }}</button>
            <button class="m-0 py-0 h-10 w-48 mr-4 rounded-md border-2 " :class="buttonStyle(status)">status :
                {{ status }}</button>
        </div>

    </div>
</template>
<script setup>
import { ref, toRef } from 'vue'
import { useStore } from 'vuex';
import { STATUS_CREATED, STATUS_SHOW, STATUS_HIDE } from './blog-status'

const props = defineProps({
    id: Number,
    title: String,
    date: Date,
    img: String,
    pined: Boolean,
    status: String,
})

const emit = defineEmits(['sdf', 'sdf']);

const pdate = toRef(props.date);
const ddate = new Date(pdate.value).toLocaleDateString();

const store = useStore();

const onClickPin = async () => {
    //send to store
    await store.dispatch("blogs/setPined", { id: props.id, pined: !props.pined });
    //store sent to server

    //recive from server  => no content

    //update store => update

    //should refresh => auto refresh by compute
}
const onClickEdit = () => {
    //send to store

    //store sent to server

    //recive from server 

    //update store

    //should refresh
}
const buttonStyle = (status) => {
    let res = "";
    console.log(status);
    switch (status) {
        case STATUS_CREATED: {
            res = "text-red-500 border-red-400"
        } break;
        case STATUS_SHOW: {
            res = "text-green-400 border-green-400"
        } break;
        case STATUS_HIDE: {
            res = "text-orange-400 border-orange-400"
        } break;
    }
    return res;
}
const pinButtonStyle = (value) => {
    let res = "";
    if (value) {
        res = "text-green-400 border-green-400"
    } else {
        res = "text-red-400 border-red-400"
    }
    return res;
}
</script>



<style scoped></style>
