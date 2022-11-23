<template>
  <div>
    <h1>최신 인기 영화</h1>
    <RecentPopularMovieListItem
      v-for="movie in movies.presented.slice(0, 7)"
      :key="movie.id"
      :movie="movie"/>
  </div>
</template>

<script>
import RecentPopularMovieListItem from '@/components/RecentPopularMovieListItem'

export default {
  name: 'RecentPopularMovieList',
  components: {
    RecentPopularMovieListItem,
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