<template>
  <div>
    <h2>我是home</h2>
    <p>我是home的内容</p>
    <router-link to="/home/news" >新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "home",
        created(){
            console.log('created');
        },
        destroyed(){
            console.log('destroyed');
        },
        activated() {
            this.$router.push(this.path);
            console.log('activated');
        },
        deactivated(){
            console.log('deactivated');
        },
        //组件内的导航守卫
        beforeRouteLeave(to,from,next){
            console.log(this.$route.path);
            this.path=this.$route.path;
            next();
        }

    }
</script>

<style scoped>

</style>
