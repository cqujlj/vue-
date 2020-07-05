<template>
  <div id="app">
    <h3>----------APP内容--------------</h3>
    <h2>{{$store.state.message}}</h2>

    <button @click="addition">+01</button>
    <button @click="subtraction">-01</button><br>
    <h2>{{$store.state.counter}}</h2>
<!--    powerCounter时store里面的getters的函数-->
    <h2>counter的平方:{{$store.getters.powerCounter}}</h2>
<!--    带参数的mutation-->
    <button @click="addCount(5)">+05</button>
    <button @click="subCount(10)">-10</button>

    <hello-vuex></hello-vuex>
<!--    父子组件之间参数传递v-bind-->
<!--    <hello-vuex v-bind:counter="counter"/>-->
    <p>info信息：{{$store.state.info}}</p>
    <button @click="changeInfo">增加info信息</button>
    <button @click="deleteInfo">删除info信息</button>

    <hello-action></hello-action>

    <module-a></module-a>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex';
  import HelloAction from "./components/HelloAction";
  import ModuleA from "./components/ModuleA";
  import{
      INCREMENT,
      DECREMENT,
      CHANGEINFO,
      DELETEINFO,
      ADDCOUNT,
      SUBCOUNT} from "./store/mutation_types.js";

  export default {
  name: 'App',
  components:{
      HelloVuex,
      HelloAction,
      ModuleA
  },
  // data(){
  //    return{
  //        message:"我是APP组件",
  //    }
  // }
    methods:{
        addition(){
            // 调用mutations里面的函数 用于修改state
            // commit是普通提交风格
            this.$store.commit(INCREMENT)
        },
        subtraction(){
            this.$store.commit(DECREMENT)
        },
        addCount(count){
            this.$store.commit(ADDCOUNT,count)
        },
        // subCount(count){
        //     this.$store.commit(SUBCOUNT,count)
        // },
        //特殊的提交风格
        subCount(count){
            this.$store.commit({
                type:SUBCOUNT,
                count,
            })
        },
        changeInfo(){
            this.$store.commit(CHANGEINFO)
        },
        deleteInfo(){
            this.$store.commit(DELETEINFO)
        }

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
