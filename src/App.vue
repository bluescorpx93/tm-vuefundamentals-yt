<template>
  <div id="app">
    <img src="./assets/logo.png" class='small-img'>
    <NavComponent></NavComponent>
    <router-view/>
  </div>
</template>

<script>
import NavComponent from '@/components/Nav'
export default {
  name: 'App',
  components: {
    NavComponent
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 40px;
  color: #2c3e50;
}
.small-img{
  height: 80px;
}
</style>
