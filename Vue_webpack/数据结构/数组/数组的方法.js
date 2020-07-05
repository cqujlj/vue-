let numbers = [1,2,3,4,5,6,7];

let numbers2 = Array.from(numbers);
console.log(numbers2);  //[1, 2, 3, 4, 5, 6, 7]

let evens = Array.from(numbers,x => (x%2 ===0));
console.log(evens);  //[false, true, false, true, false, true, false]

numbers.copyWithin(0,3,5);
console.log(numbers);   //[4, 5, 3, 4, 5, 6, 7]

let obj1 = {name : "Jack",height : 180};
let obj2 = {name : "Nancy",height : 160};
let obj3 = {name : "Jerry",height : 172};
let obj4 = {name : "Jane",height : 165};
let people = [obj1,obj2,obj3,obj4];

console.log(people.sort(compareFnAge));
//按年龄升序排序
function compareFnAge(a,b){
    if (a.height < b.height) return -1;
    else if (a.height > b.height ) return  1;
    else return  0;
    // return a.height - b.height;
}

let names = ["Ana" , "ana",  "john", "John"];
console.log(names.sort()); // ["Ana", "John", "ana", "john"]

//忽略大小写进行比较
function compareFnName(a,b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    else if (a.toLowerCase() > b.toLowerCase()) return 1;
    else  return 0;
}
console.log(names.sort(compareFnName));  //["Ana", "ana", "John", "john"]

//希望小写字母排前面
function compareFnLower(a,b) {
    return a.localeCompare(b);
}
console.log(names.sort(compareFnLower));  // ["ana", "Ana", "john", "John"]