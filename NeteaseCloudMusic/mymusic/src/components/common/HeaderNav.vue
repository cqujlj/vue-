<template>
    <div id="home">
        <div class="header">
            <div class="logo">
                <img alt="" src="../../assets/icon.png">
                <span>网易云音乐</span>
            </div>
            <!--        此处需要使用路由-->
            <tab-bar class="title">
                <tab-bar-item path="/home" active-color="red">
                    <div slot="item-text"  class="title_item">首页</div>
                </tab-bar-item>
                <tab-bar-item path="/chart">
                    <div slot="item-text"  class="title_item">排行榜</div>
                </tab-bar-item>
                <tab-bar-item path="/profile">
                    <div slot="item-text"  class="title_item">我的主页</div>
                </tab-bar-item>

            </tab-bar>

            <div class="message">
                <input type="text" placeholder="搜索歌曲、MV、电台">
                <div v-show="!isLogin" class="login" @click="loginClick" ><a>登录</a></div>
                <div  v-show=" isLogin" class="login" @click="notLogin">退出账号</div>
                <login v-show="isShowModal"
                       :is-show-login="isShowModal"
                       @pop_click="getState"
                ></login>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    import TabBar from "./tabbar/TabBar";
    import TabBarItem from "./tabbar/TabBarItem";
    import Login from "./login/Login";
    import teleNumberLogin from "./login/teleNumberLogin";
    import {logout} from "../../request/homeRquest";

    export default {
        name: "HeaderNav",
        components:{
            TabBar,
            TabBarItem,
            Login,
            teleNumberLogin
        },
        data() {
            return {
                isShowModal: false,
            };
        },
        methods:{
            loginClick(){
                this.isShowModal = !this.isShowModal;
            },
            getState(val){
                this.isShowModal = val;
            },
            notLogin(){
            //    组件守卫
            //    已经登录状态回到登录接面
                this.$store.dispatch("setUser",null);
                //告诉后台 我退出了
                logout(res => {
                    console.log("退出登录");
                });
                window.location.href="/home";
            }
        },
        computed:{
            isLogin(){
                if (sessionStorage.getItem("userId") && sessionStorage.getItem("userToken")){
                    //当存储器里面有数据 则 表示登录了 isLogin设置为true
                    this.$store.commit("userStatus",sessionStorage.getItem("userId"));
                }else{
                    this.$store.commit("userStatus",null)
                }
                return this.$store.state.isLogin;
            }
        },


    }
</script>

<style scoped>
    #home{
        z-index: 99;
        position: fixed;
        top: 0rem;
    }
    .header{
        width: 100%;
        height:4rem;
        background-color: #242424;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

    }
    .logo{
        height: 4rem;
        width: 15rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        /*border: 1px solid white;*/
    }
    .logo img{
        height: 3rem;
        width: 3rem;
    }
    .logo span{
        font-size: 1.5rem;
        color: white;
    }
    .title{
        width: 40rem;
        height: 4rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        /*border: 1px solid white;*/
    }
    .title_item {
        /*background-color: #ff666e;*/
        height: 4rem;
        line-height: 4rem;
        width:4.5rem;
        color: white;
        font-size:1rem;
        text-align: center;
    }

    .message{
        width:25rem;
        height: 4rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        /*border: 1px solid white;*/
    }
    .message img{
        width:  2.8rem;
        height:  2.8rem;
        border-radius:50%;
    }
    .login img{
        width:  2.8rem;
        height:  2.8rem;
        border-radius:50%;
    }
    .line{
        width: 100vw;
        border: 2px solid red;
    }
    .login{
        color: white;
        font-size: 1rem;
    }
</style>