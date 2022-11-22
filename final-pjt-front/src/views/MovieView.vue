<template>
  <div>
    <RecentPopularMovieList/><br>
    <InterestedList/><br>
    <RecentMovieList/><br>
    <SteadySellerList/><br>
  </div>
</template>

<script>
import RecentPopularMovieList from '@/components/RecentPopularMovieList'
import InterestedList from '@/components/InterestedList'
import RecentMovieList from '@/components/RecentMovieList'
import SteadySellerList from '@/components/SteadySellerList'

export default {
  name: 'MovieView',
  components: {
    RecentPopularMovieList,
    InterestedList,
    RecentMovieList,
    SteadySellerList,
  },
  created() {
    this.getRecentPopularMovies()
    this.getInterestedRecommend()
    this.getRecentMovies()
    this.getSteadySellers()
  },
  methods: {
    getRecentPopularMovies() {
      this.$store.dispatch('getRecentPopularMovies')
    },
    getInterestedRecommend() {
      this.$store.dispatch('getInterestedRecommend')
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