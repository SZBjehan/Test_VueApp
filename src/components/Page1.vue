<template>
  <div>
    <Navi />
    <Showlists />
    
    
  </div>
</template>

<script>
import Navi from '../components/Navi.vue'
import Showlists from '../components/Showlists.vue'

export default {
  name: 'Page1',
  components:{
    Showlists, Navi
  }
}
</script>
<style>

</style>
