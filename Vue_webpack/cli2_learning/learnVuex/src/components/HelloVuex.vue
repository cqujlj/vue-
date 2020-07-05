<template>
  <div>
    <h3>----------HelloVuex内容--------------</h3>
<!--    获取共享数据-->
    <p>所有学生：<br>{{$store.state.students}}</p>
    <button @click="addStuden t">点击添加学生</button>
<!--   调用store的getters的more20Stu函数 进行条件筛选-->
    <p>筛选出来的学生个数为：</p>
    <p>{{$store.getters.more20StuLength}}</p>
    <p>{{$store.getters.more20Stu}}</p>
<!--    指定筛选年龄-->
    <p>指定筛选年龄>specialAge的学生为：</p>
    <p>{{$store.getters.moreAgeStu(14)}}</p>
  </div>

</template>

<script>
  import {ADDSTUDENT} from "../store/mutation_types";

  export default {
        name: "HelloVuex",
        // 父子组件之间参数传递
        // props:{
        //     counter:Number
        // },
        methods:{
            addStudent(){
                //将对象作为参数
                const stu={id:105,name:'Luce',age:17}
                this.$store.commit(ADDSTUDENT,stu)
            }
        }
    }
</script>

<style scoped>

</style>
