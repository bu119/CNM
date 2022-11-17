<template>
  <div>
    <h1>test</h1>
    <CommunityForm/>
    <CommunityList/>
  </div>
</template>

<script>
import CommunityForm from '@/components/CommunityForm'
import CommunityList from '@/components/CommunityList'

export default {

  name: 'testView',
  components: {
    CommunityForm,
    CommunityList,
  }
}
</script>

<style>

</style>