import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],

  state: {
    movies: [],
    recentpopularmovies: [],
    recommendmovies1: [],
    token: null,
    username: null,
  },

  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },

  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    GET_RECENT_POPULAR_MOVIES(state, recent_movies) {
      state.recentpopularmovies = recent_movies
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
    getMovies(context) {
      axios({
        method: 'get', 
        url: `${API_URL}/movies/`,
      })
        .then(res => {
          context.commit('GET_MOVIES', res.data)
        })
        .catch(err => console.log(err))
    },
    getRecentPopularMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/movies/`,
        data: {
          recent_movies: context['recent_movies']
        }
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
          email: payload.email,
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
