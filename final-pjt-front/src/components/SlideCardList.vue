<template>
  <div>
    <h1>최신 인기 영화</h1>
    <SlideCardListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"/>
  </div>
</template>

<script>
import SlideCardListItem from '@/components/SlideCardListItem'

export default {
  name: 'SlideCardList',
  components: {
    SlideCardListItem,
  },
  computed: {
    movies() {
      return this.$store.state.recentpopularmovies
    }
  },
}
</script>

<style>

</style>