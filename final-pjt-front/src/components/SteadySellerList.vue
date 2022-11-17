<template>
  <div>
    <h1>스테디셀러</h1>
    <SteadySellerListItem
      v-for="movie in steadysellers"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import SteadySellerListItem from '@/components/SteadySellerListItem'

export default {
  name: 'SteadySellerList',
  components: {
    SteadySellerListItem,
  },
  computed: {
    steadysellers() {
      return this.$store.state.steadysellers
    }
  },
}
</script>

<style>

</style>