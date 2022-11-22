<template>
  <div>
  <h1>{{ username }}님의 취향저격</h1>
    <InterestedListItem
      :movie="interestedmovies"
    />
  </div>
</template>

<script>
import InterestedListItem from '@/components/InterestedListItem'

export default {
  name: 'InterestedList',
  components: {
    InterestedListItem,
  },
  computed: {
    interestedmovies() {
      return this.$store.state.interestedmovies
    },
    username() {
      return this.$store.state.username
    },
  },
}
</script>

<style>

</style>