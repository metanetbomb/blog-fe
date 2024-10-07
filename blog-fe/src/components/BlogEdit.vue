<template>
    <div class="rounded flex-col justify-center">

        <!-- tags -->
        <div class="flex-cols justify-center items-center bg-slate-100 rounded-md py-6 px-10 mb-4 mx-4">
            <p class="align-middle text-left font-bold">Tags: </p>
            <div class="flex mt-2">
                <button v-for="(t, index) in tags" class="border-2 border-gray-500 text-gray-500 mr-1 px-3 py-1.5"
                    :class="{ ' border-green-500': t.selected, ' text-green-600': t.selected }" @click="onClickTag(t.id)">{{
                        t.title
                    }}</button>
            </div>
        </div>

        <!-- edit -->
        <div class="text-left flex-cols justify-center items-center bg-slate-100 rounded-md py-6 px-10 mb-4 mx-4">
            <div class="flex justify-end">
                <button class="border border-gray-500 px-4 py-1.5">save</button>
            </div>

            <p class="mb-0">Title (Unique) - Meta keyword</p>
            <input v-model="titleText" type="text" placeholder="blog title" class="w-full h-10 rounded border">
            <p class="mb-0">URL (Unique)</p>
            <input v-model="urlText" type="text" placeholder="blog url" class="w-full h-10 rounded border">
            <p class="mb-0">Description</p>
            <textarea v-model="descriptionText" placeholder="description" class="w-full rounded border"></textarea>
            <p class="mb-0">Meta keyword</p>
            <textarea v-model="metaKeywordText" placeholder="meta keyword" class="w-full rounded border"></textarea>
            <p class="mb-0">Meta description</p>
            <textarea v-model="metaDescritpText" placeholder="meta description"
                class="w-full rounded border"></textarea>
            <p class="mb-0">Feature image</p>
            <p class="mb-0">Feature image ALT</p>
            <input v-model="imageALTText" type="text" placeholder="image alt" class="w-full h-10 rounded border">
            <p class="mb-0">Content</p>
            <Editor v-model="myContent" api-key="13eldnuo9uvftx8a5rst616ym2wc9i43fmpbucvk5xody7xw" :init="{
                toolbar_mode: 'sliding',
                plugins: [
                    // Core editing features
                    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                    // Your account includes a free trial of TinyMCE premium features
                    // Try the most popular premium features until Oct 16, 2024:
                    'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                ],
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
            }" initial-value="Welcome to TinyMCE!" />

            <div class="flex justify-end mt-2">
                <button class=" text-right border border-gray-500 px-4 py-1.5 mr-1"
                    @click="onClickCancel">cancel</button>
                <button class=" text-right border border-gray-500 px-4 py-1.5" @cliick="onClickSave">save</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex/dist/vuex.cjs.js';
import Editor from '@tinymce/tinymce-vue'
const props = defineProps({
    id: Number,
});
const emit = defineEmits(['close']);

const store = useStore();

const titleText = ref('')
const urlText = ref('')
const descriptionText = ref('')
const metaKeywordText = ref('')
const metaDescritpText = ref('')
const imageALTText = ref('')

const myContent = ref('');

// const tags = ref([
//     { id: 1, title: "cash", selected: true },
//     { id: 2, title: "blackjack", selected: false },
//     { id: 3, title: "cypto", selected: false }
// ]);
//load tags
const tags = computed(() => store.getters['tags/getTags']);


//load by id


const onClickSave = async () => {
    console.log("onClickSave");
    await store.dispatch("blogs/createTags", { title: title.value, meta: meta.value });
}

const onClickCancel = () => {
    emit("close");
}

//tag event
const onClickTag = (id) => {
    console.log(id);
    let tag = tags.value.find((t) => t.id == id);
    console.log(tag.title);
    tag.selected = !tag.selected;
}


</script>
<style scoped></style>
