<template>
  <div>
    <CommentListItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem'

export default {
  name: 'CommentList',
  components: {
    CommentListItem,
  },
  computed: {
    comments() {
      // return this.$store.getters.comments

      return this.$store.getters.movie_detail.comments
      // return this.$store.state.movie_detail.comments
    }
  },
}
</script>

<style>

</style>
