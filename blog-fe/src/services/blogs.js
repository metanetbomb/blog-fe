import api from "./api.js";

export default {

    // async getBlogs() {
    //     await api().get('/blogs')
    //         .then((response) => {
    //             console.log(response);
    //             console.log(response.data);
    //             return response.data;
    //         })
    // },
    async getBlogs(id) {
        return await api().get('/blogs/' + id);
    },
    async postBlogs(title, url) {
        const newBlogDTO = {
            title: title,
            url: url
        }
        return await api().post('/blogs', newBlogDTO);
    },



    async patchBlogs(id, title, url, image, content, date, modifyBy) {
        const updateBlogDTO = {
            id: id,
            title: title,
            url: url,
            image: image,
            content: content,
            date: date,
            last_edit_id: modifyBy,
        }
        return await api().patch('/blogs', updateBlogDTO);
    },

    async getBlogCards(page, limit) {
        return await api().get('/blogs/cards')
    },
    async patchBlogCard(id, is_pined, status) {
        const updateCardDTO = {
            id: id,
            is_pined: is_pined,
            status: status
        }
        console.log(updateCardDTO);
        return await api().patch('/blogs/card/' + id, updateCardDTO)
    },

    //blog-tag
    async getBlogTags(blog_id) {
        return await api().get('/blogs/tags')
    },
}