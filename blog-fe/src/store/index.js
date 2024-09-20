import { createStore } from 'vuex'
import blogs from './modules/blogs'

const store = createStore({

    modules: {
        blogs,
    },
})

export default store
