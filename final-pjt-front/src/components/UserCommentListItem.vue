<template>
  <div>{{comment.movie }} : {{ comment.content }}</div>
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