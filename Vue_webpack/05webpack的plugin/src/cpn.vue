<template>
    <div>
        <h2>{{word}}</h2>
        <p>{{name}}</p>
        <button @click="cpnBtn"> 点击确定</button>
    </div>
</template>

<script>
    export default {
        name: "cpn",
        data(){
            return{
                word:"我是子组件cpn的word",
                name:"cpn组件的name"
            }
        },
        methods:{
            cpnBtn:function () {
                this.word="我是点击按钮改变之后的word"
            }
        },
    }
</script>

<style scoped>

</style>