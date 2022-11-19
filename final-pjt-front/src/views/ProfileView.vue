<template>
  <div>
    <h3>HI, {{ username }}</h3>
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