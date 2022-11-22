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
        {{ genre['name'] }}
        <span
          v-if="movie.genres.length !== (idx + 1)">
          ,
        </span>
      </span>
      <!-- {{ movie.genres[0] }} -->
    </p>
    <p>줄거리: {{ movie?.overview }}</p>
    <p>개봉일: {{ movie?.released_date }}</p>
    <p>평점: {{ movie?.vote_avg }}</p>

    <!-- SNS 공유 버튼 -->
    <button @click="btnShareTw" type="button" id="twitter" class="btn_comm"><img src="./images/icon-twitter.png" alt=""></button>
    <button @click="btnShareFb" type="button" id="facebook" class="btn_comm"><img src="./images/icon-facebook.png" alt=""></button>
    <button @click="btnShareKt" type="button" id="kakao" class="btn_comm"><img src="./images/icon-kakao.png" alt=""></button>

    <h1>Comment List</h1>
    <CommentForm/>
    <CommentList/>
  </div>
</template>

<script>
import axios from 'axios'

import CommentForm from '@/components/CommentForm'
import CommentList from '@/components/CommentList'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailView',
  components: {
    CommentForm,
    CommentList,
  },
  data() {
    return {
      movie: null,
      poster_path: null,
    }
  },
  created() {
    this.getMovieDetail()
    // this.getComments()
    },
  methods: {
    getMovieDetail() {
      axios({
        method: 'get',
        url: `${API_URL}/movies/${this.$route.params.id}/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
        .then((res) => {
          this.movie = res.data
          this.poster_path = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${res.data.poster_path}`
          // this.$store.commit('GET_MOVIE_DETAIL', res.data)

          //  일단 무비 디테일 페이지 들고오는걸루---------------------------------------------------- 리스트에서 들고옴
          // const movieId = this.$route.params.id
          // this.$store.dispatch('getMovieDetail', movieId)

          // //  무비의 코멘트만 가져오기 (질문)--------------------------------------------------------
          // console.log('디테일 겟코맨츠')
          // const movieId = this.$route.params.id
          // this.$store.dispatch('getComments', movieId)
          
          })
        .catch(err => console.log(err))
    },

    // // comments
    // getComments() {
    //   console.log('디테일 겟코맨츠')
    //   const movieId = this.$route.params.id
    //   this.$store.dispatch('getComments', movieId)
    // }

    // SNS 공유
    btnShareTw() {
      const sendText = this.movie.title
      const pageUrl = `${API_URL}/movies/${this.$route.params.id}/`;
      window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`);
    },

    btnShareFb() {
      const pageUrl = `${API_URL}/movies/${this.$route.params.id}/`;
      window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
    },

    btnShareKt() {
      const sendText = this.movie.title
      const pageUrl = `${API_URL}/movies/${this.$route.params.id}/`

      window.Kakao.Link.sendDefault({
        objectType: 'text',
        text: sendText, 
        link: {
          webUrl: pageUrl
        }
      })
    }

  },
}
</script>

<style>
.twitter { background-image: url(./images/icon-twitter.png); background-repeat: no-repeat; }
.facebook { background-image: url(./images/icon-facebook.png); background-repeat: no-repeat; } 
.kakao { background-image: url(./images/icon-kakao.png); background-repeat: no-repeat; }
</style>