<template>
  <div>
    <RecentPopularMovieList/><br>
    <RecentMovieList/><br>
    <SteadySellerList/><br>
  </div>
</template>

<script>
import RecentPopularMovieList from '@/components/RecentPopularMovieList'
import RecentMovieList from '@/components/RecentMovieList'
import SteadySellerList from '@/components/SteadySellerList'

export default {
  name: 'MovieView',
  components: {
    RecentPopularMovieList,
    RecentMovieList,
    SteadySellerList,
  },
  created() {
    this.getRecentPopularMovies()
    this.getRecentMovies()
    this.getSteadySellers()
  },
  methods: {
    getRecentPopularMovies() {
      this.$store.dispatch('getRecentPopularMovies')
    },
    getRecentMovies() {
      this.$store.dispatch('getRecentMovies')
    },
    getSteadySellers() {
      this.$store.dispatch('getSteadySellers')
    }
  }
}
</script>

<style>

</style>