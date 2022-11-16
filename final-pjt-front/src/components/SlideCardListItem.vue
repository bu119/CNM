<template>
  <div>
    <!-- carousel 들어갈 영화 -->
    <p>{{ movie.title }}</p>
    <img :src="movieImgURL" alt="...">
  </div>
</template>

<script>
export default {
  name: 'SlideCardListItem',
  props: {
    movie: Object,
  },
  computed: {
    movieImgURL() {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.movie.poster_path}`
    }
  }

}
</script>

<style>

</style>