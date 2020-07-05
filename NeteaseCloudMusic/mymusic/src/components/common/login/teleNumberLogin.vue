<template>
    <div class="teleNumber" v-show="isShowPhone">
        <div class="tele-pop">
            <p>手机号登录</p>
<!--            点击该图标 关闭该组件-->
            <img  @click="phone_click" src="../../../assets/close.svg">
        </div>
        <div class="teleNumberContent">
            <div class="phone" >
                <form action="" >
                    <select name="phone-title" class="phone-title">
                        <option value="内陆">+86</option>
                        <option value="中国香港">+852</option>
                        <option value="中国澳门">+853</option>
                        <option value="中国台湾">+886</option>
                    </select>
                </form>
                <input id="phone"  maxlength="11" type="text"
                       placeholder="请输入手机号" size="30rem"
                       v-model="phone" v-on:blur="telephoneBlur">
            </div>

            <div class="pass">
                <input id="password" type="password"
                       placeholder="请输入密码"
                       v-model="password"
                       size="38rem">
            </div>

            <div class="auto-forget">
                <div class="auto">
                    <input type="checkbox" checked="true">
                    <p>自动登录</p>
                </div>
                <p>忘记密码？</p>
            </div>
            <div class="to-login" v-on:click="loginMessage">登录</div>
            <div class="teleNumberBottom">
                <div class="other"  @click="phone_click">其他登录方式</div>
                <div class="toRegister">没有账号？免费注册</div>
            </div>
        </div>

    </div>
</template>

<script>
    import {sendLogin} from "../../../request/homeRquest";

    export default {
        name: "teleNumberLogin",
        data(){
            return{
                showThisPhone:false,
                phone:'',
                password:'',
            }
        },
        props: {
            isShowPhone: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },

        methods:{
            phone_click(){
                this.showThisPhone = !this.isShowPhone;
                this.$emit('phone_pop_click', this.showThis)
            },
            telephoneBlur: function (){
                var text = document.getElementById("phone").value; //获取输入框的ID 存放到text变量中
                var verify = /^1(3|4|5|6|7|8|9)\d{9}$/; //获取正则表达式 存放到verify变量中
                var result = verify.test(text.trim()); //判断输入框内容是否符合 正则表达式
                //如果符合正则表达式，则在输入框后面打"√"；否则打"×"
                if (result && text != "") {
                } else {
                    this.phone='';
                    alert("请输入11位手机号");
                    return 0;
                }
            },

            loginMessage() {
                let postData = {phone:this.phone,password:this.password};
                console.log(postData);
                sendLogin(this.phone,this.password).then(res => {
                    // 保存数据/如果不保存,数据会被回收
                    console.log('登录返回数据：',res);
                    if(res.msg === '密码错误'){
                        alert("密码错误，请重新输入")
                    }
                    else if(res.msg === undefined) {
                        // alert("登录成功");
                        // 跳转到另一个 个人主页
                        //存在一个问题 如何保持登录状态？？？
                        // window.location.href="/profile";
                        //将用户名和token放入sessionStorage
                        sessionStorage.setItem("userId",res.account.id);
                        sessionStorage.setItem("userToken",res.token);
                    //    将用户名放入vuex
                        this.$store.dispatch("setUser",res.account);
                        // this.$store.dispatch("setToken",res.token);
                    //    打印登录状态
                        console.log("登录成功",this.$store.state.isLogin);
                        window.location.href="/profile";
                    }
                }).catch(error => {
                        alert('该账号没有注册')
                    });


            },
        },
    }
</script>

<style scoped>

    .teleNumber{
        height: 24rem;
        width: 36rem;
        background-color: #f2f2f2;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: -12rem;
        margin-left: -18rem;
        border-radius: 2%;
        box-shadow: 2px 2px 2px  -2px #808080;
    }

    .tele-pop{
        height: 2rem;
        width: 100%;
        background-color: #2d2d2d;
        border-radius:2%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tele-pop img{
        height: 0.85rem;
        width:  0.85rem;
        margin:  0.35rem  0.7rem;
        /*border: 0.2px solid #eeeeee;*/
    }
    .tele-pop p{
        color: white;
        font-size: 0.5rem;
        margin: 0px 1.4rem;;

    }
    .teleNumberContent  {
        width: 80%;
        height: 85%;
        margin: 0.7rem auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-color: #ebebeb;
    }

    .phone, .pass{
        width: 80%;
        height: 2.8rem;
        margin-top: 0.7rem;
        font-size: 0.8rem;
        /*background-color: #ff7396;*/
    }
    .phone-title{
        width: 3rem;
    }
    .auto-forget, .to-login {
        width: 65%;
        height: 1.8rem;
        line-height: 1.8rem;
        margin-top: 0.5rem;
        font-size: 0.8rem;
        /*background-color: #ff7396;*/
    }

    .phone{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    .auto-forget{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .auto{
        display: flex;
        align-items: center;
    }
    .to-login{
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        background-color: #297ac7;
        border-radius: 5%;
        box-shadow: 1px 1px 1px grey;
        color: white;
    }
    input{
        font-size: 0.8rem;
        color: gray;
        height: 1.7rem;
    }
    select{
        width: 2.57rem;
        height:2.05rem;
        font-size: 0.8rem;
        color: gray;
    }
    .teleNumberBottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        width: 80%;
        height:  2.8rem;;
        margin-top: 0.7rem;
        font-size: 0.8rem;
        color: #297ac7;
        /*background-color: #ff7396;*/
    }
    .toRegister, .other{
        width: 50%;
        height: 1.4rem;
        font-size: 0.8rem;
    }

</style>