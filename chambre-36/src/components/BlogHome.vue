<template>
  <div id="all">
    <Taskbar class="taskbar"/>
    <BrowserInterface class="browser" />
    <DockBar />
  </div>
</template>

<script>
import Taskbar from "@/components/global/Taskbar";
import DockBar from "@/components/global/DockBar";
import BrowserInterface from "@/components/global/BrowserInterface";

export default {
  name: "BlogHome",
  components: {BrowserInterface, DockBar, Taskbar}
}

</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #all {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #all .taskbar {
    position: absolute;
    top: 0;
    width: 100%;
  }
  #all .browser {
    margin: 0 auto;
  }

</style>
