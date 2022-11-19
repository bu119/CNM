<template>
  <div>
    <form @submit.prevent="createComment">
      <input type="text" v-model.trim="comment_content">
      <button>제출</button>
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
  },  
  data() {
    return {
      comment_content: null,
    }
  },
  methods: {
   createComment() {
      const content = this.comment_content
      const movie_id = this.$route.params.id
      const username = this.username
      const score = 0

      if (!content) {
        alert('내용을 입력해주세요')
        // return
        // console.log()
      } else {
        axios({
        method: 'post',
        url: `${API_URL}/movies/${this.$route.params.id}/comments/`,
        data: {
          content,
          movie_id,
          username,
          score
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        },
        })
        .then((res) => {
          console.log(res)
          this.$store.commit('CREATE_COMMENT', res.data)
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