<template>
  <div id="all">
    <Taskbar class="taskbar"/>
    <div class="browser">
      <BrowserInterface />
      <form action="" class="login" v-if="!is_show">
        <img src="../assets/imgs/icon-blog.png" alt="icon">
        <input type="text" placeholder="groupe36@edu.devinci.fr">
        <input type="text" placeholder="Mot de passe">
        <input type="submit" value="Se connecter">
        <button id="modal_active_btn" @click="handle_toggle" type="button">Mot de passe oublié</button>
      </form>
      <form v-show="is_show" id="modal">
        <img src="../assets/imgs/icon-blog.png" alt="icon">
        <p>Entrez le nouveau mot de passe que
          vous avez reçu par SMS.</p>

        <input type="password" placeholder="Nouveau mot de passe" />

        <input v-model="confirmPassword" type="password" placeholder="Nouveau mot de passe"/>
        <button @click="submit" type="button">Validé</button>
      </form>
    </div>
    <Toolbar class="toolbar" />
  </div>
</template>

<script>
import Taskbar from "@/components/global/Taskbar";
import BrowserInterface from "@/components/global/BrowserInterface";
import Toolbar from "@/components/Toolbar";

export default {
  name: "Login",
  components: {Toolbar, BrowserInterface, Taskbar},

  data: () => {
    return {
      is_show: false,
      password: "3636",
      confirmPassword: "3636",
    }
  },
  methods: {
    handle_toggle: function () {
      this.is_show = !this.is_show;
    },
    submit() {
      if (this.password == this.confirmPassword) {
        this.$router.push({name: 'BlogDraft'});
      }
    }
  }
}

</script>

<style>
body {
  background: url("../assets/imgs/homebackground.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#all {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
#all .taskbar {
  position: absolute;
  top: 0;
  width: 100%;
}
#all .browser {
  width: 80%;
  height: 500px;
  background-image: url("../assets/imgs/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 7px;
  border: 1px solid rgba(255,255,255,0.2);
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
#all .browser .login input:focus{
  outline: none;
}
#all .browser .login {
  max-width: 300px;
  height: 330px;
  margin: 20px auto;
  background-color: rgba(255,255,255,0.6);
  border-radius: 5px;
}
#all .browser .login .active {
  display: none;
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
#modal_active_btn {
  color: #5A6DFF;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
}
#modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  background-color: #fff;
  height: 330px;
  justify-content: space-around;
}
#modal button {
  width: 60px;
  border: none;
  border-radius: 5px;
  height: 30px;
  font-size: 16px;
  background-color: #5FE32F;
  color: #fff;
}


</style>
