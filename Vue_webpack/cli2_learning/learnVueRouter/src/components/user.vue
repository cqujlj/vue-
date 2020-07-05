<template>
  <div>
    <h2>我是</h2><p>{{userId}}</p>
    <p>我是user的内容hhhhh</p>
  </div>
</template>

<script>
    export default {
        name: "user",
        computed: {
            userId(){
                // 获取用户名
                return this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>
