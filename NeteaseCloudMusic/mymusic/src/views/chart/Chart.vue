<template>
    <scroll class="chart">
        <div class="content">
            <div class="left">
                <div class="chart-title">
                    <span>云音乐特色榜</span>
                </div>
                <chart-list :charts="chart" v-on:itemClick="tabClick"/>
            </div>
            <div class="right">
<!--                26个数据传给子组件 以及每个组件的榜单歌曲详情传过去-->
                <chart-nav :chart-nav-data="chart"
                           :chart-nav-current-index="chartIndex"
                           :song-list="songList"/>
            </div>
        </div>
    </scroll>
</template>

<script>
    import Scroll from "../../components/common/scroll/Scroll";
    import ChartListItem from "./chatList/ChartListItem";
   import ChartList from "./chatList/ChartList";
   import ChartNav from "./chatList/ChartNav";
   import {getChartDetail} from "../../request/homeRquest";
   import {getChartIdx , getASong} from "../../request/chartRequest";

    export default {
        name: "Chart",
        components:{
            ChartListItem,
            ChartList,
            ChartNav,
            Scroll
        },
        data(){
            return{
                //存储请求来的数据
                chart:[],
                songList:[],
                ids:[],
                chartIndex:0,
            }
        },
        methods:{
            getChartMessage(){
                getChartDetail().then(res=>{
                    console.log("所有榜单详情获取成功：",res);
                    var that = this;
                    that.chart = res.list;
                    });
            },
            tabClick(index){
                this.chartIndex = index;
                this.getChartIdx();  //改变了item，则要重新请求数据
                console.log( "组件里面点击一个item:",this.chartIndex);
            },
            //获取对应榜单数据
            // ?如何实现点击item请求对应数据
            getChartIdx(){
                this.ids = [];
                this.songList = [];
                getChartIdx(this.chartIndex).then(res => {
                    // 保存数据/如果不保存,数据会被回收
                    //res.privileges是榜单里面的所有歌曲信息
                    console.log("开始获取榜单信息");
                    var data = res.privileges;
                    for(let i = 0; i<data.length;i++){
                        var that = this;
                        that.ids.push(data[i].id);
                        getASong(data[i].id).then(songRes=> {
                            var thatSong = this;
                            thatSong.songList.push(songRes.songs);  //Array
                        });
                    }
                    console.log("所有id",this.ids);
                    console.log("所有的歌曲",this.songList);
                });
                console.log("获取歌曲id成功");
            },
        },
        created() {
            console.log("chart created");
        //    调用获取数据的方法
            this.getChartMessage();
            this.getChartIdx();
        },
    }
</script>

<style scoped>
    .chart{
        width: 100vw;
        /*如果不设置高度，则返回顶部不起作用*/
        background-color: #dadada;
        height: calc(100% - 4rem);
        overflow: hidden;
        margin-top: 4rem;
    }
    .content{
        width: 72rem;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        background-color: #fff;
    }
    .left{
        width: 16rem;
        background-color: #f9f9f9;
        border: 1px solid #bfbfbf;
    }
    .chart-title{
        color: black;
        font-size: 1rem;
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        text-align: left;
    }
    .right{
        width: 56rem;
    }
</style>