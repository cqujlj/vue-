<template>
    <scroll class="video_page">
        <div class="video_content">
           歌曲视频
        </div>
    </scroll>
</template>

<script>
    import Scroll from "../../components/common/scroll/Scroll";
    export default {
        name: "Video",
        components:{
            Scroll
        }
    }
</script>

<style scoped>
.video_page{
    width: 100vw;
    /*如果不设置高度，则返回顶部不起作用*/
    background-color: #7d75ff;
    height: calc(100% - 4rem);
    overflow: hidden;
    margin-top: 4rem;
}
    .video_content{
        height: 20rem;
        width: 20rem;
        background-color: #8b73ff;
    }
</style>