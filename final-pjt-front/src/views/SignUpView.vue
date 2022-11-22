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
      <form>1순위: 
        <select v-model="interested_genre1">
          <option selected>=== 선택 ===</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Documentary">Documentary</option>
          <option value="Family">Family</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="SF">SF</option>
          <option value="Thriller">Thriller</option>
          <option value="War">War</option>
        </select>
      </form>
      <form>2순위: 
        <select v-model="interested_genre2">
          <option selected>=== 선택 ===</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Documentary">Documentary</option>
          <option value="Family">Family</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="SF">SF</option>
          <option value="Thriller">Thriller</option>
          <option value="War">War</option>
        </select>
      </form>
      <form>3순위: 
        <select v-model="interested_genre3">
          <option selected>=== 선택 ===</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Documentary">Documentary</option>
          <option value="Family">Family</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="SF">SF</option>
          <option value="Thriller">Thriller</option>
          <option value="War">War</option>
        </select>
      </form>
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
      interested_genre1: null,
      interested_genre2: null,
      interested_genre3: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const email = this.email
      const password1 = this.password1
      const password2 = this.password2
      const interested_genre1 = this.interested_genre1
      const interested_genre2 = this.interested_genre2
      const interested_genre3 = this.interested_genre3

      const payload = {
        // username,
        // password1,
        // password2,
        username: username,
        email: email,
        password1: password1,
        password2: password2,
        interested_genre1: interested_genre1,
        interested_genre2: interested_genre2,
        interested_genre3: interested_genre3,
      }

      this.$store.dispatch('signUp', payload)

    }
  }
}
</script>

<style>

</style>