
// 创建节点
class Node{
    constructor(element) {
        this.element=element;
        this.next=null;//指向下一个node
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }

    //    追加链表node
    append(element){
        const newNode=new Node(element);//创建element的节点
        if(this.head===null){
            //  链表为空，直接用head指向该元素
            this.head=newNode;
        }
        else{
            let current=this.head;
            //当current的next不为空表示不是尾node，current就后移
            while(current.next!==null){
                current=current.next;
            }
            //    直到current==null，表示到达链表的尾node
            //     插入newNode
            current.next=newNode;
        }
        this.length++;

    }
    //    在指定位置插入
    insert(position,element){
        if (position < 0 || position > this.length)
        {  //判断是否越界
            console.log("不正确的位置");
            return false;
        }
        else
        {
            const newNode=new Node(element);//创建element的节点
            if (position===0){ //就在head后面插入
                newNode.next=this.head.next;
                this.head.next=newNode;
            }
            else{
                let  index=0;
                let current=this.head;
                let previous=this.head;
                while (index < position){
                    //没有到指定位置，则两个指针不断后移
                    previous=current;
                    current=current.next;
                    index++;
                }
                //while结束即index===position，到底指定位置
                previous.next=newNode;
                newNode.next=current;
                this.length++; //不要忘记长度+1
            }
            return true;
        }
    }

    // 获取指定位置的元素信息  该方法不改变链表
    get(position){
        //把对应位置的元素返回
        if (position<0 || position > this.length-1){
            console.log("位置错误");
            return false;
        }else
        {
            let index=0;
            let current=this.head;
            while (index++ <position){
                current=current.next;
            }
            return current.element;
        }
    }
    //    查找元素位置  该方法不改变链表
    indexOf(element){
        let index=0;
        let current=this.head;
        while (current!==null){
            if (current.element===element){
                return index; //找到了返回位置信息
            }else{
                index++;
                current=current.next;
            }
        }
        return -1;    //没找到返回-1
    }

