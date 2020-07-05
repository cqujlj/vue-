<template>
    <scroll  class="no_login">
        <div class="no_login_content">
            <div class="no_login_left">
                <img src="../../../assets/profileImg.jpg">
            </div>
            <div class="no_login_right">
                <h1>登录网易云音乐</h1>
                <p>查看并管理你收藏的私房音乐</p>
                <p>方便地随时随地收听</p>
                <div> <img src="../../../assets/notoginpic.jpg"></div>
                <div class="button">请点击右上角登录</div>
            </div>
        </div>
    </scroll>

</template>

<script>
    import Scroll from "../../../components/common/scroll/Scroll";
    export default {
        name: "NotLogin",
        components:{
            Scroll
        }
    }
</script>

<style scoped>
.no_login{
    /*如果不设置高度，则返回顶部不起作用*/
    height: calc(100% - 4rem);
    overflow: hidden;
    margin-top: 4rem;
}
.no_login_content{
        width: 60vw;
        height: 140vh;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        background-color: #ffffff;
    }
    .no_login_left{
        width: 30%;
        margin-top: 10vh;
        margin-right: 1.4rem;
        /*background-color: #99ffc2;*/
    }
    .no_login_left img{
        width:30vw;
        height: 25vw;
    }
    .no_login_right{
        width: 40%;
        margin-top: 10vh;
        margin-left: 1.4rem;
    }
    .button{
        height: 2.05rem;
        line-height: 2.05rem;
        width: 60%;
        margin: 0.7rem auto;
        background-color: #3b89d4;
        color: white;
        border-radius: 5%;
        box-shadow: 1px 1px 1px #808080;
    }
</style>