//判断一个数组内是否存在某个对象
function isHasObject(arr , obj){
    arr.forEach( (item,index) =>{
        if (item.id === obj.id){
            arr.splice(index, 1); //删除下标为index的元素
        }
    });
    return arr;
}

var arr = [{name:"jack", id:101, height:165 },
    { name:"jack", id:102,  height:165 },
    { name:"jack",  id:103,  height:165}];

var obj = {name:"jack", id:102, height:165};
console.log(isHasObject(arr, obj));