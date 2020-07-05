// ES6的模块化导入写法：import {变量，函数，对象...} from "地址/文件"
// import { flag,add,mul} from "./mathUnits.js"
import {person} from "./info.js"
// CommonJS写法  {变量，函数，对象...} = require（ "地址/文件"）
var { flag,add,mul }=require("./mathUnits.js")
// 导入默认项

if (flag){
    //显示导入的对象内容
    console.log(person)
    console.log(person.name)
    console.log(person.age)
    console.log(person.height)
}
// 调用导入的函数
console.log(add(77,4))

console.log(mul(20,7))
document.writeln("我是main.js里面写的内容")

//获取css文件
require('./normal.css')
    //获取less文件
require('./special.less')

//导入vue
import Vue from "vue"
// import App from './app.js'   //导入js文件  里面包含vue的template
//导入vue文件
import App from './app.vue'
new Vue({
    el:"#app",
    template:'<App/>',
    components:{
        App
    }

})


