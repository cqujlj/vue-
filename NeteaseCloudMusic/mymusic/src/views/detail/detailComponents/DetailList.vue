<template>
    <div class="detail_list">
            <title-nav class="detail-list-title">
                <div slot="left" class="detail-list-left">歌曲列表</div>
                <div slot="center" class="detail-list-center">
                    <span>{{songsListData.length}}首歌</span>
                </div>
                <div slot="right" class="chart-title-right">播放<span>{{playTotal}}</span>次</div>
            </title-nav>
            <div class="detail-list">
                <each-chart-list :each-chart-song="songsListData"/>
            </div >

        </div>
</template>

<script>
    import TitleNav from "../../../components/common/TitleNav";
    import EachChartList from "../../chart/chatList/EachChartList";
    export default {
        name: "DetailList",
        components:{
            TitleNav,
            EachChartList
        },
        props:{
            detailListData:{
                type:Object,
                default(){
                    return {}
                }
            },
            songsListData:{
                type:Array,
                default(){
                    return []
                }
            },
        },
        computed:{
            playTotal(){
                // return 0;
                return this.detailListData.playCount
            }
        }
    }
</script>

<style scoped>
    .detail-list-title{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    span  {
        font-size: 1rem;
        color: grey;
    }
</style>