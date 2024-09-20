import api from "./api.js";

export default {

    async getSample() {
        await api().get()
            .then((response) => {
                console.log(response);
                return response.data;
            })
    },
}