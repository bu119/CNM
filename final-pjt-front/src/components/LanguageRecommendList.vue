<template>
  <div>
    <h1>언어별 영화 추천 리스트</h1>
    <LanguageRecommendListItem
      :movie="languagerecommend"
    />
  </div>
</template>

<script>
import LanguageRecommendListItem from '@/components/LanguageRecommendListItem'

export default {
  name: 'LanguageRecommendList',
  components: {
    LanguageRecommendListItem,
  },
  computed: {
    languagerecommend() {
      return this.$store.state.languagerecommend
    }
  }
}
</script>

<style>

</style>