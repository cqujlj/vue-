function *demo() {
    console.log(1); //调用next才会运行
    let a = yield "aa";  //暂停程序
    console.log("a:",a);
    let b = yield "bb";
    console.log("b:",b);
    return "ccc"
}
let genObj = demo();
let a = genObj.next(10);  //next()会返回一个对象{ value:  , done: false/true}
let b =genObj.next(20);
let c =genObj.next(30);
console.log(a);    //{ value: 'aa', done: false }
console.log(b);    //{ value: 'bb', done: false }
console.log(c);    //{ value: 'ccc', done: true }


function* text(){
    yield 'a' ;   // yield是ES6关键字，作用是使generator函数暂停
    yield 'b' ;
    yield 'c' ;
    return 'd' ;  //yield后，必须return最后一个值，如果不return最后一个值value为undefined
}
let iterationObj = text();
console.log("iterationObj:",iterationObj);
console.log(iterationObj.next()) ; //{value: "a", done: false}  //next使得程序继续运行；
console.log(iterationObj.next()) ; //{value: "b", done: false}
console.log(iterationObj.next()) ; //{value: "c", done: false}
console.log(iterationObj.next()) ; //{value: "d", done: true}
