<template>
<div class="player">
<!--    第一部分 播放/暂停/下一曲/上一曲-->
    <div class="player_icons">
        <img class="last" src="../../../assets/music/last.svg" alt="" @click="prevSong">
        <!--        点击播放按钮-> 暂停-->
        <img v-if="playStatus" class="play_icon" src="../../../assets/music/play.svg" alt=""  @click="pause" >
<!--        点击暂停按钮-> 播放-->
        <img v-else class="play_icon" src="../../../assets/music/parse.svg" alt="" @click="play">
        <img class="next" src="../../../assets/music/next.svg" alt="" @click="nextSong">
    </div>
    <!-- 第二部分 进度条-->

    <div class="about_song">
        <img class="songIcon" :src="showSongIcon" alt="" >
        <p>{{this.$store.state.playContent.name || null}}</p>
        <p>{{this.$store.state.playContent.singer || null}}</p>
        <div class="progress" >
            <div id="bar">
                <div id="currentBar"></div>
            </div>
            <p>{{this.currentText}}</p>/<p> {{this.durationText}}</p>
        </div>
<!--    播放器-->
        <audio ref="audio" id="audio" autoplay ></audio>
        <!-- 播放模式：loopStyle: "list" //not:单曲播放 list:列表循环 single:单曲循环 random:随机循环-->
        <img  class="play_mode" v-if = "loopStyle === 'not' "  @click="listLoop"  src="../../../assets/music/aSong.svg">
        <img  class="play_mode" v-else-if = "loopStyle === 'single' " @click="notLoop" src="../../../assets/music/songCycle.svg">
        <img  class="play_mode" v-else-if = "loopStyle === 'random' " @click="singleLoop" src="../../../assets/music/random.svg">
        <img  class="play_mode" v-else-if = "loopStyle === 'list' " @click="randomLoop" src="../../../assets/music/listCycle.svg">
        <img class="share" src="../../../assets/music/share.svg" alt="">
        <img class="load" src="../../../assets/music/load.svg" alt="">
        <img class="list_logo" src="../../../assets/music/songList.svg" alt="" @click="showList">
    </div>

<!--    歌单-->
    <div class="currentSongList"  v-show="isShowList" >
        <div class="header_list">
            <span>播放列表({{currentList.length}})</span>
            <div class="close_list" @click="showList">x</div>
        </div>
        <scroll>
            <div class="content_list"
                 v-for="item in currentList "
                 :class="{playStyle:item.id === currentId}">
                <div class="aSong" @click="cutSong(item)">
                    <div class="song_name"><span>{{item.name}}</span></div>
                    <div class="song_singer"><span>{{item.singer}}</span></div>
                    <div class="song_dt"><span>{{showTime(item.dt)}}</span></div>
                </div>
            </div>
        </scroll>
    </div>

<!--歌词滚动-->
<!--    待解决问题：歌词无法实时滚动-->
        <scroll v-show="isShowList"
                ref="scroll"
                class="lyric-wrapper"
                 :probe-type="3"
                 :data="currentLyric && currentLyric.lines">
            <div class="lyric">
                <p v-for="(line,index) in currentLyric.lines" ref="lyricLine"
                   :class="{'current':currentLineNum === index}"
                   class="text">{{line.txt}}</p>
            </div>
        </scroll>

