import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  state: {
    recentpopularmovies: []
  },
  getters: {
  },
  mutations: {
    GET_RECENT_POPULAR_MOVIES(state, movies) {
      let released_date_ver = movies.sort((a, b) => {
        return new Date(b.released_date) - new Date(a.released_date)
      })
      state.recentpopularmovies = released_date_ver.slice(0, 10)
    }
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
    }
  },
  modules: {
  }
})
