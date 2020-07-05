var flag=true

function add(n,m) {
    return n+m;
}

function mul(n,m) {
    return n*m;
}
function select(){
    let str='helloliweijia520jiangliangji1314';
    let reg=/[a-z]+/;
    let arr=str.split(reg);
    let max=Math.max(arr);
    console.log(max);

}


module.exports={
    flag,add,mul,select
}