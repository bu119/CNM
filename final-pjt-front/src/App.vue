<template>
  <div id="app">
    <nav>
      <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container-fluid">
            <router-link :to="{ name: 'MovieView' }" class="navbar-brand">
              <img alt="Vue logo" src="./assets/logo.png" style="height:25px;" />
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
              <ul class="navbar-nav me-auto">
                <!-- Home 
                <li class="nav-item">
                  <router-link :to="{ name: 'MovieView' }">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </router-link>
                </li> -->
                <!-- Category -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Category</a>
                  <ul class="dropdown-menu">
                    <li><router-link :to="{ name: 'CategoryGenreView' }"><a class="dropdown-item" href="#">Genre</a></router-link></li>
                    <li><router-link :to="{ name: 'CategoryLanguageView' }"><a class="dropdown-item" href="#">Language</a></router-link></li>
                  </ul>
                </li>
              </ul>
              <div class="headmenu">
                <div v-if="isUserLogin">
                  <router-link :to="{ name: 'LogInView' }">LogInPage</router-link> |
                  <router-link :to="{ name: 'SignUpView' }">SignUpPage</router-link>
                </div>
                <div v-else class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <!-- <span @click="Logout()">로그아웃</span> -->
                  <router-link :to="{ name: 'ProfileView', params: {username:username} }">{{username}}</router-link>님
                  <button @click="logoutUser" class="btn" style="background-color: black; color: white;">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <router-view/>
      </main>  
    </nav>    
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
