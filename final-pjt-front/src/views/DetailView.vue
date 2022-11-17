<template>
  <div>
    <h1>영화 상세 페이지</h1>
    <p>제목: {{ movie?.title }}</p>
    <img :src="poster_path" alt="..." width=250>
    <p>장르: 
      <span 
        v-for="(genre, idx) in movie.genres"
        :key="idx"
      >
        {{ genre }}
      </span>
    </p>
    <p>줄거리: {{ movie?.overview }}</p>
    <p>개봉일: {{ movie?.released_date }}</p>
    <p>평점: {{ movie?.vote_avg }}</p>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailView',
  data() {
    return {
      movie: null,
      poster_path: null,
    }
  },
  created() {
    this.getMovieDetail()
  },
  methods: {
    getMovieDetail() {
      axios({
        method: 'get',
        url: `${API_URL}/movies/${this.$route.params.id}/`
      })
        .then((res) => {
          this.movie = res.data
          this.poster_path = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${res.data.poster_path}`
          })
        .catch(err => console.log(err))
    },

  },
}
</script>

<style>

</style>