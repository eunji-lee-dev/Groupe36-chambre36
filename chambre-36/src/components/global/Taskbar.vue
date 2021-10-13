<template>
  <div id="taskbar">
    <div class="left">
      <img src="../../assets/imgs/icon1.png" alt="icon">
      <p>Finder</p>
      <p>Fichier</p>
      <p>Édition</p>
      <p>Présentation</p>
      <p>Aller</p>
      <p>Fenêtre</p>
      <p>Aide</p>
    </div>
    <div class="right">
      <p>100%</p>
      <img src="../../assets/imgs/icon12.png" alt="icon">
      <p>Mar. 22 oct. à 14:12:20</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Taskbar"
}
</script>

<style>
  #taskbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.6);
    font-size: 10px;
    height: 30px;
  }
  #taskbar .left {
    display: flex;
    align-items: center;
  }

  #taskbar .left > img,  #taskbar .left > p {
    margin: 8px;
  }

  #taskbar .left img {
    width: 15px;
  }
  #taskbar .right {
    display: flex;
    align-items: center;
  }

  #taskbar .right > img, #taskbar .right > p {
    margin: 10px;
  }
</style>
