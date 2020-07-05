<template>
  <div id="app">
<!--    <router-link to="/common" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
<!--    <router-link to="/user" tag="button" replace>用户</router-link>-->
    <router-link to="/home" >首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId" >用户</router-link>
    <router-link v-bind:to="{path:'/Profile',query:{name:'Nancy',height:165,age:24}}" >我的</router-link>

<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <keep-alive exclude="Profile"><router-view></router-view></keep-alive>
<!-- <router-view相当于占位  指定组件放在哪个位置   -->
<!--   keep-alive 使得被包含的组件保留历史状态 配合beforeRouteLeave函数使用-->
  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
      return{
          userId:"Jannie" //用户信息
      }
    },
    methods:{
      // homeClick(){
      //     this.$router.replace('/common')
      //     // this.$router.push('/common')
      // },
      // aboutClick(){
      //     // replace不会保留历史记录，不能通过<-  ->前进后退
      //     this.$router.replace('/about')
      //     // this.$router.push('/about')
      // }
    }
}
</script>

<style>
.active{
  color: indianred;
  background: beige;
}


</style>
