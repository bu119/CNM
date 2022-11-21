<template>
  <div>
    <h3>{{ username }}님의 프로필 페이지</h3>
    <button style="float:right">
      <!-- <router-link :to="{ name: 'EditProfile' }">EditProfile</router-link> -->
    </button>
    <h2>나의 리뷰 목록</h2>
    <UserCommentList/>
    
  </div>
</template>

<script>
import UserCommentList from '@/components/UserCommentList'

export default {
  name: 'ProfileView',
  components: {
    UserCommentList
  },
  computed: {
    username() {
      return this.$store.state.username
    }, 
  },
}
</script>

<style>

</style>