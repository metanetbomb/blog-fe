import api from "./api.js";

export default {

    async getBlogs() {
        await api().get('/blogs')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                return response.data;
            })
    },

    async postBlogs(title, url) {
        const newBlogDTO = {
            title: title,
            url: url
        }
        return await api().post('/blogs', newBlogDTO);
        // .then((response) => {
        //     console.log(response);
        //     return response;
        // })
    },

    async getBlogCards(page, limit) {
        return await api().get('/blogs/cards')
        // .then((response) => {
        //     console.log(response);
        //     console.log(response.data);
        //     return response.data;
        // })
    },

    async patchBlogCard(id, is_pined, status) {
        const updateCardDTO = {
            id: id,
            is_pined: is_pined,
            status: status
        }
        console.log(updateCardDTO);
        return await api().patch('/blogs/card/' + id, updateCardDTO)
        // .then((response) => {
        //     console.log(response);
        //     console.log(response.data);
        //     return response.data;
        // })
    },


}