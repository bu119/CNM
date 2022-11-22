<template>
  <div>
    {{ comment.username }}
    <br>

    {{ comment.content }}
    <!-- : {{ comment.score }} -->
    <span id="start">
      <span v-if="comment.score === 5">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
      </span>

      <span v-else-if="comment.score === 4.5">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>
      </span>

      <span v-else-if="comment.score === 4">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
      </span>

      <span v-else-if="comment.score === 3.5">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i>
      </span>

      <span v-else-if="comment.score === 3">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
      </span>

      <span v-else-if="comment.score === 2.5">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
      </span>

      <span v-else-if="comment.score === 2">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
      </span>

      <span v-else-if="comment.score === 1.5">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
      </span>

      <span v-else-if="comment.score === 1">
        <i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
      </span>

      <span v-else-if="comment.score === 0.5">
        <i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
      </span>

      <span v-else>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
      </span>
    </span>
    <button @click="deleteComment" class="btn btn-primary" type="button">Delete</button>
    <div v-if="comment.username===this.username">
      <button @click="toggleBtn" class="btn btn-warning" >수정하기</button>
      <div id='update_bnt'>
        <star-rating :increment="0.5" v-model="update_comment_score"></star-rating>
        <form>
          <input @click="checkLogin" type="text" v-model="update_comment_content" placeholder="리뷰를 수정해주세요.">
          <button @click="updateComment" class="btn btn-warning" type="button">수정</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
// import axios from 'axios'

// const API_URL = 'http://127.0.0.1:8000'
export default {
  name: 'CommentListItem',
  data() {
    return {
      update_comment_content: null,
      update_comment_score: 0,
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
  components: {
    StarRating
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
      const score = this.update_comment_score
      const payload = {
        content,
        commentId,
        score,
      }
      // if (this.comment.username !== this.username) {
      //   alert('작성자가 아닙니다.')
      // } else 
      if (!content) {
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
    toggleBtn() {
      // 토글 할 버튼 선택 (update_bnt)
      const update_bnt = document.getElementById('update_bnt');
      
      // update_bnt 숨기기 (display: none)
      if(update_bnt.style.display === 'none') {
        update_bnt.style.display = 'block';
      }
      // update_bnt` 보이기 (display: block)
      else {
        update_bnt.style.display = 'none';
      }
    }

  }
}
</script>

<style>
#update_bnt {
  display: block;
}

#start {
    color: rgb(253, 215, 0);
  }
</style>
