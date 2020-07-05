//方法2 使用闭包定义JS模块
(function () {
    //msg是私有数据
    var msg="i am jlj";
    //操作数据的函数
    function getMsg() {
        console.log("msg:"+msg);
    }
    function setMsg(mess) {
        msg=mess;
        console.log("mess:"+msg);
    }
    //把要向外暴露的函数 添加为window的属性
    window.myModule2={
        getMsg,
        setMsg
    };
})();


