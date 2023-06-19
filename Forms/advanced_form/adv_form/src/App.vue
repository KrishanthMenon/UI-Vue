<template>
  <div id="app">
    <Signup/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Signup from './components/Signup.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    Signup
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
  margin-top: 60px;
}
</style>
