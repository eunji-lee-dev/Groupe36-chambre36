<template>
  <div id="app">
    <Desktop />
  </div>
</template>

<script>
import Desktop from "./components/Desktop.vue"

export default {
  name: 'App',
  components: {
    Desktop
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
  margin-top: 60px;
}
</style>
