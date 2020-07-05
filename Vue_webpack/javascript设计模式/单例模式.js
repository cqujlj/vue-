//********单例模式:一个类仅有一个实例，并提供一个访问它的全局访问点

//假设要设置一个管理员，多次调用也仅设置一次，
// 我们可以使用闭包缓存一个内部变量来实现这个单例

//定义一个类：SetManager
function SetManager(name) {
    this.manager = name;
}
//给该类添加方法：getName
SetManager.prototype.getName = function () {
    console.log(this.manager);
};

//设置一个单例模式的管理员
var SingletonSetManager = (function () {
    var manager = null;
    return function (name) {
        if (!manager){
            manager = new SetManager(name);
        }
        return manager;
    }
})();

//多次调用也仅设置一次
SingletonSetManager('Jack').getName();  //Jack
SingletonSetManager('Nancy').getName();  //Jack
SingletonSetManager('Jerry').getName();  //Jack

// 会调用两次父类构造函数.
//     一次在创建子类原型的时候
// 另一次在子类构造函数内部(也就是每次创建子类实例的时候).
// 1.创建构造函数的阶段
// 1.1.创建Animal的构造函数
function Animal(age) {
    this.age = age
    this.colors = ["red", "green"]
}

// 1.2.给Animal添加方法
Animal.prototype.animalFunction = function () {
    alert("Hello Animal")
}

// 1.3.创建Person的构造函数
function Person(name, age) {
    Animal.call(this, age)  //在子类中调用父类的构造函数，并传递参数，实现构造函数继承
    this.name = name
}

// 1.4.给Person的原型对象重新赋值
Person.prototype = new Animal(0) //把父类的实例赋值给子类的原型，实现原型链继承

// 1.5.给Person添加方法
Person.prototype.personFunction = function () {
    alert("Hello Person")
}

// 2.验证和使用的代码
// 2.1.创建Person对象
var person1 = new Person("Coderwhy", 18)
var person2 = new Person("Kobe", 30)

// 2.2.验证属性
alert(person1.name + "-" + person1.age) // Coderwhy,18
alert(person2.name + "-" + person2.age) // Kobe,30

// 2.3.验证方法的调用
person1.animalFunction() // Hello Animal
person1.personFunction() // Hello Person

// 2.4.验证引用属性的问题
person1.colors.push("blue")
alert(person1.colors) // red,green,blue
alert(person2.colors) // red,green

