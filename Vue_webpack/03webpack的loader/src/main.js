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
document.writeln("i am your friend")


require('./normal.css'),
require('./special.less')


