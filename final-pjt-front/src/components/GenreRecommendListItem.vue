<template>
  <div>
    <h2>액션</h2>
      <span
        v-for="mov in movie.Action"
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
    <h2>애니메이션</h2>
      <span
        v-for="mov in movie.Animation"
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
    <h2>호러</h2>
      <span
        v-for="mov in movie.Horror"
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
    <h2>로맨스</h2>
      <span
        v-for="mov in movie.Romance"
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
    <h2>판타지</h2>
      <span
        v-for="mov in movie.Fantasy"
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
    <h2>미스터리</h2>
      <span
        v-for="mov in movie.Mystery"
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
    <h2>코미디</h2>
      <span
        v-for="mov in movie.Comedy"
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
    <h2>SF</h2>
      <span
        v-for="mov in movie.SF"
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
    <!-- <h2>모험</h2>
    <h2>드라마</h2>
    <h2>가족</h2>
    <h2>역사</h2>
    <h2>음악</h2>
    <h2>스릴러</h2>
    <h2>TV영화</h2>
    <h2>전쟁</h2>
    <h2>서부</h2> -->
  </div>
</template>

<script>
export default {
  name: 'GenreRecommendListItem',
  props: {
    movie: Object,
  },
  computed: {
    movieImgURL() {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2`
    },
  },
  // methods: {
  //   genreCheck(genre) {
  //     let result = false
  //     for (let i=0; i<this.movie.genres.length; i++) {
  //       if (this.movie.genres[i]['name'] === genre) {
  //         result = true
  //       }
  //     }
  //     return result
  //   }
  // }
}
</script>

<style>

</style>