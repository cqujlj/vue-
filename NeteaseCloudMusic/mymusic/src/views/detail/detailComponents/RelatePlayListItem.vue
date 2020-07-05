<template>
    <div class="relate_play_list" @click="relateClick">
        <div class="relate_left">
            <img :src="relatePlayItem.coverImgUrl">
        </div>
        <div class="relate_right" >
            <div class="list_describe">{{relatePlayItem.name}}</div>
            <span class="creator">by {{relatePlayItem.creator.nickname}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RelatePlayListItem",
        props:{
            relatePlayItem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            relateClick(){
                console.log("跳转到本页面");
                console.log("点击的item的id：",this.relatePlayItem.id);
                this.$router.push("/detail/" + this.relatePlayItem.id);
                //跳转到本页面的不同id  使用go(0)刷新一次页面
                this.$router.go(0);
            },
        },
        watch:{

        }
    }
</script>

<style scoped>
    .relate_play_list{
        width: 12rem;
        height: 3.5rem;
        padding: 0.4rem;
        display: flex;
        align-items: center;
        margin: 1rem auto;
        border-bottom: 0.5px solid #e4e4e4;
    }
    .relate_play_list:hover {
        background-color: #e8e8e8;
        cursor: pointer;
    }
    .relate_left{
        width: 3rem;
        height:3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .relate_left img{
        width:2.5rem;
        height: 2.5rem;
    }
    .relate_right{
        width: 10rem;
        height: 3.5rem;
        text-align: left;
    }
    .list_describe{
        font-size: 1rem;
        color: #1f1e1e;
        text-overflow:ellipsis;/*省略号 */
        white-space:nowrap;/*溢出时不换行 */
        overflow:hidden;/*溢出时隐藏 */
        margin-top: 0.4rem;
        margin-left: 0.3rem;
    }
    .creator{
        font-size: 0.8rem;
        color: #5f5e5e;
        margin-top: 0.3rem;
        margin-left: 0.5rem;
    }
</style>