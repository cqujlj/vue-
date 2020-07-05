var timer;  //用于保存定时器的标识ID
var oldValue;
var newValue;
//获取元素当前样式
function getStyle(obj,name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj,null)[name];
    } else{
        return obj.currentStyle[name];
    }
}
//通用的move移动函数
//obj:要执行动画的对象
// speed：移动速度   >0向右  <0向左
//target: 边界  【0.1000】
//atrr:要执行属性的样式 left top width height
//callback:回调函数
function move(obj,speed,target,attr,callback) {
    //判断元素目前的位置
    var current=parseInt(getStyle(obj,attr));
    clearInterval(timer);
    //开启一个定时器
    if (current>target){
        speed=-speed;
    }
    timer=setInterval(function () {
        // 获取box原来的值
        oldValue=parseInt(getStyle(obj,attr));
        newValue=oldValue+speed;
        // 到达边界 停止移动
        if (speed>0&&newValue>target || speed<0&&newValue<target ){
            newValue=target;
        }
        //给box赋值
        obj.style[attr] =newValue+"px";
        if (newValue===target){
            clearInterval(timer);
            callback&&callback();
        }

    },50)
}

//为box添加class
function addClass(obj,cn) {
    //不存在则添加
    if (!hasClass(obj,cn)){
        obj.className+=" "+cn;
    }
}

function remove(obj,cn) {
    //存在则删除
    if (hasClass(obj,cn)){
        obj.className=obj.className.replace(cn,"")
    }
}

function Toggle(obj,cn) {
    //存在则删除
    if (hasClass(obj,cn)){
        remove(obj,cn);
    }
    //不存在则添加
    else {
        addClass(obj,cn);
    }
}

//判断是否存在class
function hasClass(obj,cn) {
    //使用正则表达式  \b:代表单词的开头或结尾，也就是单词的分界处
    var reg=new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
    //存在返回ture  不存在返回false
}