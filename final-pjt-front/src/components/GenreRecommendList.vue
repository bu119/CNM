<template>
  <div>
    <h1>장르별 영화 추천 리스트</h1>
    <br>
    <GenreRecommendListItem
      :movie="genrerecommend"
    />
  </div>
</template>

<script>
import GenreRecommendListItem from '@/components/GenreRecommendListItem'

export default {
  name: 'GenreRecommendList',
  components: {
    GenreRecommendListItem,
  },
  computed: {
    genrerecommend() {
      return this.$store.state.genrerecommend
    }
  }
}
</script>

<style>

</style>