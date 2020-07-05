export default {
    template:'<div>' +
        '<h2>message</h2> ' +
        '<button @click="btnClick"> 点击确定</button>' +
        '</div>',
    data(){
        return{
            message:"我是vue的message",
        }
    },
    methods:{
        btnClick:function () {
            document.writeln("我是btnclick点击出来的文字")
        }
    },

}