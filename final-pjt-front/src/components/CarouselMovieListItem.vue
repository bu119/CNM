<template>
  <div>
    <router-link
      :to="{ 
        name: 'DetailView',
        params: { id: movie.id }
      }"  
    >
      <img :src="movieImgURL" alt="movie_img" >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RecentPopularMovieListItem',
  props: {
    movie: Object,
  },
  computed: {
    movieImgURL() {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.movie.backdrop_path}`
    }
  }

}
</script>

<style>

</style>