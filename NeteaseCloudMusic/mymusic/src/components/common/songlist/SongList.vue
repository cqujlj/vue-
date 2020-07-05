<template>
    <div class="songs">
        <title-nav class="title">
            <div slot="left" class="re"> ●热门推荐</div>
            <div slot="center" class="titleitem">
                <a>&nbsp华语&nbsp&nbsp </a>|
                <a>&nbsp流行&nbsp&nbsp </a>|
                <a>&nbsp摇滚&nbsp&nbsp </a>|
                <a>&nbsp民谣&nbsp&nbsp </a>|
                <a>&nbsp电子&nbsp&nbsp </a>
            </div>
            <div slot="right" class="more" @click="recommendClick"><button>更多</button></div>
        </title-nav><br>
        <div class="list">
            <song-list-item  v-for="item in songs" :songs-item="item"/>
        </div>
    </div>
</template>

<script>
    import SongListItem from "./SongListItem";
    import TitleNav from "../TitleNav";
    export default {
        name: "SongList",
        components:{
            SongListItem,
            TitleNav
        },
        props:{
            songs:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            recommendClick(){
                console.log("跳转到推荐歌单页面");
                this.$router.push("/recommend");
            }
        }
    }
</script>

<style scoped>
    .songs{
        width: 56rem;
        margin:2px auto;
        padding: 0.2rem 0;
    }
    .title{
        width: 100%;
        height: 2.6rem;
        display: flex;
        align-items: center;
    }
    .re{
        width: 50%;
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: 2rem;
        color: #c20c0c;
        text-align: left;
    }
    .titleitem{
        width: 100%;
        font-size: 1rem;
        color: gray;
        text-align: left;
    }
    .titleitem a:hover{
        color: #c20c0c;
    }
    .more{
        width: 50%;
        text-align: right;
        font-size: 1rem;
        margin-right: 1.15rem;
    }
    .more a{
        font-size: 1rem;
        color: gray;
    }
    .more span{
        color: #c20c0c;
        font-weight: bolder;
    }
    .more a:hover{
        color: black;
        cursor: pointer;
    }

    .list{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 0.14rem;
        height: auto;
    }


</style>