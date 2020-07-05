<template>
  <div id="tab-bar">
<!--  存放tab-bar-item-->
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  /*在style导入文件 要使用@import*/
  #tab-bar{
    display: flex;    /*水平方向均匀分布*/
    background: #dadada;
    /*使tabbar至于底部*/
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    /*增加阴影*/
    box-shadow: 0px -3px 1px rgba(140, 140, 140, 0.2);
  }

</style>
