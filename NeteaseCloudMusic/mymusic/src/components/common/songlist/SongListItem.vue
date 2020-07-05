<template>
<!--    -->
    <div class="songs-item" @click="itemClick">
        <img :src="showImage" alt="">
        <div class="songs-info">
            <p class="describe">{{songsItem.name}}</p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "SongListItem",
        props:{
            songsItem:{
                type:Object,
                default(){
                    return []
                }
            }
        },
        computed:{
            showImage(){
                return this.songsItem.picUrl || this.songsItem.coverImgUrl;
            }
        },
        methods:{
            itemClick(){
                console.log("跳转到详情页面");
                console.log("点击的item的id：",this.songsItem.id);
                this.$router.push("/detail/" + this.songsItem.id);
            },
                //监听图片是否加载成功  事件总线
                // imageLoad(){
                //     //发射图片加载事件i
                //     this.$bus.$emit('itemImageLoad');
                // },
        },
    }
</script>

<style scoped>
    .songs-item {
        width: 12rem;
        height: 12rem;
        margin: 0.5rem 0.35rem;
        position: relative;
        background-color: #efefef;

    }
    .songs-item img:hover{
        opacity: 0.5;
    }
    .songs-item img {
        width: 11rem;
        height: 10rem;
        position: relative;
    }

    /*.songs-info {*/
    /*    font-size: 1.5rem;*/
    /*    position: absolute;*/
    /*    bottom: 0.7rem;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    overflow: hidden;*/
    /*    text-align: center;*/
    /*}*/

    .describe {
        overflow: hidden;
        text-overflow: ellipsis;
        /*文字在一行显示  显示不完则...*/
        white-space: nowrap;
        margin-top: 0.2rem;
        font-size: 0.8rem;
        color: grey;
    }

</style>