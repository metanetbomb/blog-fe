import services from '../../services/tags'
import * as types from '../mutation-types'

//DTOs

// initial state
const state = () => ({
    page: 1,
    pageSize: 10,
    tags: [],
})

// getters
const getters = {
    //   getRoundHistory: state => state.roundHistory,
    //   getShortRoundHistory: (state) => {
    //     return state.roundHistory.map(round => ({ round: round.roundNumber, multi: round.multiplier }));
    //   },
    //   getRoundDetails: (state) => (id) => {
    //     return state.roundHistory.find(round => round.id == id);
    //   },
    //   getRoundDetailsByRoomNo: (state) => (number) => {
    //     return state.roundHistory.find(round => round.roundNumber == number);
    //   },
    getTags: state => state.tags.sort((a, b) => b.id - a.id),
}

// actions
const actions = {

    //   async getRoundHistory({ commit, state }, token) {
    //     const res = await services.getRoundHistory(state.limit, token);
    //     if (res.status == 200) {
    //       // commit(types.ROUND_HIS, res.data.data);
    //     }
    //   },

    //   async saveNewBlog({ commit, state }, { title, url }) {
    //     console.log(title + ":" + url);
    //     const res = await services.postBlogs(title, url);
    //     console.log(res);
    //     if (res.status == 201) {
    //       const cards = await services.getBlogCards(state.page, state.pageSize);
    //       if (cards.status == 200) {
    //         console.log(cards);
    //         console.log(cards.data);
    //         commit(types.SET_BLOG_CARDS, cards.data);
    //       }
    //     }
    //   },

    //   async setBlogCards({ commit, state }, token) {
    //     const res = await services.getBlogCards(state.limit, token);
    //     if (res.status == 200) {
    //       console.log(res);
    //       commit(types.SET_BLOG_CARDS, res.data);
    //     }
    //   },

    //   async setPined({ commit, state }, { id, pined }) {
    //     const bcard = state.blogCards.find(card => card.id === id);
    //     console.log(id + " : " + pined);
    //     const res = await services.patchBlogCard(id, pined, bcard.status);
    //     console.log(res);
    //     if (res.status == 200) {
    //       console.log(res);
    //       commit(types.SET_BLOG_PIN, { id: id, pined: pined });
    //     }
    //   },

    //   async setStatus({ commit, state }, { id, status }) {
    //     const bcard = state.blogCards.find(card => card.id === id);
    //     console.log(id + " : " + status);
    //     const res = await services.patchBlogCard(id, bcard.is_pined, status);
    //     console.log(res);
    //     if (res.status == 200) {
    //       console.log(res);
    //       commit(types.SET_BLOG_STATUS, { id: id, status: status });
    //     }
    //   },

    //   //for edit mode
    //   //get data from be and save to store
    //   async setBlog({ commit, state }, { id }) {
    //     const res = await services.getBlogs(id);
    //     if (res.status == 200) {
    //       console.log(res);
    //       commit(types.SET_BLOG, res.data);
    //       return res.data;
    //     }
    //     else null;
    //   },

    //load tags from be and save to store
    async setTags({ commit, state }, token) {
        const res = await services.getTags();
        console.log(res);
        if (res.status == 200) {
            commit(types.SET_TAGS, res.data);
        }
    },
    // async saveNewBlog({ commit, state }, { title, url }) {
    //     console.log(title + ":" + url);
    //     const res = await services.postBlogs(title, url);
    //     console.log(res);
    //     if (res.status == 201) {
    //         const cards = await services.getBlogCards(state.page, state.pageSize);
    //         if (cards.status == 200) {
    //             console.log(cards);
    //             console.log(cards.data);
    //             commit(types.SET_BLOG_CARDS, cards.data);
    //         }
    //     }
    // },
    async createTags({ commit, state }, { title, meta }) {
        const res = await services.postTag(title, meta);
        console.log(res);
        if (res.status == 201) {
            const tags = await services.getTags();
            if (tags.status == 200) {
                console.log(tags);
                console.log(tags.data);
                commit(types.SET_TAGS, tags.data);
            }
        }
    },

    async updateTags({ commit, state }, { id, title, meta }) {
        const res = await services.patchTag(id, title, meta);
        console.log(res);
        if (res.status == 200) {
            const tags = await services.getTags();
            if (tags.status == 200) {
                console.log(tags);
                console.log(tags.data);
                commit(types.SET_TAGS, tags.data);
            }
        }
    },
}

// mutations
const mutations = {
    [types.SET_TAGS](state, value) {
        state.tags = value;
        console.log("set tags done.");
    },
    //   [types.SET_BLOG_CARDS](state, value) {
    //     state.blogCards = value;
    //     console.log("set cards done.");
    //   },
    //   [types.SET_BLOG_PIN](state, { id, pined }) {
    //     const bcard = state.blogCards.find(card => card.id === id);
    //     bcard.is_pined = pined;
    //     console.log("pin update");
    //   },
    //   [types.SET_BLOG_STATUS](state, { id, status }) {
    //     const bcard = state.blogCards.find(card => card.id === id);
    //     bcard.status = status;
    //     console.log("status update");
    //   },
    //   [types.SET_BLOG_TAGS](state, { id, status }) {
    //     const bcard = state.blogCards.find(card => card.id === id);
    //     bcard.status = status;
    //     console.log("status update");
    //   },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}