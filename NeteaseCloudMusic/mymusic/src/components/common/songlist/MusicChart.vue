<template>
    <div class="songs">
            <title-nav  class="title">
               <div slot="left" class="chart">●榜单</div>
                <div slot="center" class="item"></div>
                <div slot="right" class="more">
                    <a><router-link to="/chart">更多</router-link></a><span>—></span></div>
            </title-nav>

        <br>
        <div class="list">
            <song-list-item  v-for="item in chart" :songs-item="item"/>
        </div>
    </div>
</template>

<script>
    import SongListItem from "./SongListItem";
    import TitleNav from "../TitleNav";
    export default {
        name: "MusicChart",
        components:{
            SongListItem,
            TitleNav
        },
        props:{
            chart:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .songs{
        width: 56rem;
        margin:0px auto;
        padding: 0.35rem 0;
    }

    .title{
        width: 100%;
        height:2.6rem;
        align-items: center;
    }
    .item{
        width: 100%;
        height: 100%;
        font-size: 1rem;
        color: gray;
        text-align: left;
    }
    .chart{
        width: 50%;
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: 2vw;
        color: #c20c0c;
        text-align: left;
    }
    .more{
        width: 50%;
        text-align: right;
        margin-right: 1.15rem;
    }
    .more a{
        font-size: 1rem;
        color: gray;
        text-decoration: none;
    }
    .more span{
        color: #c20c0c;
        font-weight: bolder;
    }
    .more a:hover{
        color: black;
    }

    .list{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 0.14rem;
        height: auto;
    }


</style>