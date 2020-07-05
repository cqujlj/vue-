<template>
    <div>
      <p>-----------------这是moduleA的内容----------------------</p>
      <p>{{$store.state.moduleA.moAMess}}</p>
      <h2>{{$store.state.moduleA.moACount}}</h2>
      <button @click="moACount(10)">+num</button>
      <p>moA的getters调用:{{$store.getters.powerMoACount}}</p>
      <p>{{$store.getters.powerMoACount2}}</p>
    </div>
</template>

<script>
    export default {
        name: "ModuleA",
        methods:{
            moACount(num){
                //调用modules中的mutations 调用方式与根模块的方式一样
               this.$store.commit('powerCount',num)
            },
        }
    }
</script>

<style scoped>

</style>
