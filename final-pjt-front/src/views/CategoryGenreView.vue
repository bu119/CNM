<template>
  <div>
    <GenreRecommendList/><br>
  </div>
</template>

<script>
import GenreRecommendList from '@/components/GenreRecommendList'

export default {
  name: 'CategoryGenreView',
  components: {
    GenreRecommendList,
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