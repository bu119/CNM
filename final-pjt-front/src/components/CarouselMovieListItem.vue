<template>
  <div>
    <router-link
      :to="{ 
        name: 'DetailView',
        params: { id: movie.id }
      }"  
    >
      <img :src="movieImgURL" alt="movie_img" class="d-block w-100">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CarouselMovieListItem',
  props: {
    movie: Object,
  },
  computed: {
    movieImgURL() {
      return `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    }
  }

}
</script>

<style>

</style>