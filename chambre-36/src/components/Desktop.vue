<template>
    <div>
      <Taskbar />
      <Toolbar />
    </div>
</template>

<script>
import Taskbar from "@/components/global/Taskbar";
import Toolbar from "@/components/Toolbar";
export default {
  name: 'Desktop',
  components: {Toolbar, Taskbar},
}
</script>

<style>

</style>



