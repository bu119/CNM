import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],

  state: {
    recentpopularmovies: [],
    movies: [],
    token: null,
    username: null,
  },

  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_RECENT_POPULAR_MOVIES(state, movies) {
      let released_date_ver = movies.sort((a, b) => {
        return new Date(b.released_date) - new Date(a.released_date)
      })
      state.recentpopularmovies = released_date_ver.slice(0, 10)
    },
    // 회원가입 && 로그인
    SAVE_TOKEN(state, name_token) {
      state.token = name_token.token
      state.username = name_token.username
      router.push({ name: 'MovieView' })
    },
    LOGOUT(state) {
      state.token = !state.token
      router.push({name: 'LogInView'})
    },
  },
  actions: {
    getRecentPopularMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/movies/`,
      })
        .then(res => {
          console.log(res)
          context.commit('GET_RECENT_POPULAR_MOVIES', res.data)
        })
        .catch(err => console.log(err))
    },
    signUp(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
        }
      })
        .then((res) => {
          // console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
        })
    },
    // 회원가입 && 로그인
    logIn(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          // console.log(res)
          const name_token = {
            username: payload.username,
            token: res.data.key
          }
          context.commit('SAVE_TOKEN', name_token)
        })
    },
  },
  modules: {
  }
})
