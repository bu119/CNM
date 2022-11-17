<template>
  <div>
    <h1>Sign Up Page</h1>
    <form @submit.prevent="signUp">
      <input type="text" id="username" v-model="username" placeholder="user-name"><br>
      <input type="text" id="email" v-model="email" placeholder="e-mail"><br>    
      <input type="password" id="password1" v-model="password1" placeholder="password"><br>
      <input type="password" id="password2" v-model="password2" placeholder="password confirmation">
      <input type="submit" value="SignUp">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      email: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const email = this.email
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        // username,
        // password1,
        // password2,
        username: username,
        email: email,
        password1: password1,
        password2: password2,
      }

      this.$store.dispatch('signUp', payload)

    }
  }
}
</script>
