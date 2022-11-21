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
    this.getLanguageRecommend()
  },
  methods: {
    getGenreRecommend() {
      this.$store.dispatch('getGenreRecommend')
    },
    getLanguageRecommend() {
      this.$store.dispatch('getLanguageRecommend')
    },
  }
}
</script>

<style>

</style>