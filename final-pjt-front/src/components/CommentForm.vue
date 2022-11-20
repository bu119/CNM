<template>
  <div>
    <form @submit.prevent="createComment">
      <input @click="checkLogin" type="text" v-model.trim="comment_content">
      <button>작성하기</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name:'CommentForm',
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
      // const score = 0
 
      if (!content) {
        alert('내용을 입력해주세요.')
      } else {
        axios({
          method: 'post',
          url: `${API_URL}/movies/${this.$route.params.id}/comments/`,
          data: {
            content,
            // score
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