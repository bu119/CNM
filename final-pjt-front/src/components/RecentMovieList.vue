<template>
  <div>
    <h1>최신 개봉 영화</h1>
    <RecentMovieListItem
      v-for="movie in recentmovies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import RecentMovieListItem from '@/components/RecentMovieListItem'

export default {
  name: 'RecentMovieList',
  components: {
    RecentMovieListItem,
  },
  computed: {
    recentmovies() {
      return this.$store.state.recentmovies
    }
  }

}
</script>

<style>

</style>