</div>
</template>
<style scoped>
    .player{
        width: 100vw;
        height:4rem;
        background-color: rgba(19, 19, 19, 0.9);
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
    }
    .player_icons{
        height: 100%;
        width: 7rem;
        /*background-color: #b67b7b;*/
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about_song{
        height: 100%;
        /*background-color: #ac6060;*/
        display: flex;
        align-items: center;
        color: white;
        justify-content: flex-start;
    }
    .last,.next{
        width: 1.6rem;
        height: 1.6rem;
        padding: 0.3rem;
    }
    .last:hover, .next:hover{
        cursor:pointer
    }
    .play_icon{
        width: 2rem;
        height: 2rem;
        padding: 0.3rem;
    }
    .play_icon:hover{
        cursor:pointer
    }
    .songIcon{
        width: 1.6rem;
        height: 1.6rem;
        padding: 0.3rem;
        margin-left: 1rem;
    }
    .songIcon:hover{
        cursor:pointer
    }
    .about_song p{
        color: white;
        font-size: 0.8rem;
        padding: 0.2rem;
    }
    .play_mode{
        width: 1.6rem;
        height: 1.6rem;
        padding: 0.3rem;
    }
    .play_mode:hover{
        cursor:pointer;
    }
    .progress{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .progress p{
        color: white;
        font-size: 0.8rem;
        margin: 0 0.5rem;
    }
    #bar{
        height: 6px;
        width: 30vw;
        background-color: #5f5e5e;
    }
    #currentBar{
        height: 6px;
        background-color: #fff;
    }
    .share,.load,.list_logo{
        width: 1.6rem;
        height: 1.6rem;
        padding: 0.3rem;
    }
    .share:hover,.load:hover,.list_logo:hover{
        cursor: pointer;
    }
    /*播放列表样式*/
    .currentSongList{
        background-color: rgba(95, 94, 94, 0.6);
        width: 25rem;
        height: 30rem;
        /*color: white;*/
        font-size: 0.8rem;
        position: fixed;
        bottom: 4rem;
        right: 0rem;
        overflow: hidden;
        box-shadow:  1px 1px 1px  grey;
        /*border-radius: 1%;*/
    }
    .header_list{
        height: 2rem;
        width: 100%;
        background-color: rgba(95, 94, 94, 0.7);
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .close_list{
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 1.2rem;
        text-align: center;
        color: white;
        margin-right: 0.3rem;
    }
    .close_list:hover{
        cursor:pointer
    }
    .content_list{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        color: #dadada;
    }
    .aSong{
        display: flex;
        /*color: #e0dede;*/
    }
    .playStyle{
        color: white;
    }
    .aSong:hover{
         color: white;
         cursor:pointer
     }
    .aSong:active{
        color: white;
    }
    .song_name{
        width: 64%;
        text-align: left;
    }
    .song_singer{
        width: 18%;
        text-align: left;
    }
    .song_dt{
        width: 18%;
        text-align: left;
    }
    span{
        margin-left: 0.5rem;
    }

    /*歌词部分样式*/
    .lyric-wrapper{
        background-color: rgba(95, 94, 94, 0.6);
        width: 25rem;
        height: 20rem;
        color: white;
        font-size: 0.8rem;
        position: fixed;
        bottom: 4rem;
        right: 25rem;
        overflow: hidden;
        box-shadow:  1px 1px 1px  grey;
        /*border-radius: 1%;*/
    }
    .hear_lyric{
        width: 100%;
        height: 1.5rem;
        background-color: #5f5e5e;
    }
   .close_lyric{
       width: 1rem;
       height: 1rem;
       line-height: 1rem;
       font-size: 1rem;
       text-align: center;
       color: white;
       margin-right: 0.3rem;
       margin-top: 0.1rem;
       float: right;
    }
    .close_lyric:hover{
        cursor:pointer
    }
</style>
<script>
    import Unit from "../../unit/Unit";
    import { Base64 } from 'js-base64';
    import Lyric from "lyric-parser";
    import axios from 'axios'
    import Scroll from "../scroll/Scroll";

    export default {
        name: "MyPlayer",
        components: {
            Scroll
        },
        data() {
            return {
                playStatus: false, //播放状态，用来控制播放、暂停按钮的显示
                Timer: "", //定时器，我们需要实时监听到歌曲的播放进度
                currentId: 0, //当前播放歌曲的id
                currentBar: 0, //进度条长度，默认为0，根据歌曲进度同步更新
                currentText: "00:00", //进度条旁边的播放时间，同样要实时更新
                durationText: "00:00", //当前歌曲的播放时长
                listShow: false,  //控制播放列表的显示
                loopStyle: "list", //not:单曲播放 list:列表循环 single:单曲循环 random:随机循环
                isShowList: false,  //控制歌单的显示
                isShowLyric: false, //控制歌词的滚动显示
                currentLyric: "",   //当前的歌词
                currentLineNum: 0 ,//当前歌词所在行
                currentList:[],  //播放列表
            };
        },
        watch: {
            songContent() {
                console.log("数据发生变化", this.songContent);
                this.playSong(this.songContent); //传入当前播放歌曲对象
                var curList = JSON.parse(localStorage.getItem('playList'));
                this.currentList = curList;
            }
        },
        //从store中获取
        computed: {
            //当前播放信息
            songContent() {
                return this.$store.state.playContent;
            },
            //播放列表信息
            playList() {
                return this.$store.state.playList;
            },
            showSongIcon() {
                return this.$store.state.playContent.picUrl || null;
            },
        },
        methods: {
            //点击播放器内歌曲的图片，跳转到视频页面 待完成
            itemClick(){
                console.log("跳转到视频页面");
                console.log("点击的item的歌曲mv的id：",this.$store.state.playContent.mvId);
                this.$router.push("/video/" + this.$store.state.playContent.mvId);
            },
            showList() {
                this.isShowList = !this.isShowList;
            },
            showLyric() {
                this.isShowLyric = !this.isShowLyric;
                this.formatLyric(); //显示歌词
            },
            //时长
            showTime(time) {
                var date = new Date(time);
                //获取一个时间对象 注意：如果是uinx时间戳记得乘于1000。比如php函数time()获得的时间戳就要乘于1000
                var m = date.getMinutes();
                var s = date.getSeconds();
                if (m < 10) {
                    m = "0" + m;
                }
                if (s < 10) {
                    s = "0" + s;
                }
                return m + ":" + s;
            },
            //格式化播放时间
            formatTime(str) {
                var m = parseInt(str / 60);
                var s = parseInt(str % 60);
                if (m < 10) {
                    m = "0" + m;
                }
                if (s < 10) {
                    s = "0" + s;
                }
                return m + ":" + s;
            },
            //格式化歌词
            formatLyric() {
                let str = this.$store.state.playContent.lyric;
                this.currentLyric = str;
                // 如果有歌词
                if (this.currentLyric) {
                    // 新建Lyric-parser歌词对象
                    this.currentLyric = new Lyric(str, this.handleLyric);
                    // 如果当前歌曲为播放状态，调用歌词对象的播放方法，播放歌词（滚动需结合better-scroll）
                    if (this.playStatus) {
                        this.currentLyric.play()
                    }
                }
            },
            handleLyric({lineNum,txt}) {
                this.currentLineNum = lineNum;
                // 若当前行大于5,开始滚动,以保歌词显示于中间位置
                if (lineNum > 5) {
                    let lineEl = this.$refs.scroll[lineNum - 5];
                    // 结合better-scroll，滚动歌词
                    //该方法没起作用
                    this.$refs.scroll.scrollToElement(lineEl, 100)
                } else {
                    this.$refs.scroll.scrollTo(0, 0, 100)
                }
            },
            //设置定时器
            setTimer() {
                this.clearTimer(); //先清除上一个定时器
                this.Timer = setInterval(this.updateCurrent, 1000);
            },
            //清除定时器
            clearTimer() {
                clearInterval(this.Timer);
                this.Timer = "";
            },
            //更新进度条
            updateCurrent() {
                this.currentBar === 100 ?
                    (this.clearTimer(), this.loopStyle === "not" ?
                            this.notLoop() : this.loopStyle === "list" ?
                                this.listLoop() : this.loopStyle === "single" ?
                                    this.singleLoop() : this.randomLoop()
                    ) : (this.currentBar = (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100);//播放进度
                //播放时间 formatTime()是对播放时间进行一个格式化
                this.currentText = this.formatTime(this.$refs.audio.currentTime);
                this.$store.commit("setCurrent", this.$refs.audio.currentTime);
                //进度条 只改变路程和速度
                var all_time = parseInt(this.$refs.audio.duration);
                //时间 进度总长度
                var now_time = parseInt(this.$refs.audio.currentTime);
                //    速度 每秒走的进度
                var music_frame = 500;
                //  路程 改变后的进度总长度
                document.getElementById("bar").style.width = music_frame + 'px';
                //    限制路程
                document.getElementById("currentBar").style.width = now_time * music_frame / all_time + 'px';
            },
            //初始化播放歌曲
            playSong(obj) {
                console.log("初始化播放歌曲");
                this.formatLyric();
                // obj
                // dt: (...)
                // id: (...)
                // name: (...)
                // picUrl: (...)
                // singer: (...)
                // songUrl:(...)
                this.currentId = obj.id;
                var dt = this.showTime(obj.dt);
                this.durationText = dt;
                this.playStatus = true;
                this.currentText = "00:00";
                this.currentBar = 0;
                this.$refs.audio.src = obj.songUrl;
                this.setTimer();//设置定时器

            },
            //获取歌曲资源并播放
            getSong(url) {
                axios.get(url)
                    .then(function (res) {
                            console.log("get url:", res);
                            this.$refs.audio.src = res.data.data[0].url;
                            this.clearTimer();//设置定时器
                        }
                    ).catch(function (err) {
                    console.log(err);
                });
            },
            //点击播放
            play() {
                console.log("点击播放");
                // //先判断歌曲是否播放完成了，如果是则重新播放，否则继续
                this.$refs.audio.ended ?
                    this.playSong(this.songContent) : this.$refs.audio.play();
                this.setTimer();
                let index = this.playList.indexOf(this.songContent);
                this.$store.commit("setContent", this.playList[index]); //更新store
                this.playStatus = true; //改变播放状态主要是为了隐藏播放按钮
            },
            //点击暂停
            pause() {
                console.log("点击暂停");
                this.playStatus = false;
                this.$refs.audio.pause();
                this.clearTimer(); //暂停时需要清除计时器，直到下次播放
            },
            //在列表上点击播放歌曲
            cutSong(obj) {
                obj === this.songContent ?
                    this.play() : this.$store.commit("setContent", obj);
            },
            // loopStyle: "list" //not:单曲播放 list:列表循环 single:单曲循环 random:随机循环
            //单曲播放
            notLoop() {
                console.log("单曲播放");
                this.loopStyle = "not";
                this.playStatus = false;
                this.clearTimer();
            },
            //列表循环
            listLoop() {
                console.log("列表循环");
                this.loopStyle = "list";
                let index = this.playList.indexOf(this.songContent);
                let length = this.playList.length;
                index === length - 1 ? index = 0 : index++; //如果是最后一首，就从头再来
                this.$store.commit("setContent", this.playList[index]); //更新store
            },
            //单曲循环
            singleLoop() {
                console.log("单曲循环");
                this.loopStyle = "single";
                this.play();  //单曲循环可以直接调用我们前面的play()
            },
            //随机播放
            randomLoop() {
                console.log("随机播放");
                this.loopStyle = "random";
                //随机播放有两种实现思路
                //第一种是直接将播放列表打乱，再按打乱后的顺序进行顺序切换
                //第二种是不改动播放列表顺序，通过随机数进行下一首的切换
                //这里使用的是第二种
                let length = this.playList.length;
                let index = this.playList.indexOf(this.songContent);
                let random = parseInt(Math.random() * this.playList.length);
                while (index === random) {
                    //这里主要是进行一个过滤，如果随机到的歌曲还是当前歌曲，则再进行一次随机
                    random = parseInt(Math.random() * this.playList.length);
                }
                this.$store.commit("setContent", this.playList[random]);
            },
            //上一首
            prevSong() {
                console.log("上一首");
                //暂停当前歌曲
                let index = this.playList.indexOf(this.songContent);
                let length = this.playList.length;
                index === 0 ? index = length - 1 : index--;
                this.$store.commit("setContent", this.playList[index]);
            },
            //下一首
            nextSong() {
            console.log("下一首");
            //点击下一首时，主要判断当前循环方式是不是随机，如果不是可以直接调用列表循环方式切换
            this.loopStyle === "random" ? this.randomLoop() : this.listLoop()
        },
        },
    }
</script>

