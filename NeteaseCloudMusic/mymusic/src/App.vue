<template>
  <div id="app">
    <header-nav/>
    <my-player class="player"></my-player>
    <keep-alive exclude="Detail"> <router-view/></keep-alive>
<footer-nav/>

  </div>
</template>

<script>
  import HeaderNav from "./components/common/HeaderNav";
  import MyPlayer from "./components/common/play/MyPlayer";
  import FooterNav from "./components/common/FooterNav";
  export default {
    name: 'App',
    components: {
      HeaderNav,
      MyPlayer,
      FooterNav
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .player{
    width: 100vw;
    height:6rem;
    background-color: rgba(19, 19, 19, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
  }
</style>
