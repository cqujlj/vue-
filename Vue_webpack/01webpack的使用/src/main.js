// ES6的模块化写法  导入
// import { flag,add,mul} from "./mathUnits.js"
import {person} from "./info.js"
// CommonJS写法
var { flag,add,mul}=require("./mathUnits.js")

if (flag){
    console.log(person)
}
console.log(add(77,4))

console.log(mul(20,7))

console.log(select);
