<template>
    <div id="chart-nav">
        <!--  存放chart-nav-item-->
        <chart-nav-item
                v-for= "(item,index) in chartNavData"
                v-show= "index === chartNavCurrentIndex"
                v-bind:each-chart-item="item"/>

<!--        @click.native="itemClick(index)"-->
<!--  chartNavData是父组件传来的数据  :each-chart-item="item" 给子组件发数据 -->
        <div class="chart-content">
            <title-nav class="each-chart-title">
                <div slot="left" class="chart-title-left">歌曲列表</div>
                <div slot="center" class="chart-title-center">
                    <span>100首歌</span>
                </div>
                <div slot="right" class="chart-title-right">播放<span>{{playTotal}}</span>次</div>
            </title-nav>

            <div class="chart-content-list">
                <each-chart-list :each-chart-song="songList"/>
            </div >

        </div>


    </div>
</template>

<script>
    import ChartNavItem from "./ChartNavItem";
    import TitleNav from "../../../components/common/TitleNav";
    import EachChartList from "./EachChartList";
    export default {
        name: "ChartNav",
        components:{
            ChartNavItem,
            TitleNav,
            EachChartList
        },
        data(){
            return {
                chartNavIndex:0,
            }
        },
        props:{
            chartNavData:{
                type:Array,
                default(){
                    return []
                }
            },
            chartNavCurrentIndex:{
                type:Number,
                default(){
                    return 0
                }
            },

            songList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        created(){
          console.log("this.songList在chartNav",this.songList)
        },
        computed:{
            playTotal(){
                // return 0;
                return this.chartNavData[this.chartNavCurrentIndex].playCount
            }
        }

    }
</script>

<style scoped>
    .chart-content{
        width: 90%;
        margin: auto;

    }
    .chart-content-list{
        border-left: 0.5px solid #a8a8a8;
        border-right: 0.5px solid #a8a8a8;
    }
.each-chart-title{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
    .chart-title-left{
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size:1.5rem;
        font-weight: bolder;
        text-align: left;
        color: #373737;
    }
    .chart-title-center{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size:0.8rem;
        text-align: left;
        color: #373737;
    }
.chart-title-right{
    width:20%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size:0.8rem;
    text-align: right;
    color: #373737;
}
    .chart-title-right span{
        color: darkred;
    }
</style>