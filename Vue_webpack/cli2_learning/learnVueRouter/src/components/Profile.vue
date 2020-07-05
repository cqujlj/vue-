<template>
  <div>
    <p>我是profile的内容</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.height}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
    export default {
        name: "Profile",
        created(){
            console.log('created');
        },
        destroyed(){
            console.log('destroyed');
        },
    }
</script>

<style scoped>

</style>
