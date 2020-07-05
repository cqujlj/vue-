<template>
    <div class="profile">
        <not-login v-show="!isLogin"></not-login>
        <after-login-profile
                v-show="isLogin"
                :user-message="message"
                :user-songs="userSongList"/>
    </div>
</template>

<script>

    import Scroll from "../../components/common/scroll/Scroll";
    import NotLogin from "./profileComponents/NotLogin";
    import AfterLoginProfile from "./profileComponents/AfterLoginProfile";
    import MySongList from "./profileComponents/MySongList";
    import {getUser,getUserSongList} from "../../request/profileRequest";

    export default {
        name: "Profile",
        components:{
            Scroll,
            NotLogin,
            AfterLoginProfile,
            MySongList
        },
        data(){
            return{
                message:{},
                userSongList:[],
            }
        },
        created(){
            console.log("profile建立");
            this.getUser();
            this.getUserSongList();
            // var currentList = JSON.parse(localStorage.Storage);
            // localStorage.clear(); //清除所有歌单
            var arr = [];
            // window.localStorage.setItem('playList',JSON.stringify(arr));//存值

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
        methods:{
            //获取用户基本信息 昵称nickname，头像avatarUrl
            // 粉丝数量follows 关注数量followeds
            getUser(){
                getUser(sessionStorage.getItem("userId")).then(res=>{
                    var that = this;
                    that.message = res.profile;
                    console.log("用户详情：",res.profile)
                }).catch(err=>{
                    console.log("错误：",err)
                })
            },
            //获取歌单
            getUserSongList(){
                getUserSongList(sessionStorage.getItem("userId")).then(res=>{
                    var that = this;
                    that.userSongList=res.playlist;
                    console.log("用户歌单：",res.playlist);
                }).catch(err=>{
                    console.log(err);
                })
            },
        }
    }
</script>

<style scoped>
</style>