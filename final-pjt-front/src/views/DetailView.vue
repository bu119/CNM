<template>
  <div>
    <!-- <h1>영화 상세 페이지</h1>
    <p>제목: {{ movie?.title }}</p>
    <img src="{{ movie?.poster_path }}" alt="">
    <p>줄거리: {{ movie?.overview }}</p>
    <p>개봉일: {{ movie?.released_date }}</p>
    <p>평점: {{ movie?.vote_avg }}</p>
    <p>언어: {{ movie?.original_language }}</p> -->
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
        .then((res) => this.movie = res.data)
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>