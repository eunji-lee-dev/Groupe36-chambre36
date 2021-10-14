<template>
  <div id="app">

    <Home @checkPassword="check" v-if="password != passwordCheck" />
    <div v-if="password == passwordCheck" id="wallpaper"></div>
<!--    <Navbar v-if="password == passwordCheck" />-->
<!--    <Toolbar v-if="password == passwordCheck" class="toolbar"/>-->


    <router-view />
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import Navbar from "@/components/Navbar.vue"
// import Toolbar from "@/components/Toolbar.vue"


export default {
  name: 'App',
  data() {
      return {
          password: "123456",
          passwordCheck: "",
      }
  },
  components: {
    // Home,
    // Toolbar
  },
  methods: {
    check(HomePassword){
      this.passwordCheck = HomePassword.passwordEnter
      console.log(HomePassword.passwordEnter)
    }
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
  box-shadow:none;
}

.toolbar {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>
