// 定义一系列，把它们一个个封装起来，并且使得它们可以互相替换

//核心：将算法的使用和算法的实现分离


//加权映射关系
var levelMap = {
    S : 10,
    A : 8,
    B : 6,
    C : 4
};

//例1
// 假设需要通过成绩等级来计算学生的最终得分
// 每个成绩等级有对应的加权值。我们可以利用对象字面量的形式直接定义这个组策略
//组策略
var scoreLevel = {
  basicScore : 80,
    S:function () {
        return this.basicScore + levelMap['S'];
    },
    A:function () {
        return this.basicScore + levelMap['A']
    },
    B:function () {
        return this.basicScore + levelMap['B']
    },
    C:function () {
        return this.basicScore + levelMap['C']
    }
};

//调用
function getScore(level) {
    return scoreLevel[level] ? scoreLevel[level]() :0 ;
}

console.log(
    getScore('S'),
    getScore('A'),
    getScore('B'),
    getScore('C'),
    getScore('D'),
);

// 90 88 86 84 0

//例2
//在组合业务规则方面，比较经典的是表单的验证方法
var errorMessages = {
    default :'输入数据格式不正确',
    minLength : "输入数据长度不足",
    isNumber : "请输入数字",
    required : "内容不能为空",
};

//规则集
var rules = {
    minLength: function (value,length,errorMessage) {
        if (value.length < length){
            return errorMessage || errorMessages['minLength']
        }
    },
    isNumber: function (value,length,errorMessage) {
        if (!/\d+/.test(value)){
            return errorMessage || errorMessages['isNumber']
        }
    },
    required: function (value,length,errorMessage) {
        if (value === ''){
            return errorMessage || errorMessages['required']
        }
    },
};

//校验器
function Validator() {
    this.items = [];
}

Validator.prototype = {
    constructor:Validator,
    add:function (value,rule,errorMessage) {
        var arg = [value];
        if (rule.indexOf('minLength') !== -1){
            var temp = rule.split(':');
            arg.push(temp[1]);
            rule = temp[0];
        }
        arg.push(errorMessage);
        this.items.push(function () {
            return rules[rule].apply(this,arg);
        })
    },
    start:function () {
        for (var i = 0; i<this.items.length;i++){
            var ret = this.items[i]();
            if (ret){
                console.log(ret);
            }
        }
    }
};
// 测试数据
function testTel(val) {
    return val;
}

var validate = new Validator();

validate.add(testTel('ccc'), 'isNumber', '只能为数字'); // 只能为数字
validate.add(testTel(''), 'required'); // 内容不为空
validate.add(testTel('123'), 'minLength:5', '最少5位'); // 最少5位
validate.add(testTel('12345'), 'minLength:5', '最少5位');

var ret = validate.start();

console.log(ret);




