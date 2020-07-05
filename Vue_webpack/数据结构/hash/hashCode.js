
// function hashFunc(str,max) {
//     //1、定义hashCode
//     let hashCode=0;
//     //2、霍纳算法
//     for ( let i = 0; i < str.length; i++ ){
//         hashCode=31*hashCode + str.charCodeAt(i);
//     }
//     hashCode = hashCode % max;
//     return hashCode;
// }
// console.log("hash位置是：",hashFunc("panda",11));//0
// console.log("hash位置是：",hashFunc("cats",11)); //7
// console.log("hash位置是：",hashFunc("apple",11));  //10
// console.log("hash位置是：",hashFunc("dog",11)); //6
const MAX_LOAD_FACTOR = 0.75;
const MIN_LOAD_FACTOR= 0.25;
class HashTable {
    constructor(){
        this.storage = [];  //用于存储元素
        this.count = 0 ;   //当前存储了多少元素
        this.limit = 7 ;  //最好是质数 最多能存储的元素
    }
//    hash的方法：
    //    判断质数
    isPrime(num){
        var temp = Math.ceil( Math.sqrt(num));  //向上取整
        for (let i=2; i <= temp ;i++){
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }

//    获取质数
    getPrime(num){
        while (!this.isPrime(num)){
            num=num+1;
        }
        return num;
    }
//    1、hash函数
 hashFunc(str,max) {
    //1、定义hashCode
    let hashCode=0;
    //2、霍纳算法
    for ( let i = 0; i < str.length; i++ ){
        hashCode=31*hashCode + str.charCodeAt(i);
    }
    hashCode = hashCode % max;
    return hashCode;
}


//    2、放出元素
    put(key,value){
    //    1、根据key映射到某个下标值
        const  index = this.hashFunc(key ,this.limit);
    //    2、根据index获取对应的内存空间bucket
    //    判断数组bucket是否为null，如果为null直接返回null
        let bucket = this.storage[index];
        if (bucket === undefined){
            bucket=[];
            this.storage[index]= bucket;
        }
    //    3、hash表的键不能重复，遍历数据，判断key是否已经存在，是进行插入还是修改
        let overRide = false;
        for (let i=0;i<bucket.length;i++){
            let tuple = bucket[i];
            //key有重复，执行覆盖更新操作
            if (tuple[0] === key){
                tuple[1] = value;  //覆盖原元素
                overRide = true;
            }
        }
        //如果没有重复的key，则执行插入操作
        if (!overRide){  //没有覆盖,加入新元素，
            bucket.push([key,value]);    // 注意push是个“数组”
            this.count++;  //元素数量+1
            if (this.count > this.limit*MAX_LOAD_FACTOR){
                //确保新容量是质数
                let newLimit = this.getPrime(this.limit*2)
                this.reSize( newLimit );
            }

        }
    }


//    3、根据key获取value
    get(key){
        //1、根据key获取下标值
        const  index = this.hashFunc(key , this.limit);
        //根据下标值获取内存空间
        const  bucket = this.storage[index];
        //如果内存空间为空，则返回bull
        if (bucket === undefined){
            return null;
        }
        //不为空时，遍历内存空间，找出==key的元素
        for (let i = 0;i < bucket.length; i++) {
            let tuple = bucket[i];
            if(tuple[0] === key){
                console.log("查找成功");
                return tuple[1];
            }
        }
        //没有找到==key的元素，则返回null
        return null;
    }
//    4、根据key删除方法
    delete(key){
        const index = this.hashFunc(key,this.limit);
        let bucket = this.storage[index];
        if (bucket === undefined)  return null;
        for (let i = 0;i<bucket.length;i++){
            let tuple = bucket[i];
            if (tuple[0] === key){
                bucket.splice(i,1);//删除一个元素
                this.count--;
                //如果元素减少，缩小容量
                if (this.limit > 8 && this.count < this.limit *MIN_LOAD_FACTOR){
                    //确保新容量是质数
                    let newLimit =Math.floor(this.limit/2);
                    newLimit = this.getPrime(newLimit);
                    this.reSize(Math.floor(newLimit));
                }
                return tuple[1];
            }
        }
    }
//    5、判空
    isEmpty(){
        return this.count === 0;
    }
//    6、长度
    size(){
        return this.count;
    }

    //扩容函数
    reSize(newLimit){
    //    1、保存旧的数组内容
        let oldStorage = this.storage;
    //    2、重置属性
        this.limit = newLimit;//希望是个质数
        this.storage = [];
        this.count = 0;
    //    3、取出oldStorage的元素放入storage
        oldStorage.forEach((bucket)=>{
            if (bucket === null){
                return ;
            }else{
                for (let i=0 ; i< bucket.length; i++){
                    let tuple = bucket[i];
                    this.put(tuple[0],tuple[1]);
                    this.count++;
                }
            }
        })
    }

}


const hashtable = new HashTable();
hashtable.put("aaa","Jerry");
hashtable.put("bbb","18");
hashtable.put("ccc","ChengDu");
hashtable.put("ddd","女");
hashtable.put("eee","180");
console.log(hashtable.storage);   //容量：7
hashtable.put("fff","47");
console.log(hashtable.storage);//扩容后：17
// console.log(hashtable.get("name"));
// console.log(hashtable.get("age"));
// console.log(hashtable.get("address"));
// console.log(hashtable.get("abc"));  //null
console.log(hashtable.delete("aaa"));
console.log(hashtable.delete("bbb"));
console.log(hashtable.delete("ccc"));
console.log(hashtable.delete("ddd"));
console.log(hashtable.storage);