    //    更新指定位置元素
    update(position,element){
        //先删除后插入
        const res = this.removeAt(position);
        this.insert(position,element);
        return res;
    }
    //    删除指定位置元素
    removeAt(position){
        if (position<0 || position > this.length-1){
            console.log("位置错误");
            return null;
        }else
        {
            let index=0;
            let current=this.head;
            let previous=this.head;
            if (position===0){
                this.head=current.next;
            }else{
                while (index++ < position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            this.length--;
            return  current.element;  //返回被删除元素
        }
    }
    //    删除指定元素
    remove(element){
        const index=this.indexOf(element);
        if (index===-1)
            return;//没找到
        else
            return this.removeAt(index);  //找到则移除
    }
    //    判空
    isEmpty(){
        return this.length===0;
    }
    //    返回链表长度
    size(){
        return this.length;
    }
}
const l1=new LinkedList();
l1.append(3);
l1.append(5);
l1.append(2);
console.log(l1);
const l2=new LinkedList();
l2.append(4);
l2.append(5);
l2.append(5);
console.log(l2);

var addTwoNumbers = function(l1, l2) {
    var res=new LinkedList();
    if (l1.head || l2.head){
        let curl1 = l1.head;
        let curl2 = l2.head;
        var flag = 0;
        while (curl1 || curl2){
            console.log("curl1",curl1.element);
            console.log("curl2",curl2.element);
            //    不为空
            if (curl1.element + curl2.element + flag <10){
                res.append(curl1.element + curl2.element + flag);
                flag = 0;
                curl1 = curl1.next;
                curl2 = curl2.next;
            }
            else{
                res.append((curl1.element + curl2.element + flag)%10);
                flag = 1;
                curl1 = curl1.next;
                curl2 = curl2.next;
            }
        }
        }
    console.log("res:",res)
};
addTwoNumbers(l1, l2);

// link.insert(2,'AA');
// console.log(link);
// console.log("该位置的元素：",link.get(2));
// console.log("该元素的位置：",link.indexOf("AA"));
// console.log("被删除：",link.removeAt(2));
// console.log(link);
// link.update(2,"newC");
// link.remove("A");
// console.log(link);

//双向链表
// class DoubleNode extends  Node{
//     constructor(element){
//         super(element);
//         this.prev = null;
//     }
// }
//
// class DoubleLickedList extends LinkedList{
//     constructor(){
//         super();
//         this.tail =null;
//     }
//    重写方法
//    append()
//    this:构造函数内的this指向该对象
//     append(element) {
//         //记得创建节点，传入element
//         const  doubleNode = new DoubleNode(element);
//         if (this.length === 0 || this.head === null){
//             //    空链表 直接追加
//             this.head = doubleNode;
//             this.tail = doubleNode;
//         }
//         else{
//             // 链表不为空，找到最后一个节点，在它之后添加
//             this.tail.next = doubleNode;  //最后的节点指向newnode成为最后节点
//             doubleNode.prev = this.tail; //newNode的prev指向之前的最后节点
//             this.tail = doubleNode;  //tail指向最后节点
//         }
//         this.length++;
//     }
//    在指定位置插入

    // insert(position, element) {
    //     if (position < 0 || position > this.length){
    //         return false
    //     }
    //     else {
    //         const newNode = new DoubleNode(element);
    //         if (this.head===null){
    //             //如果是空链表
    //             this.head = newNode;
    //             this.tail = newNode;
    //         }else{
    //             //如果不是空链表
    //             //插到头部
    //             if (position === 0){
    //                 this.head.prev=newNode;
    //                 newNode.next=this.head;
    //                 this.head=newNode;
    //             }
    //             //  插入到尾部
    //             else  if(position === this.length){
    //                 //     this.append(element);
    //                 this.tail.next = newNode;  //最后的节点指向newnode成为最后节点
    //                 newNode.prev = this.tail; //newNode的prev指向之前的最后节点
    //                 this.tail = newNode;  //tail指向最后节点
    //             }
    //             //插入到中间
    //             else {
    //                 let index=0;
    //                 let current=this.head;
    //                 let previous=null;
    //                 while(index++ < position){
    //                     previous=current;
    //                     current=current.next;
    //                 }
    //                 //    找到指定位置，进行插入
    //                 previous.next=newNode;
    //                 newNode.prev=previous;
    //                 newNode.next=current;
    //                 current.prev=newNode;
    //             }
    //         }
    //         this.length++;
    //         return  true;
    //     }
    // }

//    重写removeAt
//     removeAt(position) {
//         if (position < 0 || position > this.length-1){
//             return null
//         }
//         let current = this.head;
//         let previous=null;
//         if (position === 0){
//             if (this.length===1){
//                 this.head=null;
//                 this.tail=null;
//             }else{
//                 this.head=this.head.next;
//                 this.head.prev=null;
//             }
//         }else if(position === this.length-1){
//             current = this.tail;  //记录被删掉的元素
//             this.tail.prev.next=null;
//             this.tail = this.tail.prev;
//         }else {
//             let index = 0;
//             while (index++ < position){
//                 previous = current;
//                 current = current.next;
//             }
//             previous.next =  current.next;
//             current.next.prev = previous;
//         }
//         this.length--;
//         return current.element;
//     }
//
// }

//
// const doubleList = new DoubleLickedList();
// doubleList.append("A");
// doubleList.append("B");
// doubleList.append("C");
// console.log("位置1的元素：",doubleList.get(1));
//
// console.log('BBB的位置：',doubleList.indexOf("BBB"));
// doubleList.insert(2,"BBB");
// console.log('BBB的位置：',doubleList.indexOf("BBB"));
// console.log("删除位置2：",doubleList.removeAt(2));
// console.log("现在的链表:",doubleList);
//
// console.log("被更新的：",doubleList.update(0, 'a'));
// console.log("被更新的：",doubleList.update(1, 'b'));
// console.log("现在的链表:",doubleList);
// console.log("删除指定元素：",doubleList.remove('a'));
// console.log("现在的链表:",doubleList);
// console.log("null？",doubleList.isEmpty());
// console.log("size  :",doubleList.size());


