<template>
  <div id="dockBar">
    <img src="../../assets/imgs/icon2.png" alt="icon">
    <img src="../../assets/imgs/icon3.png" alt="icon">
    <img src="../../assets/imgs/icon4.png" alt="icon">
    <img src="../../assets/imgs/icon5.png" alt="icon">
    <img src="../../assets/imgs/icon6.png" alt="icon">
    <img src="../../assets/imgs/icon7.png" alt="icon">
    <img src="../../assets/imgs/icon8.png" alt="icon">
    <img src="../../assets/imgs/icon9.png" alt="icon">
    <img src="../../assets/imgs/icon10.png" alt="icon">
    <img src="../../assets/imgs/icon11.png" alt="icon">
  </div>
</template>

<script>
export default {
  name: "DockBar"
}
</script>

<style>

  #dockBar {
    width: 750px;
    background-color: #D2D2D2;
    border-radius: 20px;
    height: 70px;
    margin: 0 auto;
  }
  #dockBar img {
    width: 50px;
    margin: 10px;
  }

  #dockBar img:nth-child(6) {
    height: 50px;
  }

  #dockBar img:last-child{
    border-left: 1px solid #707070;
  }
</style>
