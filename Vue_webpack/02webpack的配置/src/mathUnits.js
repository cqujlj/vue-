// 每个js文件只能有一个默认项
// export default 是一种语法糖，当模块只有一个导出的时候，简化写代码人的代码量

// 可以单独导出
var flag=true

function add(n,m) {
    return n+m;
}

function mul(n,m) {
    return n*m;
}

console.log(max);
// CommonJS写法  导出
module.exports={
    flag,add,mul
}

// ES6写法
// export {add,mul}