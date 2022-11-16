<template>
  <div>
    <!-- carousel 들어갈 영화 -->
    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'SlideCardListItem',
  props: {
    movie: Object,
  },
}
</script>

<style>

</style>