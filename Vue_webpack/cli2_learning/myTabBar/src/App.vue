<template>
  <div id="app">
    <router-view></router-view>
   <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
    import MainTabBar from "./components/MainTabBar";
    export default {
        name: 'App',
        components: {
            MainTabBar
        }
    }
</script>

<style>
  /*在style导入文件 要使用@import*/
  @import "./assets/css/base.css";

</style>
