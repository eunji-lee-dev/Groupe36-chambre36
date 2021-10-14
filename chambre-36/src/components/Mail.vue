<template>
    <div>
        <taskbar />
        <mail-interface class="mailInterface"/>
        <toolbar />
    </div>
</template>

<script>
import MailInterface from '@/components/global/MailInterface.vue'
import Taskbar from '@/components/global/Taskbar.vue'
import Toolbar from '@/components/Toolbar.vue'

export default {
  name: "Mail",
  components: { 
    MailInterface,
    Taskbar,
    Toolbar,
  },
}
</script>

<style scoped>
.mailInterface {
    position: absolute;
    top: 10vh;
    left: 0;
    right: 0;
    margin: 0 auto;
}
</style>
