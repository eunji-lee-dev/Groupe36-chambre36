<template>
  <div id="browser">
    <div class="browserBar">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div id="header">
      <div class="left">
        <img src="../../assets/imgs/icon-blog.png" alt="icon">
      </div>
      <ul class="right">
        <li><a href="#">blog</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">mon espace</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BrowserInterface",
    props: {
      isDisplayed: Boolean
    }
  }
</script>

<style>

  body {
    height: 100%;
  }
  #browser {
    width: 900px;
    border-radius: 7px;
    height: auto;
  }
  #browser .browserBar {
    display: flex;
    height: 48px;
    background-color: #3B4044;
    align-items: center;
    border-radius: 7px 7px 0 0;
  }
  #browser .browserBar .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 7px;
  }
  #browser .browserBar .circle:first-child {
    background-color: #FE615E;
  }
  #browser .browserBar .circle:nth-child(2){
    background-color: #FFBE45;
  }
  #browser .browserBar .circle:last-child{
    background-color: #00C94F;
  }
  #header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: #D4D4D4;
  }
  #header .left img {
    width: 57px;
  }
  #header .right {
    margin: 10px;
    display: flex;
    align-items: center;
    list-style: none;
  }
  #header .right li a {
    text-decoration: none;
    color: #707070;
    text-transform: uppercase;
    margin: 0 10px;
    font-size: 16px;
  }
  #header .right li:last-child {
    margin-right: 10px;
  }
</style>
