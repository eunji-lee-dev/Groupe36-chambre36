<template>
  <div id="app">
    <!-- <Desktop/> -->
    <Home/>
  </div>
</template>

<script>
// import Desktop from './components/Desktop.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // Desktop,
    Home

  }
}
</script>

<style>
#app {
  font-family: "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
