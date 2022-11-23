<template>
  <div id="app">
    <header class="wrap_padding">
        <router-link :to="{ name: 'MovieView' }" class="home">
        </router-link>
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">카테고리</a>
        <ul class="dropdown-menu">
          <li><router-link :to="{ name: 'CategoryGenreView' }"><a class="dropdown-item" href="#">Genre</a></router-link></li>
          <li><router-link :to="{ name: 'CategoryLanguageView' }"><a class="dropdown-item" href="#">Language</a></router-link></li>
        </ul>
        <div class="headmenu">
          <div v-if="isUserLogin">
            <router-link :to="{ name: 'LogInView' }">LogInPage</router-link> |
            <router-link :to="{ name: 'SignUpView' }">SignUpPage</router-link>
          </div>
          <div v-else class="d-grid gap-2 d-md-flex justify-content-md-end">
            <!-- <span @click="Logout()">로그아웃</span> -->
            <!-- Face -->
            <router-link :to="{ name: 'SelectFaceView' }">
              <button class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Feeling</a>
              </button>
            </router-link>
            <router-link :to="{ name: 'ProfileView', params: {username:username} }">{{username}}</router-link>님
            <button @click="logoutUser" class="btn" style="background-color: black; color: white;">Logout</button>
          </div>
        </div>
    </header>
    <main>
      <router-view/>
    </main>  
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.username
    },
    // 로그인 유무 확인
    isUserLogin() {
      return !this.$store.getters.isLogin
    },
  },
  methods: {
    // 로그아웃 처리
    logoutUser() {
      this.$store.commit('LOGOUT');
    },
    새창 () {
      localStorage.setItem('vuex', sessionStorage.getItem('vuex')) // vuex session to local
    }
  },
  beforeCreate () {
    let localVuex = localStorage.getItem('vuex') // local storage에 vuex 저장여부 확인
    if (localVuex) { // 저장되어 있는 경우 session storage로 이동 후 local 제거
      localVuex = JSON.parse(localVuex)
      this.$store.commit('setXXX', localVuex.xxx)
      localStorage.removeItem('vuex') 
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
}

header {
  display: block;
}

.wrap_padding {
  padding-left: 5rem;
  padding-right: 5rem;
  position: fixed;
  top: 0;
  z-index: 200;
  left: 0;
  right: 0;
  width: calc(100vw - var(--scrollbar-width));
  height: 5rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  top: 0;
  background-image: initial;
}

.home {
  width: 2.4rem;
  height: 100%;
  background-repeat: no-repeat;
  -webkit-background-position: 0 50%;
  background-position: 0 50%;
  -webkit-background-size: 100% auto;
  background-size: 100% auto;
  font-size: 1rem;
  text-indent: -9999px;
  background-image: url(@/assets/logo.png);
}

.navbar-toggler {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.dropdown-menu {
    margin-right: 2.333rem;
    color: rgba(255,255,255,1);
    opacity: 0.87;
    font-size: 1rem;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-transition: opacity 0.1s;
    transition: opacity 0.1s;
}

</style>
