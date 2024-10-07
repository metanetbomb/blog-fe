<template>
    <div class="flex justify-center border-2 rounded-md mb-2 mx-4">
        <div class="h-20 flex items-center">
            <p class=" w-48 mr-4">Edit "{{ title }}" tag:</p>
            <p class="mr-4">{{ blogCount }} Blog</p>
            <input type="text" id="edittitle" v-model="inputTitle" class=" mb-1 rounded border-2 h-10 mr-2"></input>
            <input type="text" id="editmeta" v-model="inputMeta" class=" mb-1 rounded border-2 h-10 mr-2"></input>

            <button class="m-0 py-0 h-10 mr-4 rounded-md border-2 border-gray-900" @click="onClickSave">Save</button>


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

    meta: String,
    blogCount: Number,

})

const emit = defineEmits(['edit']);

const selected = ref(props.status)
const pdate = toRef(props.date);
const ddate = new Date(pdate.value).toLocaleDateString();

const inputTitle = ref(props.title);
const inputMeta = ref(props.meta);

const store = useStore();

const onClickPin = async () => {
    await store.dispatch("blogs/setPined", { id: props.id, pined: !props.pined });
}
const onClickEdit = () => {
    console.log(props.id);
    emit("edit", { id: props.id });
}
const onClickSave = async () => {
    console.log(props.id + " title: " + inputTitle.value + " meta: " + inputMeta.value);
    await store.dispatch("tags/updateTags", { id: props.id, title: inputTitle.value, meta: inputMeta.value });
    // alert !
}
const buttonStyle = (status) => {
    let res = "";
    // console.log(status);
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
const onChange = async () => {
    console.log("onChange: " + selected.value);
    await store.dispatch("blogs/setStatus", { id: props.id, status: selected.value });
}
</script>



<style scoped></style>
