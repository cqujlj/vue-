class Node {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }

//    二叉搜索树的一些操作方法
//    1、插入元素
    _insert(key){
        var newNode = new Node(key);
        if (this.root === null){
        //    如果root为null，则将新节点赋值给root
            this.root = newNode;
        }else{
            // root不为空，则寻找合适的位置插入新节点
           this._insertNode(this.root,newNode);
        }
    }
    _insertNode(node,newNode){
        //如果新节点的值>当前的节点值,那么要插在右边
        if (newNode.key > node.key){
            //如果右边节点为空，怎直接将右边节点设置为新节点
            if (node.right === null){
                node.right = newNode;
            }else {
                //如果当前节点的右节点不为null，怎继续往右子数找位置
                this.insertNode(node.right,newNode);
            }
        }
        //如果新节点的值<当前的节点值,那么要插在左边
        else{
            if (node.left === null){
                node.left = newNode;
            }else {
                //如果当前节点的左节点不为null，怎继续往左子数找位置
                this.insertNode(node.left,newNode);
            }
        }
    }
    //    3、遍历  使用递归
    //先序遍历：先访问root 再遍历左子树 最后遍历右子树
    preOrderTraver(){
        this.preOrderTraverNode(this.root);
    }
    preOrderTraverNode(node){
        if (node === null)  return;  //为空表示访问结束
        console.log(node.key);
        this.preOrderTraverNode(node.left);
        //访问完所有左节点，就去访问右节点
        this.preOrderTraverNode(node.right);

    }

    //中序遍历：先遍历左子树 再访问root 最后遍历右子树
    inOrderTraver(){
        this.inOrderTraverNode(this.root);

    }
    inOrderTraverNode(node){
        if (node === null) return;
        this.inOrderTraverNode(node.left);
        console.log(node.key);
        this.inOrderTraverNode(node.right);
    }
    //后序遍历：先遍历左子树 再遍历右子树 最后访问root
    postOrderTraver(){
        this.postOrderTraverNode(this.root);
    }
    postOrderTraverNode(node){
        if (node === null) return;
        this.postOrderTraverNode(node.left);
        this.postOrderTraverNode(node.right);
        console.log(node.key)

    }

//    2、搜索元素
    search(key){
        return this.searchNode(this.root,key);
    }
    searchNode(node,key){
        if (node === null) return false;
    //    判断搜索的key与节点的key的关系
        if (key < node.key){
            return this.searchNode(node.left,key);
        }
        else if(key > node.key){
            return this.searchNode(node.right,key);
        }
        else {
            return true;
        }
    }
    //非递归方法
    search2(key){
        let node =this.root;
        if (node === null) return false;
        while (node !== null){
            if (key < node.key){
                node = node.left;
            }else if(key > node.key){
                node=node.right;
            }else{
                return true;
            }
        }
        return  false;
    }

//    寻找最大值（最右边的节点） 一直往右边遍历，直到node.right ===null
    findMin(){
        var node = this.root;
        while(node.left !== null){
            node = node.left;
        }
        return node.key;
    }
    //最小值（最左边的节点）  一直往左边遍历，直到node.left === null
    findMax(){
        var node = this.root;
        while(node.right !== null){
            node = node.right;
        }
        return node.key;
    }

//    删除节点
//    步骤：找到需要删除的节点，没找到则不需要删除
//    找到要删除的节点(分以下情况：)
//       1、删除叶子节点
//       2、删除只有一个子节点的节点
//       3、删除只有两个子节点的节点,
// 删除有子节点的节点时，其子节点必须往上提，而不是一并删除
    remove(key) {
        if (!this.search(key)) return null; //该节点不存在
        let current = this.root;
        let parent= null;
        let isLeftChild = true;  //记录是否是左节点
        // 开始查找节点
        while (current.key !== key){
            parent = current;
            if (key < parent.key){
                isLeftChild = true;
                current = current.left;
            }else{
                isLeftChild = false;
                current = current.right;
            }
            if (current === null) return false;  //删除失败
            }
      //找到节点
        //1、该节点是叶子节点
        if (current.left === null && current.right === null){
             if (current === this.root)  {
                 this.root = null;
             }else if(isLeftChild){
                 parent.left = null;
             }else{
                 parent.right = null;
             }
        }
        //被删除的节点只有一个子节点，并且其子节点是左节点
        else if (current.right === null){
            if (current === this.root){
                this.root = current.left;
            }else if(isLeftChild){
                parent.left = current.left;
            }else{
                parent.right = current.left;
            }
        }
        //被删除的节点只有一个子节点，并且其子节点是右节点
        else if (current.left === null){
            if (current === this.root){
                this.root = current.right;
            }else if(isLeftChild){
                parent.left = current.right;
            }else{
                parent.right = current.right;
            }
        }
        //被删除的节点有两个子节点，
        // 最麻烦的情况，那个子节点移上去的问题
            /*寻找规律
            * 前驱：比current小的节点，叫current的前驱
            * 后继：比current大的节点，叫current的后继
            * */
        else if(current.left !== null && current.right !== null ){
            //获取后继
            let successor =this.getSuccessor(current);
        //    判断是否是根节点
            if (current === this.root){
                this.root = successor;
            }else if(isLeftChild){
                parent.left = successor;
            }else {
               parent.right = successor;
            }
            successor.left = current.left;
        }
        return  true;
    }
    //找到后继
    getSuccessor(delNode){
    //    定义变量，存储临时节点
        let successorParent = delNode;
        let successor =delNode.right;
        let  current = delNode.right;
    //    寻找节点
        while (current !== null){
            successorParent = successor;
            successor = current;
            current = current.left;
        }
        //如果后继节点还有右节点
        if ( successor !== delNode.right){
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }
        return successor;
    }
}



let  bsTree = new BinarySearchTree();
bsTree.insert(11);
bsTree.insert(7);
bsTree.insert(15);
bsTree.insert(5);
bsTree.insert(3);
bsTree.insert(9);
bsTree.insert(8);
bsTree.insert(10);
bsTree.insert(13);
bsTree.insert(12);
bsTree.insert(14);
bsTree.insert(20);
bsTree.insert(18);
bsTree.insert(25);
bsTree.insert(6);
console.log(bsTree);
//先序遍历的结果应该为：
// 11、7、5、3、6、9、8、10、15、13

console.log("最大值：",bsTree.findMax());
console.log("最小值：",bsTree.findMin());
console.log("查找24：",bsTree.search2(24));
console.log("查找8：",bsTree.search2(8));

// console.log("先序遍历：");
// bsTree.preOrderTraver();
console.log("中序遍历：");
bsTree.inOrderTraver();
// console.log("后序遍历：");
// bsTree.postOrderTraver();

console.log(bsTree.remove(15));
console.log("中序遍历：");  //从小到大
bsTree.inOrderTraver();

