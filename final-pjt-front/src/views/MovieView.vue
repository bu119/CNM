<template>
  <div>
    <SlideCardList/><br>
    <RecommendMovieList/>
  </div>
</template>

<script>
import SlideCardList from '@/components/SlideCardList'
import RecommendMovieList from '@/components/RecommendMovieList'

export default {
  name: 'MovieView',
  components: {
    SlideCardList,
    RecommendMovieList,
  },
  created() {
    this.getRecentPopularMovies()
  },
  methods: {
    getRecentPopularMovies() {
      this.$store.dispatch('getRecentPopularMovies')
    },
  }
}
</script>

<style>

</style>