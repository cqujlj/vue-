<template>
    <div class="each-chart">
        <div class="each-chart-title">
            <div slot="item0" class="title0"></div>
            <div slot="item1" class="title1"><span>歌曲标题</span></div>
            <div slot="item2" class="title2"><span>时长</span></div>
            <div slot="item3" class="title3"><span>歌手</span></div>
        </div>
        
        <div class="each-chart-song" v-for="(item,index) in eachChartSong">
            <each-chart-list-item  :song-item="item"  :index="index"/>
        </div>
    </div>
</template>

<script>
    // Date.prototype.toLocaleString = function() {
    //     return  this.getMinutes() + ":" + this.getSeconds();
    //     // return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate()+ this.getMinutes() + ":" + this.getSeconds();
    //
    // };
    import EachChartListItem from "./EachChartListItem";
    import TitleNav from "../../../components/common/TitleNav";
    export default {
        name: "EachChartList",
        components:{
            TitleNav,
            EachChartListItem
        },
        props:{
            eachChartSong:{
                type:Array,
                default(){
                    return []
                }
            },
            chartSongIndex:{
                type:Number,
                default(){
                    return 0
                }
            }
        },
        computed:{
            showImage(){
                return this.eachChartSong.songs.al.picUrl;
            },
        },
        methods:{
            //监听图片是否加载成功  事件总线
            imageLoad(){
                //发射图片加载事件i
                this.$bus.$emit('itemImageLoad');
            },
            //时长
            showTime(time){
                var date = new Date(time*1000); //获取一个时间对象 注意：如果是uinx时间戳记得乘于1000。比如php函数time()获得的时间戳就要乘于1000
                return  date.getMinutes() + ":" +  date.getSeconds();
            },
        }
    }
</script>

<style scoped>
    .each-chart{
        border: 0.5px solid #c4c4c4;
        margin-bottom: 1rem;
    }
.each-chart-title{
    background-color: #f9f9f9;
    width: 100%;
    height: 2.8rem;
    border-bottom: 0.5px solid #c4c4c4;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.each-chart-title span{
    margin-left: 0.35rem;
    font-size: 0.9rem;
}
.title1, .title1, .title2,.title3{
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #373737;
    text-align: left;
    border-left: 0.5px solid #c4c4c4;
}
.title0{
    width: 15%;
}
.title1{
    width: 50%;
}
.title2{
    width: 15%;
}
.title3{
    width: 20%;
}


</style>