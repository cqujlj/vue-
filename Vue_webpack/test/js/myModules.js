// 方法1 使用闭包定义JS模块
function myModule() {
    //msg是私有数据
    var msg="My name is Jony J";
    //操作数据的函数
    function upper() {
        console.log("upper:"+msg.toUpperCase());
    }
    function lower() {
        console.log("upper:"+msg.toLowerCase());
    }

    return{ //向外暴露对象或函数
        upper,lower
    }
}
