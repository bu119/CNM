<template>
  <div>
    <h3>HI, {{ username }}</h3>
    <button>
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