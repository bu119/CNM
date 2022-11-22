<template>
  <div>
    <!-- movie에 interested_genre1, 2, 3 가져오면 됨! -->
    <span
      v-for="mov in genre1Movie"
      :key="mov.id">
      <router-link
        :to="{ 
          name: 'DetailView',
          params: { id: mov.id }
        }"  
      >
        <img :src="movieImgURL+mov.poster_path" alt="..." width=250>
      </router-link>
    </span>
    <span
      v-for="mov in genre2Movie"
      :key="mov.id">
      <router-link
        :to="{ 
          name: 'DetailView',
          params: { id: mov.id }
        }"  
      >
        <img :src="movieImgURL+mov.poster_path" alt="..." width=250>
      </router-link>
    </span>
    <span
      v-for="mov in genre3Movie"
      :key="mov.id">
      <router-link
        :to="{ 
          name: 'DetailView',
          params: { id: mov.id }
        }"  
      >
        <img :src="movieImgURL+mov.poster_path" alt="..." width=250>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'InterestedListItem',
  props: {
    movie: Object,
  },
  computed: {
    movieImgURL() {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2`
    },
    interested_genre1(){
      return this.$store.state.interested_genre1
    },
    interested_genre2(){
      return this.$store.state.interested_genre2
    },
    interested_genre3(){
      return this.$store.state.interested_genre3
    },
    genre1Movie() {
      return this.movie[this.interested_genre1].slice(0, 3)
    },
    genre2Movie() {
      return this.movie[this.interested_genre2].slice(0, 3)
    },
    genre3Movie() {
      return this.movie[this.interested_genre3].slice(0, 3)
    },
  }, 
}
</script>

<style>

</style>