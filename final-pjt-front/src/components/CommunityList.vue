<template>
  <div>
    <communityListItem
      v-for="(community, index) in communitys"
      :key="index"
      :community="community"
    />
  </div>
</template>

<script>
import CommunityListItem from '@/components/CommunityListItem'

export default {
  name: 'CommunityList',
  components: {
    CommunityListItem,
  },
  computed: {
    communitys() {
      return this.$store.state.communitys
    }
  },
}
</script>

<style>

</style>
