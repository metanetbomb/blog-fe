import axios from "axios";

export default () => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_BLOG_HOST ? import.meta.env.VITE_BLOG_HOST + "/api" : "http://localhost:3000/api",
    });

    return instance;
};
