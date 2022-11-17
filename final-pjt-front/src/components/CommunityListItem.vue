<template>
  <div>
    <span 
      @click="updateCommunityStatus"
      :class="{ 'is-completed': community.isCompleted }"
    >
      {{ community.content }}
    </span>
    <button @click="deletecommunity">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'CommunityListItem',
  props: {
    community: Object,
  },
  methods: {
    deletecommunity() {
      // console.log('삭제 메서드 호출!!')
      this.$store.dispatch('deleteCommunity', this.community)
      // this.$store.commit('DELETE_community', this.community)
    },
    updateCommunityStatus() {
      this.$store.dispatch('updateCommunityStatus', this.community)
    },
  }
}
</script>

<style>
  .is-completed {
    text-decoration: line-through;
  }
</style>
