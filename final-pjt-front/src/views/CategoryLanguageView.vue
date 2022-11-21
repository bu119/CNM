<template>
  <div>
    <LanguageRecommendList/><br>
  </div>
</template>

<script>
import LanguageRecommendList from '@/components/LanguageRecommendList'

export default {
  name: 'CategoryLanguageView',
  components: {
    LanguageRecommendList,
  },
  created() {
    this.getLanguageRecommend()
  },
  methods: {
    getLanguageRecommend() {
      this.$store.dispatch('getLanguageRecommend')
    },
  }
}
</script>

<style>

</style>