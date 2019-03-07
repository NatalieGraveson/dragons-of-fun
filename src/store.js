import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router';

Vue.use(Vuex)

let _api = Axios.create({
  baseURL: ' https://dragon-duel.herokuapp.com/api/'
})

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    game: []
  },
  mutations: {
    setChampions(state, data) {
      state.champions = data
    },
    setDragons(state, data) {
      state.dragons = data
    },
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    getDragons({ commit, dispatch }) {
      _api.get('dragons')
        .then(res => {
          console.log(res)
          commit('setDragons', res.data)
        })
    },
    getChampions({ commit, dispatch }) {
      _api.get('champions')
        .then(res => {
          console.log(res)
          commit('setChampions', res.data)
        })

    },
    startGame({ commit, dispatch }, payload) {
      _api.post('games', payload)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gId: res.data.game._id } })
        })

    }

  }
})
