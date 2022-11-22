<template>
  <div>
    <router-link :to="{ name: 'DetailView', params: { id: comment.movie } }">{{comment.moviename }}</router-link>
      : {{ comment.content }}
    <div id="start">
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
    </div>
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
  #start {
    color: rgb(253, 215, 0);
  }
</style>