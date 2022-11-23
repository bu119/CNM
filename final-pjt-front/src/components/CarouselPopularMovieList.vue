<template>
  <div>
    <!-- <h1>최신 인기 영화</h1> -->
    carousel
    <h1>핫한 대세 영화, 놓칠 수 없지</h1>
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

<style scoped>
h1 {
  padding-left: 20px;
  text-align: left;
  font-size: 24px;
  line-height: 36px;
  display: block;
  font-weight: bold;
}
</style>