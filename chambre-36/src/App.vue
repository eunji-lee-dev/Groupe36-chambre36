<template>
  <div id="app">
    <Home/>
    <div id="wallpaper"></div>
    <Navbar />
    <Toolbar class="toolbar"/>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import Navbar from "@/components/Navbar.vue"
import Toolbar from "@/components/Toolbar.vue"

export default {
  name: 'App',
  components: {
    // Home,
    Navbar,
    Toolbar
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
  background-image: url(assets/imgs/homebackground.jpg);
  z-index: -1;
}

.toolbar {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>
