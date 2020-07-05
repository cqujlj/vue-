<template>
    <Scroll class="after_login"  ref="scroll">
        <div class="after_login_content">
            <my-message :ower-message="userMessage"></my-message>
            <my-song-list :ower-song-list="userSongs"/>
        </div>
    </Scroll>
</template>

<script>
    import Scroll from "../../../components/common/scroll/Scroll";
    import MyMessage from "./MyMessage";
   import MySongList from "./MySongList";
    export default {
        name: "AfterLoginProfile",
        components:{
            MySongList,
            Scroll,
            MyMessage
        },
        props:{
            userMessage:{
                type:Object,
                default(){
                    return {}
                }
            },
            userSongs:{
                type:Array,
                default(){
                    return []
                }
            },
        }
    }
</script>

<style scoped>
    .after_login{
        /*如果不设置高度，则返回顶部不起作用*/
        height: calc(100% - 4rem);
        overflow: hidden;
        background-color: #dadada;
        margin-top: 4rem;
    }
    .after_login_content{
        margin: 0px auto;
        width: 60rem;
        background-color: #fff;

    }

</style>