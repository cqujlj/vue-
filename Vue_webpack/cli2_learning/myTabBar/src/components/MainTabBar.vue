<template>
  <tab-bar>

    <tab-bar-item path="/home" >
      <img slot="item-icon" src="../assets/img/TabBar/home.png" alt="">
      <img slot="icon-active" src="../assets/img/TabBar/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category"  activeColor="red">
      <img slot="item-icon" src="../assets/img/TabBar/category.png" alt="">
      <img slot="icon-active" src="../assets/img/TabBar/category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/cart"   activeColor="blue">
      <img slot="item-icon" src="../assets/img/TabBar/cart.png" alt="">
      <img slot="icon-active" src="../assets/img/TabBar/cart_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="red" >
      <img slot="item-icon" src="../assets/img/TabBar/profile.png" alt="">
      <img slot="icon-active" src="../assets/img/TabBar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
    import TabBar from "../components/tabbar/TabBar";
    import TabBarItem from "../components/tabbar/TabBarItem"
    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
