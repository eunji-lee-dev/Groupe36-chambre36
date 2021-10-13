<template>
    <nav>
        <img src="../assets/imgs/icon2.png" alt="Icône de Finder">
        <img src="../assets/imgs/icon3.png" alt="Icône">
        <img src="../assets/imgs/icon4.png" alt="Icône du calendrier">
        <img class="open" src="../assets/imgs/icon5.png" alt="Icône de Safari">
        <img src="../assets/imgs/icon6.png" alt="Icône de AppleTV">
        <img class="open" src="../assets/imgs/icon7.png" alt="Icône de Mail">
        <img src="../assets/imgs/icon8.png" alt="Icône de Adobe Illustrator 2020">
        <img src="../assets/imgs/icon9.png" alt="Icône de Adobe Photoshop 2020">
        <img src="../assets/imgs/icon10.png" alt="Icône de Règlage">
        <img src="../assets/imgs/icon11.png" alt="Icône de la corbeille">
    </nav>
</template>

<script>
export default {
    name: 'Toolbar'
}
</script>

<style scoped>
nav {
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(180, 180, 180, 0.219);
    backdrop-filter: blur(6px);
    padding: 10px 10px;
    border-radius: 30px;
}

img {
    width: 60px;
    height: auto;
    margin: 0 8px;
    cursor: pointer;
}

img:last-of-type {
    width: 70px;
    padding-left: 10px;
    border-left: 1px solid rgb(46, 46, 46);
}

.open:hover {
    -webkit-transform:scale(1.25); /* Safari et Chrome */
    -moz-transform:scale(1.25); /* Firefox */
    -ms-transform:scale(1.25); /* Internet Explorer 9 */
    -o-transform:scale(1.25); /* Opera */
    transform:scale(1.25);
}

</style>