<template>
  <div>
    <!-- 여기에 carousel 들어갈 영화 넣기 -->
    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'SlideCardListItem',
  props: {
    movie: Object
  },
}
</script>

<style>

</style>