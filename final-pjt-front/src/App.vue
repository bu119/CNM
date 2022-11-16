<template>
  <div id="app">
    <nav>      
      <!-- 로그인 전 -->
      <nav v-if="isUserLogin">
        <router-link :to="{ name: 'LogInView' }">LogInPage</router-link> |
        <router-link :to="{ name: 'SignUpView' }">SignUpPage</router-link>
      </nav>
      <!-- 로그인 후 -->
      <nav v-else>
        <router-link :to="{ name: 'ProfileView' }">Profile</router-link>
        <span>Hello, {{ userName }}</span>
        <button @click="logoutUser">Logout</button>
      </nav>
      <nav>
        <router-link :to="{ name: 'MovieView' }">Home</router-link> | 
      </nav>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
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
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
