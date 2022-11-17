<template>
  <div>
    <h1>추천영화 ver.1 리스트</h1>
    <RecommendMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import RecommendMovieListItem from '@/components/RecommendMovieListItem'

export default {
  name: 'RecommendMovieList',
  components: {
    RecommendMovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  }

}
</script>

<style>

</style>