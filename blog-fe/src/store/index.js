import { createStore } from 'vuex'
import blogs from './modules/blogs'
import tags from './modules/tags'

const store = createStore({

    modules: {
        blogs,
        tags
    },
})

export default store
