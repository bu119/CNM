import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // store를 session storage 에 유지
    }),
  ],

  state: {
    recentpopularmovies: [],
    recentmovies: [],
    steadysellers: [],
    genrerecommend: [],
    token: null,
    username: null,
    communitys: [],
  },

  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },

  mutations: {
    // 슬라이드 카드(최신 인기 영화 추천)
    GET_RECENT_POPULAR_MOVIES(state, recentpopularmovies) {
      state.recentpopularmovies = recentpopularmovies
    },

    // 장르별 추천
    GET_GENRE_RECOMMEND(state, genrerecommend) {
      state.genrerecommend = genrerecommend
    },

    // 최신영화 추천
    GET_RECENT_MOVIES(state, recentmovies) {
      state.recentmovies = recentmovies
    },

    // 스테디셀러 추천
    GET_STEADY_SELLERS(state, steadysellers) {
      state.steadysellers = steadysellers
    },

    // 회원가입 && 로그인
    SAVE_TOKEN(state, name_token) {
      state.token = name_token.token
      state.username = name_token.username
      router.push({ name: 'MovieView' })
      console.log()
    },
    LOGOUT(state) {
      state.token = !state.token
      router.push({name: 'LogInView'})
    },
    // 커뮤니티
    CREATE_COMMUNITY(state, communityItem) {
      state.communitys.push(communityItem)
    },
    DELETE_COMMUNITY(state, communityItem) {
      const index = state.communitys.indexOf(communityItem)
      state.communitys.splice(index, 1)
    },
    UPDATE_COMMUNITY_STATUS(state, communityItem) {
      console.log(communityItem)
      // communitys 배열에서 선택된 community의 is_completed값만 토글한 후
      // 업데이트 된 communitys 배열로 되어야 함

      // made by 승태
      // const index = state.communitys.indexOf(communityItem)
      // state.communitys[index].isCompleted = !state.communitys[index].isCompleted

      state.communitys = state.communitys.map((community) => {
        if (community === communityItem) {
          community.isCompleted = !community.isCompleted
        } 
        return community
      })
    },
    // LOAD_communityS(state) { 
    //   const localStoragecommunitys = localStorage.getItem('communitys')
    //   const parsedcommunitys = JSON.parse(localStoragecommunitys)
    //   // console.log(parsedcommunitys)
    //   state.communitys = parsedcommunitys
    // },
  },

  actions: {
    // 장르별 추천
    getGenreRecommend(context) {
      axios({
        method: 'get', 
        url: `${API_URL}/movies/genre_ver/`,
      })
        .then(res => {
          context.commit('GET_GENRE_RECOMMEND', res.data)
        })
        .catch(err => console.log(err))
    },

    // 최신 인기 영화
    getRecentPopularMovies(context) {
      axios({
        method: 'get', 
        url: `${API_URL}/movies/recent_popular/`,
      })
        .then(res => {
          context.commit('GET_RECENT_POPULAR_MOVIES', res.data)
        })
        .catch(err => console.log(err))
    },

    // 최신 영화
    getRecentMovies(context) {
      axios({
        method: 'get', 
        url: `${API_URL}/movies/recent/`,
      })
        .then(res => {
          context.commit('GET_RECENT_MOVIES', res.data)
        })
        .catch(err => console.log(err))
    },

    // 스테디셀러
    getSteadySellers(context) {
      axios({
        method: 'get', 
        url: `${API_URL}/movies/steady_seller/`,
      })
        .then(res => {
          context.commit('GET_STEADY_SELLERS', res.data)
        })
        .catch(err => console.log(err))
    },

    // 회원가입 && 로그인
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
          const name_token = {
            username: payload.username,
            token: res.data.key
          }
          context.commit('SAVE_TOKEN', name_token)
        })
    },
  
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

    // 커뮤니티
    createcommunity(context, communityContent) {
      // community 객체 만들기
      const communityItem = {
        content: communityContent,
        isCompleted: false,
      }
      // console.log(communityItem)
      context.commit('CREATE_COMMUNITY', communityItem)
      // context.dispatch('savecommunitysToLocalStorage')
    },
    deleteCommunity(context, communityItem) {
      context.commit('DELETE_COMMUNITY', communityItem)
      // context.dispatch('savecommunitysToLocalStorage')
    },
    updateCommunityStatus(context, communityItem) {
      context.commit('UPDATE_COMMUNITY_STATUS', communityItem)
      // context.dispatch('savecommunitysToLocalStorage')
    },
    // savecommunitysToLocalStorage(context) {
    //   const jsoncommunitys = JSON.stringify(context.state.communitys)
    //   localStorage.setItem('communitys', jsoncommunitys)
    // },
    // loadcommunitys(context) {
    //   context.commit('LOAD_communityS')
    // }
  },
  modules: {
  }
})