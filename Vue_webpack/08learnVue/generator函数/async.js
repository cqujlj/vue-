// var  asyncFunc = async function(){
//     console.log("start......");  //没有使用await，直接执行，
//     await setTimeout(function () {
//         console.log("hello")},10);
//     await Promise.resolve('promise成功')
//         .then(res =>console.log("res:",res));
//     await Promise.reject("promise出错了")
//         .catch(e =>console.log("e:",e));
//     console.log("ending.......")
// };
// asyncFunc().then(v => console.log("v:",v));

// start......
// res: promise成功
// e: promise出错了
// ending.......
// v: undefined
// hello


//面试题


//代码执行开始
console.log('script start');  //顺序执行 1

setTimeout(function () {  //加入宏任务队列
    console.log('setTimeout')
}, 0);

async1();
async function async1 () {
    console.log('async1 start  我在await前');  //顺序执行2
    await async2();   //暂停async1  去执行async2
    console.log('async1 end')   //微队列执行1
}

async function async2 () {
    console.log('async2');   //顺序执行3
}

new Promise (function (resolve) {
    console.log('promise1');   //顺序执行4
    resolve();
}).then (function () {//then方法中的代码是异步  加入微任务队列
    console.log('promise2')      //微队列执行2   微队列执行结束  执行宏队列  即setTimeout
});

console.log('script end');  //顺序执行5  全局代码执行结束，开始执行微队列任务 返回async1的执行


// script start  首先打印  之后遇到setTimeout，加入宏任务队列，不立即执行
// async1 start  //setTimeout之后调用了async1();  直接运行console.log('async1 start')
// async2    //遇到awit 暂停async1的执行 从左往右 执行async2  运行console.log('async2 start')
// promise1     //async2运行完毕，因为await阻塞了async的执行，所以跳出来去执行下面的代码，即promise，
                //promise中，顺序执行，执行console.log('promise1');
                // then方法中的代码是异步执行的，加入微队列
// script end     //promise执行完，按顺序执行 console.log('script end'); 全局代码执行结束，去执行微队列
// async1 end
// promise2
// setTimeout   //微队列执行完，执行宏队列




