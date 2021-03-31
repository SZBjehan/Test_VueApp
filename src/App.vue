<template>
  <div id="app">
    <Page1 />
    
  </div>
</template>

<script>

import Page1 from './components/Page1'

export default {
  name: 'App',
  components: {
    Page1
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
