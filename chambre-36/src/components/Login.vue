<template>
  <div id="all">
    <Taskbar class="taskbar"/>
    <div class="browser">
      <BrowserInterface />
      <form action="" class="login">
        <img src="../assets/imgs/icon-blog.png" alt="icon">
        <input type="text" placeholder="groupe36@edu.devinci.fr">
        <input type="text" placeholder="Mot de passe">
        <input type="submit" value="Se connecter">
        <p><a href="#">Mot de Passe oublié</a></p>
      </form>
    </div>

    <DockBar class="dockBar"/>
  </div>
</template>

<script>
import Taskbar from "@/components/global/Taskbar";
import DockBar from "@/components/global/DockBar";
import BrowserInterface from "@/components/global/BrowserInterface";

export default {
  name: "Login",
  components: {BrowserInterface, DockBar, Taskbar}
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#all {
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
  height: 500px;
  background-color: #7C7C7C;;
  border-radius: 7px;
}

#all .browser .login {
  width: 300px;
  height: 330px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 5px;
}

#all .browser .login {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#all .browser .login img {
  width: 100px;
}

#all .browser .login input[type='text'] {
  width: 200px;
  height: 30px;
  border: 1px solid #707070;
}

#all .browser .login input[type='submit'] {
  width: 100px;
  height: 30px;
  background-color: #5FE32F;
  border: none;
  color: #fff;
  cursor: pointer;
}

#all .browser .login p a {
  font-size: 14px;
  color: #5A6DFF;
}

#all .dockBar {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

</style>
