<template>
  <div>
    <router-link :to="{ name: 'DetailView', params: { id: comment.movie } }">{{comment.moviename }}</router-link>
      : {{ comment.content }}
  </div>
</template>

<script>
export default {
  name: 'UserCommentListItem',
  props: {
    comment: Object
  }
}
</script>

<style>

</style>