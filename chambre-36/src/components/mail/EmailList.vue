<template>
    <div id="emailList">
        <div>
            <p><slot name="title">Titre</slot></p>
            <p><slot name="hour">10:10</slot></p>
        </div>
        <p><slot name="description">Ceci est une description</slot></p>
    </div>
</template>

<script>
export default {
    name: "EmailList"
}
</script>

<style scoped>
#emailList {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 20px 30px;
}

#emailList > div {
    display: flex;
    justify-content: space-between;
}

#emailList > p {
    text-align: start;
    margin-top: 20px;
    padding-bottom: 28px;
    border-bottom: solid 1px rgb(218, 218, 218);
    font-size: 12px;
}

#emailList > div p:first-of-type {
    font-weight: bold;
    font-size: 14px;
}

#emailList > div p:last-of-type {
    color: rgb(175, 175, 175);
    font-size: 14px;
}

</style>