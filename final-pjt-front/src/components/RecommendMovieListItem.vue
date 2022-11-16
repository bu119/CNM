<template>
  <div>
    <p>{{ movie.title }}</p>
    <router-link
      :to="{ 
        name: 'DetailView',
        params: { id: movie.id }
      }"  
    >[Detail]</router-link>
  </div>
</template>

<script>
export default {
  name: 'RecommendMovieList',
  props: {
    movie: Object,
  }
}
</script>

<style>

</style>