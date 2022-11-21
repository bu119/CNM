<template>
  <div>
    <h2>한국어</h2>
      <span
        v-for="mov in movie.ko"
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
    <h2>중국어</h2>
      <span
        v-for="mov in movie.zh"
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
    <h2>일본어</h2>
      <span
        v-for="mov in movie.ja"
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
    <h2>프랑스어</h2>
      <span
        v-for="mov in movie.fr"
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
    <h2>스페인어</h2>
      <span
        v-for="mov in movie.es"
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
    <h2>영어</h2>
      <span
        v-for="mov in movie.en"
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
  name: 'LanguageRecommendListItem',
  props: {
    movie: Object,
  },
  computed: {
    movieImgURL() {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2`
    },
  },
}
</script>

<style>

</style>