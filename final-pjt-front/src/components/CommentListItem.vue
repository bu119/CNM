<template>
  <div>
    {{ comment }}
    <br>
    {{ comment.username }} : {{ comment.content }}
    <button @click="deleteComment" class="btn btn-primary" type="button">Delete</button>
    <form>
      <input @click="checkLogin" type="text" v-model="update_comment_content">
      <button @click="updateComment" class="btn btn-warning" type="button">수정</button>
    </form>
    <!-- Button trigger modal -->
    <!-- <button @click="updateComment">Update</button> -->

    <!-- 모달 버튼  -->
    <!-- <button @click="checkLogin" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      수정하기
    </button> -->
    <!-- 모달 창 -->
    <!-- <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">리뷰를 수정하세요.</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
 
          <div class="modal-body">
            <form>
              <input type="text" v-model="update_comment_content">
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button @click="updateComment" type="button" class="btn btn-primary">수정</button>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
// import axios from 'axios'

// const API_URL = 'http://127.0.0.1:8000'
export default {
  name: 'CommentListItem',
  data() {
    return {
      update_comment_content: null,
    }
  },
  computed: {
    username() {
      return this.$store.state.username
    },
    isLogin() {
      return this.$store.getters.isLogin
    },
  },
  props: {
    comment: Object,
  },
  methods: {
    checkLogin() {
      if (this.isLogin === false) { 
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({ name: 'LogInView'})
      }
    },
    deleteComment() {
      // console.log('삭제 메서드 호출!!')
      console.log(this.comment)
      this.$store.dispatch('deleteComment', this.comment)
    },
    updateComment() {
      console.log(this.comment)
      const content = this.update_comment_content
      // console./og(content)
      const commentId = this.comment.id
      const score = 4
      const payload = {
        content,
        commentId,
        score
      }
      if (this.comment.username !== this.username) {
        alert('작성자가 아닙니다.')
      } else if (!content) {
        alert('내용을 입력해주세요.')
      } else {
        console.log(this.comment.id)
        this.$store.dispatch('updateComment', payload)
        // axios({
        //   method: "put",
        //   url: `${API_URL}/movies/comments/${this.comment.id}/`,
        //   data: {
        //     content,
        //     // score
        //   },
        //   headers: {
        //     Authorization: `Token ${this.$store.state.token}`
        //   },
        // })
        //   .then((res) => {
        //     // console.log(this.comment.id)
        //     // console.log(res)
        //     this.$store.commit('UPDATE_COMMENT', res.data)
        //   })
        //   .catch((err) => {
        //     alert('작성자가 아닙니다.')
        //     console.error(err);
        //   })
      }
      this.update_comment_content = null
    },
  }
}
</script>

<style>

</style>
