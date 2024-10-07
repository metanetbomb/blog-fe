import api from "./api.js";

export default {

    async getTag(id) {
        return await api().get('/tags/' + id);
    },

    async postTag(title, meta) {
        console.log(meta);
        const newTagDTO = {
            title: title,
            meta: meta
        }
        return await api().post('/tags', newTagDTO);
    },

    async patchTag(id, title, meta) {
        const updateTagDTO = {
            id: id,
            title: title,
            meta: meta
        }
        return await api().patch('/tags/' + id, updateTagDTO);
    },

    async getTags() {
        return await api().get('/tags')
    },
}