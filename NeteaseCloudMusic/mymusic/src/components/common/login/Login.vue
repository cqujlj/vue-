<template>
    <div class="mask" v-show="isShowLogin">
        <div class="pop">
            <p>登录</p>
<!--            点击x：关闭左右登录注册组件 修改showLogin和showPhoneLogin的值-->
            <img  @click="popClick" src="../../../assets/close.svg">
        </div>
        <div class="mask-content">
            <div class="mask-left">
                <div class="mask-left1">
                    <img  src="../../../assets/loginImg.png">
                </div>
<!--                点击手机注册 改变showPhoneLogin=true 使得手机登录组件显示-->
                <button class="mask-left2" @click="btn_phone"><span>手机号登录</span></button>
                <button class="mask-left3"><span>注册</span></button>
                <div class="mask-left4"><input type="checkbox" id="check1">
                    <span >同意《服务条款》《隐私政策》《儿童隐私政策》</span></div>
            </div>
            <div class="mask-center"></div>
            <div class="mask-right">
                <div class="mask-right1">
                    <img src="../../../assets/wechat.svg">
                    <span>微信登陆</span>
                </div>
                <div class="mask-right2">
                    <img src="../../../assets/qq.svg">
                    <span>QQ登陆</span>
                </div>
                <div class="mask-right3">
                    <img src="../../../assets/bok.svg">
                    <span>微博登陆</span>
                </div>
                <div class="mask-right4">
                    <img src="../../../assets/wangyi.svg">
                    <span>网易邮箱登陆</span>
                </div>
            </div>
        </div>
        <tele-number-login v-show="showPhoneLogin"
                           :is-show-login="showPhoneLogin"
                           @phone_pop_click="getPhoneState"
        ></tele-number-login>
<!--        <register v-show="isShowRegister"></register>-->
    </div>
</template>

<script>
    import Register from "./Register";
    import teleNumberLogin from "./teleNumberLogin";
    export default {
        name: "Login",
        components: {
            Register,
            teleNumberLogin},
        data() {
            return {
                showPhoneLogin:false,  //决定电话登录组件是否显示
                showThis:false
            };
        },
        //接受来自父组件的isShowModal，决定是否显示
        props: {
            isShowLogin: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },
        methods:{
            popClick(){
                console.log("关闭所有组件");
                this.showThis = !this.isShowLogin;
                // this.showPhoneLogin = false;
                //把要关闭组件的消息传回给父组件
                this.$emit('pop_click', this.showThis)
            },
            btn_phone(){
                this.showPhoneLogin = true;
            },
            getPhoneState(val){
                this.showPhoneLogin = val;
            }
        },
    }
</script>

<style scoped>

.mask{
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
    .pop{
        width: 100%;
        background-color: #2d2d2d;
        border-radius:2%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pop img{
        height: 1.4rem;
        width:1.4rem;
        margin: 0.35rem 0.7rem;
        border: 0.2px solid #eeeeee;
    }

    .pop p{
        color: white;
        font-size: 1rem;
        margin: 0.37rem 1.4rem;

    }

    .mask-content  {
        width: 90%;
        margin: 0.5rem auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
.mask-left{
    width: 60%;
    margin-top: 0.5rem;
    /*background-color: #e5dece;*/
}
.mask-center{
    width: 1px;
    height: 14.8rem;
    margin: auto;
    background-color: #808080;
}
.mask-right{
    width: 38%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
.mask-left1, .mask-left2, .mask-left3{
    width: 80%;
    margin: 0.5rem  auto;
    font-size: 1rem;
}
.mask-left4{
    width: 100%;
    margin:  0.5rem  auto;
    font-size: 1rem;
}
.mask-left2{
    color: white;
    background-color: #3080cc;
}
.mask-left2, .mask-left3{
    box-shadow: 0.2px 0.2px #d6d6d6;
}

.mask-left img{
    width: 14.5rem;
    height: 8.6rem;
}
.mask-left4 span{
    color: #3080cc;
    font-size: 0.8rem;
}

.mask-right1, .mask-right2, .mask-right3, .mask-right4{
    width: 100%;
    height: 2.8rem;
    margin-left: 0.7rem;
    margin-bottom:  1.2rem ;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
    .mask-right img{
        width: 1.7rem;
        height: 1.7rem;
    }
.mask-right span{
    font-size: 1.2rem;
    margin-left: 0.7rem;
}
</style>