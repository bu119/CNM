<template>
  <div>
    <!-- carousel 들어갈 영화 -->
    <router-link
      :to="{ 
        name: 'DetailView',
        params: { id: movie.id }
      }"  
    ><img :src="movieImgURL" alt="..." width=250></router-link>
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