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
    /*增加阴影*/
    box-shadow: 0px -3px 1px rgba(140, 140, 140, 0.2);
    z-index:9;
  /*  方法：设置div样式 z-index:auto*/
  /*  auto可定义为一个值(整数数字)，越大代表越置前，如可定义为： z-index:999。*/
  /*前提是div是定位元素。*/
  }

</style>
