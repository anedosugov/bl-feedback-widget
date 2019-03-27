import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    feedbackList: [],
    page: 1,
    perPage: 5,
    total: 0,
    isThereMore: false,
    loading: false
  },
  mutations: {
    updateFeedbackList: (state, items) => {
      state.feedbackList.push(...items)
      state.page ++
    },
    checkIfThereIsMore: (state, totalCount) => {
      state.total = totalCount
      state.isThereMore = state.feedbackList.length !== totalCount
    },
    setLoadingTo: (state, bool) => {
      state.loading = bool
    }
  },
  actions: {
    fetchFeedbacks:  ({commit, state}) => {
      commit('setLoadingTo', true)
      api.getFeedbackList(state.page, state.perPage)
        .then(res => {
          commit('updateFeedbackList', res.data)
          commit('checkIfThereIsMore', res.totalCount)
        })
        .catch(er => {
          console.log('error fetching feedback list.', er)
        })
        .finally(() => commit('setLoadingTo', false))
    }
  }
})