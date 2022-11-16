<template>
  <div>
    <h1>사이트 이름</h1>
    
    <SlideCardList/>
  </div>
</template>

<script>
import SlideCardList from '@/components/SlideCardList'

export default {
  name: 'MovieView',
  components: {
    SlideCardList,
  },
  created() {
    this.getRecentPopularMovies()
  },
  methods: {
    getRecentPopularMovies() {
      this.$store.dispatch('getRecentPopularMovies')
    }
  }
}
</script>

<style>

</style>