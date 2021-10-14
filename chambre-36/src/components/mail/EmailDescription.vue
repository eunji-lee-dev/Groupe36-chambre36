<template>
    <div id="emaildescription">
        <div class="b-bottom">
            <div>
                <img src="../../assets/imgs/medecin.jpg" alt="logo de Doctolib">
            </div>

            <div>
                <div class="flex mailInformation">
                    <p class="bold"><slot name="title">Titre</slot></p>
                    <p class="bold">Boîte de réception - Google</p>
                    <p><slot name="hour">19:32</slot></p>
                </div>
                <p class="title"><slot name="From">Titre</slot></p>
                <p>À : <span><slot name="To">sarah.connor@gmail.com</slot></span></p>
            </div>
        </div>

        <p><slot name="text">Ceci est le corps du mail</slot></p>
    </div>
</template>

<script>
export default {
    name: "EmailDescription"
}
</script>

<style scoped>
#emaildescription {
    padding: 20px 40px;
}

#emaildescription > div {
    display: flex;
    text-align: start;
}

.flex {
    display: flex;
}

img {
    width: 50px;
    height: auto;
    border-radius: 50px;
    margin-right: 20px;
}

.mailInformation {
    display: flex;
    justify-content: space-between;
    width: 34vw;
}

.mailInformation p:not(:first-of-type) {
    color: rgb(148, 148, 148);
}

.title {
    margin: 10px 0 4px;
}

span {
    font-size: 12px;
    color: rgb(148, 148, 148);
}

.b-bottom {
    padding-bottom: 30px;
    border-bottom: solid 1px rgb(195, 195, 195);
}

p {
    font-size: 14px;
}

#emaildescription > p {
    text-align: start;
    padding-top: 30px;
}

.bold {
    font-weight: bold;
}

</style>