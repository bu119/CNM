<template>
  <!-- <h1>최신 인기 영화</h1> -->
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <CarouselMovieListItem
        v-for="movie in movies.presented.slice(0, 7)"
        :key="movie.id"
        :movie="movie"/>
    </div>
  </div>
</template>

<script>
import CarouselMovieListItem from '@/components/CarouselMovieListItem'

export default {
  name: 'CarouselMovieList',
  components: {
    CarouselMovieListItem,
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