<template>
    <div class="home-background">
        <p>10:12</p>
        <div class="home-login">
            <img src="../assets/imgs/imageprofil.jpg" alt="Image de profil de Chloé">
            <p>Chloé</p>
            <p v-show="check === 'false'">Mot de passe incorrect</p>
            <div>
                <img src="" alt="">
                <input v-model="passwordToCheck" @keyup.enter="submit" type="text" placeholder="Mot de passe">
            </div>
        </div>
        <div class="home-buttons">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM85.94625,44.66625c-1.89469,0.04031 -3.41312,1.59906 -3.38625,3.49375v75.68c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-75.68c0.01344,-0.92719 -0.34937,-1.8275 -1.00781,-2.48594c-0.65844,-0.65844 -1.55875,-1.02125 -2.48594,-1.00781z"></path></g></g></svg>
                <p>Suspendre</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,6.88c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058c39.9368,0 72.24,32.3032 72.24,72.24c0,39.9368 -32.3032,72.24 -72.24,72.24c-39.9368,0 -72.24,-32.3032 -72.24,-72.24c0,-23.02284 10.76965,-43.46507 27.52,-56.69281v22.29281c-0.01754,1.24059 0.63425,2.39452 1.7058,3.01993c1.07155,0.62541 2.39684,0.62541 3.46839,0c1.07155,-0.62541 1.72335,-1.77935 1.7058,-3.01993v-29.06531v-5.33469h-34.4c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h23.04531c-18.22214,14.49896 -29.92531,36.84998 -29.92531,61.92c0,43.6552 35.4648,79.12 79.12,79.12c43.6552,0 79.12,-35.4648 79.12,-79.12c0,-43.6552 -35.4648,-79.12 -79.12,-79.12z"></path></g></g></svg>
                <p>Redémarrer</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M85.94625,6.82625c-1.89469,0.04031 -3.41312,1.59906 -3.38625,3.49375v75.68c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-75.68c0.01344,-0.92719 -0.34937,-1.8275 -1.00781,-2.48594c-0.65844,-0.65844 -1.55875,-1.02125 -2.48594,-1.00781zM62.08125,10.80375c-0.43,-0.01344 -0.86,0.05375 -1.24969,0.18813c-31.36313,10.52156 -53.95156,40.15125 -53.95156,75.00812c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-34.85687 -22.58844,-64.48656 -53.95156,-75.00812c-1.80062,-0.60469 -3.74906,0.36281 -4.35375,2.16344c-0.60469,1.80062 0.36281,3.74906 2.17688,4.36719c28.60844,9.59438 49.24844,36.59031 49.24844,68.4775c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-31.88719 20.64,-58.88312 49.24844,-68.4775c1.59906,-0.52406 2.59344,-2.09625 2.35156,-3.7625c-0.22844,-1.65281 -1.6125,-2.9025 -3.27875,-2.95625z"></path></g></g></svg>
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
            password: "123456",
            passwordToCheck: "",
            check: ""
        }
    },
    methods:{
        submit(){
            if(this.passwordToCheck == this.password) {
                this.$router.push( {name: 'Desktop'})
            } else {
                this.check = "false"
            }
        }
    }
}
</script>

<style>
.home-background {
    height: 100vh;
    width: 100%;
    color: white;
    background: url(../assets/imgs/homebackground.jpg) no-repeat center center fixed;
    background-size: cover;
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

.home-buttons p {
    padding-top: 10px;
}

</style>

