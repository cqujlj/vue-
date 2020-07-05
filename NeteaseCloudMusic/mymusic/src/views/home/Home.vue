<template>
    <scroll class="home" ref="scroll">
        <div class="content">
<!--            左边-->
            <div class="left">
                <div class="banners">
                    <home-swiper :banners="banners"></home-swiper>
                </div>
                <song-list :songs="songs" ></song-list>
<!--  新碟上架-->
                <new-song-list :newsongs="newsongs"></new-song-list>
                <music-chart :chart="chart.slice(0,8)"></music-chart>
            </div>
<!--            右边-->
            <div class="right">
                <div class="home_rt">
                    <img src="../../assets/app.jpg">
                </div>
<!--                歌手信息 暂时没做-->
                    <singer-list :singer-list="singers.slice(0,8)"></singer-list>
<!--                电台信息 暂未完成-->
                    <anchor-list :anchor-list="anchors.slice(0,8)"></anchor-list>
            </div>
        </div>
    </scroll>


</template>

<script>
    import {getHomeBannersData,
            getTodayPlayList,
            getNewSongList,
            getChartDetail,
            getSinger,
            getAnchor} from "../../request/homeRquest";
    import HomeSwiper from "./homeComponents/HomeSwiper";
    import ContentDesign from "../../components/common/ContentDesign";
    import SongList from "../../components/common/songlist/SongList";
    import NewSongList from "../../components/common/songlist/NewSongList";
    import MusicChart from "../../components/common/songlist/MusicChart";
    import SingerList from "../../components/common/singerList/SingerList";
    import AnchorList from "../../components/common/singerList/AnchorList";
    import Scroll from "../../components/common/scroll/Scroll";
    export default {
        name: "Home",
        components:{
            HomeSwiper,
            ContentDesign,
            SongList,
            NewSongList,
            MusicChart,
            SingerList,
            AnchorList,
            Scroll,
        },
        data(){
            return{
                //存储请求来的数据
                banners:[],
                songs:[],
                newsongs:[],
                chart:[],
                singers:[],
                anchors:[],
                isLogin:[],
            }
        },
        created() {
            console.log("home created");
            //调用方法获取轮播图数据
            this.getBanners();
            this.getTodayList();
            this.getNewSongList();
            this.getChartList();
            this.getSinger();
            this.getAnchor();

        },
        methods: {
            getBanners() {
                getHomeBannersData().then(res => {
                    // 保存数据/如果不保存,数据会被回收
                    var that = this;
                    that.banners = res.banners;
                    // console.log('轮播图数据：',res.banners);
                });
            },

                getTodayList(){
                    getTodayPlayList().then(res=>{
                        var that = this;
                        that.songs = res.result;
                        console.log("今日推荐歌单：",res.result);
                    });
                },
            getNewSongList(){
                getNewSongList().then(res=>{
                    // console.log(res);
                    var that = this;
                    that.newsongs = res.albums;
                    // console.log("新碟:",res.albums);
                });
            },

            getChartList(){
                getChartDetail().then(res=>{
                    // console.log("今日榜单:",res);
                    var that = this;
                    that.chart = res.list;
                    // console.log("今日榜单:",res.list);
                });
            },
            getSinger(){
                getSinger(0,10).then(res=>{
                    // console.log("歌手列表：:",res);
                    var that = this;
                    that.singers = res.artists;
                });
            },
            getAnchor(){
                getAnchor(6).then(res=>{
                    // console.log("电台主播：",res);
                    var that = this;
                    that.anchors = res.data.list;
                    // console.log("歌手列表：:",res);
                });
            }

        },




    }
</script>

<style scoped>
.home{
    /*如果不设置高度，则返回顶部不起作用*/
    height: calc(100% - 4rem);
    overflow: hidden;
    margin-top: 4rem;
    background-color: #dadada;
}
.content{
    width: 72rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #fff;
}
.left{
    width: 56rem;
    /*background-color: #7d75ff;*/
}
.right{
    width: 16rem;
}
.banners{
width: 56rem;
background-color: rgba(200,255,250,0.3);

}
.home_rt{
    width: 100%;
    /*height: 20vw;*/
}
.home_rt img{
    width: 100%;
    height: 19.35rem;
}

</style>