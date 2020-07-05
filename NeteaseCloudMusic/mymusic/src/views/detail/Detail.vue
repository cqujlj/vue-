<template>
    <scroll class="detail"  ref="scroll">
        <div class="detail_content">
            <div class="detail_content_left">
                <detail-nav :detail-nav-message="bookListDetail"/>
                <detail-list
                        :detail-list-data="bookListDetail"
                        :songs-list-data="songList"/>
            </div>
            <div class="detail_content_right">
<!-- 右边显示当前歌单的推荐歌单-->
                <relate-play-list :related-play="relatePlayList"></relate-play-list>
            </div>
        </div>
    </scroll>

</template>

<script>
    import {getBookList,relatePlayList} from "../../request/detailRequest";
    import {getASong} from "../../request/chartRequest";
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailNav from "./detailComponents/DetailNav";
    import DetailList from "./detailComponents/DetailList";
   import RelatePlayList from "./detailComponents/RelatePlayList";
    export default {
        name: "Detail",
        components: {
            Scroll,
            DetailNav,
            DetailList,
            RelatePlayList,
        },
        data(){
            return{
                bookSongListId:null,
                bookListDetail:{},
                songList:[],
                relatePlayList:[],
            }
        },
        mounted(){
            this.$bus.$on('itemImageLoad',()=>{
                // console.log('detail刷新页面');
                const refresh=this.debounce(this.$refs.scroll.refresh,10000);
                refresh()
            })
        },
        created() {
            console.log("详情页建立");
            //1、保存传入的id
            //2、根据iid请求详情页的数据
            this.bookSongListId = this.$route.params.id;
            //获取歌单的信息
            getBookList(this.bookSongListId).then(res => {
                console.log(res);
                let that = this;
                that.bookListDetail = res.playlist;
                let data = res.privileges;
                for (let i = 0; i < data.length; i++) {
                    getASong(data[i].id).then(songRes => {
                        let thatSong = this;
                        thatSong.songList.push(songRes.songs);  //Array
                    });
                }
                // console.log("所有的歌曲", this.songList);
            });

        //获取相关的歌单
            relatePlayList(this.$route.params.id).then(res => {
                console.log("推荐的歌单信息：",res.playlists);
                let that = this;
                that.relatePlayList = res.playlists;
            }).catch( err =>{
                console.log(err)
            })
        },

        methods:{
            //定义防止刷新频繁的防抖函数，可优化性能
            debounce(func,delay){
                let timer = null;
                return function(...args){
                    if(timer) clearTimeout(timer);
                    timer=setTimeout(()=>{
                        func.apply(this,...args)
                    },delay)
                }
            },

        }

    }
</script>

<style scoped>
.detail{
    /*如果不设置高度，则返回顶部不起作用*/
    height: calc(100% - 4rem);
    overflow: hidden;
    margin-top:  4rem;
    background-color: #dadada;
}
.detail_content{
    box-sizing: border-box;
    width: 70rem;
    background-color: #fff;
    margin: auto;
    display: flex;
    border: 1px solid #dbdbdb;
}

.detail_content_left{
    box-sizing: border-box;
    width: 56rem;
    border-right: 1px solid #dbdbdb;

}
.detail_content_right{
    width: 14rem;
}
</style>