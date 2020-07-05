i
<template>
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick"> 点击确定</button>
        <cpn></cpn>
    </div>
</template>

<script>
    import cpn from './cpn.vue'   //导入子组件所在的.vue文件
    export default {
        name: "App",
        components:{
          cpn
        },
        data(){
            return{
                message:"我是vue的mess",
            }
        },
        methods:{
            btnClick:function () {
                document.writeln("我是btnclick点击出来的文字")
            }
        },
    }
</script>

<style scoped>
   .app{
       color: #4ecd21;
       font-family: 华文隶书;
   }
</style>