<template>
  <div>
    <h1>Sign Up Page</h1>
    <form @submit.prevent="signUp">
      <input type="text" id="username" v-model="username" placeholder="user-name"><br>
      <input type="text" id="email" v-model="email" placeholder="e-mail"><br>    
      <input type="password" id="password1" v-model="password1" placeholder="password"><br>
      <input type="password" id="password2" v-model="password2" placeholder="password confirmation"><br>
      <br>
      <h2>Interested Genre</h2>
      <span>1순위: 
        <select v-model="interested_genre">
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
        </select>
      </span><br>
      <!-- <span>2순위: 
        <select v-model="interested_genre2">
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
        </select>
      </span><br>
      <span>3순위: 
        <select v-model="interested_genre3">
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
        </select>
      </span><br> -->
      <br><input type="submit" value="SignUp">
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
      interested_genre: null,
      // interested_genre2: null,
      // interested_genre3: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const email = this.email
      const password1 = this.password1
      const password2 = this.password2
      const interested_genre = this.interested_genre

      const payload = {
        // username,
        // password1,
        // password2,
        username: username,
        email: email,
        password1: password1,
        password2: password2,
        interested_genre: interested_genre,
      }

      this.$store.dispatch('signUp', payload)

    }
  }
}
</script>
