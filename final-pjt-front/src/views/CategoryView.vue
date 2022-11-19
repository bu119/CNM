<template>
  <div>
    <GenreRecommendList/><br>
    <LanguageRecommendList/><br>
  </div>
</template>

<script>
import GenreRecommendList from '@/components/GenreRecommendList'
import LanguageRecommendList from '@/components/LanguageRecommendList'

export default {
  name: 'CategoryView',
  components: {
    GenreRecommendList,
    LanguageRecommendList,
  },
  created() {
    this.getGenreRecommend()
  },
  methods: {
    getGenreRecommend() {
      this.$store.dispatch('getGenreRecommend')
    },
  }
}
</script>

<style>

</style>