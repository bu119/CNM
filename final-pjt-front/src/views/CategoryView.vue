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
}
</script>

<style>

</style>