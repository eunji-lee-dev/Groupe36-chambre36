<template>
    <div class="home-background">
        <p>10:12</p>
        <div class="home-login">
            <img src="" alt="">
            <p>Chloé</p>
            <form>
                <img src="" alt="">
                <input type="text" placeholder="Mot de passe">
            </form>
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
    name: 'Home'
}
</script>

<style>
.home-background {
    height: 100vh;
    width: 100%;
    background-image: url(../assets/imgs/homebackground.jpg);
    color: white;
}

.home-background p:first-child {
    text-align: end;
    padding: 20px 50px;
}

.home-login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 80%;
    z-index: 1;
}

.home-login p {
    margin: 15px 0;
}

.home-login input {
    border-radius: 5px;
    border: none;
    padding: 8px 10px;
    width: 200px;
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