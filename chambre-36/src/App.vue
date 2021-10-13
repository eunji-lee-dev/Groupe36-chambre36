<template>
  <div id="app">
    <div id="wallpaper"></div>
    <Navbar />
    <!-- <Home/> -->
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import Navbar from "@/components/Navbar.vue"

export default {
  name: 'App',
  components: {
    // Home,
    Navbar

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

#wallpaper {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url(assets/imgs/homebackgroundflou.png);
}
</style>
