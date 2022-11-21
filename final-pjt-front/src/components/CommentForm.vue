<template>
  <div>
    <h2>평점</h2>
    <star-rating :increment="0.5" v-model="comment_score"></star-rating>
    <form @submit.prevent="createComment">
      <input @click="checkLogin" type="text" v-model.trim="comment_content" placeholder="리뷰를 작성해주세요.">
      <button>작성하기</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import StarRating from 'vue-star-rating'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name:'CommentForm',
  components: {
    StarRating
  },
  computed: {
    username() {
      return this.$store.state.username
    },
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  data() {
    return {
      comment_content: null,
      comment_score: 0,
    }
  },
  methods: {
    checkLogin() {
      if (this.isLogin === false) { 
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({ name: 'LogInView'})
      }
    },

    createComment() {
      const content = this.comment_content
      const score = this.comment_score
 
      if (!content) {
        alert('내용을 입력해주세요.')
      } else {
        axios({
          method: 'post',
          url: `${API_URL}/movies/${this.$route.params.id}/comments/`,
          data: {
            content,
            score
          },
          headers: {
            Authorization: `Token ${this.$store.state.token}`
          },
        })
          .then(() => {
            this.$store.dispatch('getComments')
            this.$store.commit('CREATE_COMMENT')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    this.commentContent = null
    }
  }
}
</script>

<style>

</style>