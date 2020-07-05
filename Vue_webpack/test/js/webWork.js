var onmessage=function (event) {
   var  number=event.data;
    console.log("分线程接收到数据"+event.data);
    var result=fibonacci(number);
    postMessage(result);
    console.log("分线程返回数据："+result);
};
console.log("分线程里面的this："+this);
//DedicatedWorkerGlobalScope]
function fibonacci(n) {
    return n<=2? 1:fibonacci(n-1)+fibonacci(n-2);
}