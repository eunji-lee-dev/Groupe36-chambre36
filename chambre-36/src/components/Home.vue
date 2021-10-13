<template>
    <div class="home-background">
        <p>10:12</p>
        <div class="home-login">
            <img src="../assets/imgs/imageprofil.jpg" alt="Image de profil de Chloé">
            <p>Chloé</p>
            <div>
                <img src="" alt="">
                <input v-model="password" @keyup.enter="submit" type="text" placeholder="Mot de passe">
            </div>
        </div>
        <div class="home-buttons">
            <div>
                <img src="" alt="">
                <p>Suspendre</p>
            </div>
            <div>
                <img src="" alt="">
                <p>Redémarrer</p>
            </div>
            <div>
                <img src="" alt="">
                <p>Éteindre</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            password: ""
        }
    },
    methods:{
        submit(){
            this.$emit('checkPassword', { passwordEnter: this.password })
            this.$router.push( {name: 'Desktop'})
        }
    }
}
</script>

<style>
.home-background {
    height: 100vh;
    width: 100%;
    color: white;
    background: url(../assets/imgs/bg2.jpg) no-repeat center center fixed;
    background-size: cover;
}
.home-background p, .home-background .home-login, .home-background .home-buttons {
    backdrop-filter: blur(3px);
}
.home-background p:first-child {
    text-align: end;
    padding: 10px 30px;
}

.home-login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 80%;
    z-index: 1;
}

.home-login img {
    width: 130px;
    height: auto;
    margin: 0 auto;
    border-radius: 100px;
}

.home-login p {
    margin: 20px 0;
}

.home-login input {
    border-radius: 5px;
    border: none;
    padding: 8px 14px;
    width: 200px;
    background-color: rgba(255, 255, 255, 0.116);
    backdrop-filter: blur(6px);
    color: white;
}

.home-login input::placeholder {
    color: whitesmoke;
}

.home-buttons {
    width: 50%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 10vh;
    left: 25%;
}
</style>

