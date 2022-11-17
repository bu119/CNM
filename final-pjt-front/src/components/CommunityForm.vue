<template>
  <div>
    <input 
      type="text"
      v-model.trim="communityContent"
      @keyup.enter="createcommunity"
    >
  </div>
</template>

<script>
export default {
  name:'CommunityForm',
  data() {
    return {
      communityContent: null,
    }
  },
  methods: {
    createcommunity() {
      // console.log(this.communityContent)
      if (this.communityContent) {
        this.$store.dispatch('createcommunity', this.communityContent)
      }
      this.communityContent = null
    }
  }
}
</script>

<style>

</style>
