<template>
  <div>
    <h1>LogIn Page</h1>
    <form @submit.prevent="logIn">
      <input type="text" id="username" v-model="username" placeholder="user-name"><br>
      <input type="password" id="password" v-model="password" placeholder="password"><br>
      <input type="submit" value="logIn">
    </form>
  </div>
</template>

<script>

export default {
  name: 'LogInView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    logIn() {
      const username = this.username
      const password = this.password

      const payload = {
        username: username,
        password: password,
      }
      this.$store.dispatch('logIn', payload)
    }
  }
}
</script>