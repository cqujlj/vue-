<template>
  <div>
    <p>----------helloActions的内容--------------</p>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">延时修改info</button>
  </div>
</template>

<script>
  import {AUPDATEINFO} from "../store/mutation_types";
  export default {
        name: "helloAction",
        methods:{
            updateInfo(){
                //无参数传递的actions
                // this.$store.dispatch(AUPDATEINFO)
                //有1个参数传递的actions
               // this.$store.dispatch(AUPDATEINFO,"我是携带的参数")
                //带有多个参数的actions
                this.$store.dispatch(AUPDATEINFO,{
                    load1:"我是HelloActions传来的参数",
                    success:()=>{
                        console.log("异步操作结束，我是HelloActions传递来的函数参数");
                    }
                }).then((res)=>{
                    console.log(res);
                    console.log('组件完成后回答：完成');
                })
            },
        }
    }
</script>

<style scoped>

</style>
