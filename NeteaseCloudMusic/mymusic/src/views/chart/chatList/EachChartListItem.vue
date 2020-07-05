<template>
    <div class="each-chart-item"
         :class="{ activeHeight:index > 3, activeStyle:index % 2 === 0}">
        <div slot="item0" class="song0">
            <span>{{index}}</span>
            <img v-show="index %3 ===1" class="hot" src="../../../assets/hot.svg" alt="" >
            <img v-show="index %3 ===0" class="new" src="../../../assets/new.svg" alt="">
        </div>
        <div slot="item1" class="song1">
            <img  class="song-logo" v-show="index <= 2" :src="showImage" alt="">

            <!-- 点击该图标 获取歌曲id，请求url数据，并播放音乐-->
            <img  class="play-logo"
                  src="../../../assets/playsong.svg"
                  alt="" width="10px"  height="10px"
                  @click="playerClick">

            <a  class="song-link">{{songItem[0].name}}</a>
        </div>
        <div slot="item2" class="song2">
            <span class="time">{{showTime(songItem[0].dt)}}</span>
        </div>
        <div slot="item3" class="song3">
            <span><a>{{songItem[0].ar[0].name}}</a></span>
        </div>
    </div>
</template>
<script>
    import {playResource,playLyric} from "../../../request/detailRequest"
    export default {
        name: "EachChartListItem",
        data(){
            return{
                songUrl:"",
                playList: [],  //存储播放列表
                aSong:{
                    id: null,
                    name:"",
                    singer:"",
                    dt:"",
                    songUrl: "",
                    picUrl:"",
                    lyric:"",
                    mvId:"",
                },
            }
        },
        props:{
            songItem:{
                type:Array,
                default(){
                    return []
                }
            },
            index:{
                type:Number,
                default(){
                    return 0
                }
            },
        },
        computed:{
            showImage(){
                return this.songItem[0].al.picUrl ||  null;
            },
        },
        methods:{
            //判断一个数组内是否存在某个对象
            isHasObject(arr , obj){
                arr.forEach( (item,index) =>{
                    if (item.id === obj.id){
                        arr.splice(index, 1); //删除下标为index的元素
                    }
                });
                return arr;
            },
            //时长
            showTime(time){
                var m = 0;
                var s = 0;
                var date = new Date(time); //获取一个时间对象 注意：如果是uinx时间戳记得乘于1000。比如php函数time()获得的时间戳就要乘于1000
                m =date.getMinutes();
                s= date.getSeconds();
                if (m <10 ){  m = "0" + m;  }
                if (s <10 ){  s = "0" + s;  }
                return  m + ":" +  s;
            },

            playerClick(){
                console.log("播放的音乐是:",this.songItem[0].name);
                //将这首歌的一些信息提取出来
                var _this = this;
                _this.aSong.id = this.songItem[0].id;
                _this.aSong.singer = this.songItem[0].ar[0].name;//歌手名
                _this.aSong.name = this.songItem[0].name;  //歌曲名
                _this.aSong.picUrl = this.songItem[0].al.picUrl;
                _this.aSong.dt = this.songItem[0].dt;
                _this.aSong.mvId = this.songItem[0].mv;
                //获取歌曲url
                playResource(this.songItem[0].id).then(res=>{
                    if (res.data[0].url !== null){
                        var that = this;
                        that.aSong.songUrl = res.data[0].url;
                        //获取歌曲歌词
                        playLyric(this.songItem[0].id).then(lyric =>{
                            // console.log("这首歌的歌词：",lyric.lrc.lyric);
                            var _that = this;
                            //将歌词解析为可以识别的字符串
                            _that.aSong.lyric = lyric.lrc.lyric;
                            //如果放在外部，会因为异步请求的原因，导致songUrl为空
                            //在localStorage中存入一个playList
                            //然后往playList添加这首歌
                            //读出内容
                            var curList = JSON.parse(window.localStorage.getItem('playList'));
                            console.log("当前添加之前：", curList );  //取出的是一个Array
                            //往'playList'添加歌曲
                            //首先判断数组里有没有这个对象
                            // 如果有，先删除
                            curList = this.isHasObject(curList,this.aSong);
                            curList.unshift(this.aSong);
                            window.localStorage.setItem('playList',JSON.stringify(curList));//存值
                            console.log("当前的歌单localStorage：", JSON.parse(window.localStorage.getItem('playList')) );  //取出的是一个Array
                            this.$store.commit("addSong", JSON.parse(window.localStorage.getItem('playList'))[0]); //点击该项，把歌曲信息存入vuex
                            this.$store.commit("setContent", JSON.parse(window.localStorage.getItem('playList'))[0]);
                        });
                    }else{
                        alert("您没有权限,请开通会员");
                    }
                });


            },
        }
    }
</script>

<style scoped>
    .each-chart-item{
        background-color: #f5f5f5;
        width: 100%;
        height: 2.8rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    span{
        font-size: 0.9rem;
        margin-left: 1rem;
    }
    .song0{
        width: 15%;
    }
    .song1{
        width: 50%;
    }
    .song2{
        width: 15%;
    }
    .song3{
        width: 20%;
    }
    .song0 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .song1,.song2, .song3{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.9rem;
    }
    .hot,.new{
        width:2rem;
        height: 2rem;
        margin-left: 0.5rem;
    }
    .song-logo{
        width: 2rem;
        height: 2rem;
        margin:0 0.5rem;
    }
    .play-logo{
        width: 1rem;
        height: 1rem;
        margin:0 0.5rem;
    }
    .play-logo:hover{
        cursor: pointer;
    }

    .activeStyle{
        background-color: #ffffff;
    }
    .activeHeight{
        height: 3.2rem;
    }

</style>