<template>
  <div>
    <h3>{{ username }}님의 프로필 페이지</h3>
    <button style="float:right">
      <router-link :to="{ name: 'EditProfile' }">EditProfile</router-link>
    </button>
    
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  computed: {
    username() {
      return this.$store.state.username
    },
  }
}
</script>

<style>

</style>