<template>
  <div>
    <h1>장르별 영화 추천 리스트</h1>
    <GenreRecommendListItem/>
  </div>
</template>

<script>
import GenreRecommendListItem from '@/components/GenreRecommendListItem'

export default {
  name: 'GenreRecommendList',
  components: {
    GenreRecommendListItem,
  }
}
</script>

<style>

</style>