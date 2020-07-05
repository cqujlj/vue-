<template>
    <scroll class="currentSongList" ref="scroll">
        <div class="header_list">
            <span>播放列表({{this.$store.state.playList.length}})</span>
        </div>
        <div class="content_list" v-for="(item,index) in this.$store.state.playList">
            <div class="song_name"><span>{{item.name}}</span></div>
            <div class="song_singer"><span>{{item.singer}}</span></div>
            <div class="song_dt"><span>{{showTime(item.dt)}}</span></div>
        </div>
    </scroll>
</template>

<script>
    export default {
        name: "CurrentSongList",
        methods:{
            //时长
            showTime(time){
                var date = new Date(time); //获取一个时间对象 注意：如果是uinx时间戳记得乘于1000。比如php函数time()获得的时间戳就要乘于1000
                var m =date.getMinutes();
                var s= date.getSeconds();
                if (m <10 ){  m = "0" + m;  }
                if (s <10 ){  s = "0" + s;  }
                return  m + ":" +  s;
            },
        }
    }
</script>

<style scoped>
    .currentSongList{
        background-color: rgba(95, 94, 94, 0.6);
        width: 25rem;
        height: 30rem;
        color: white;
        font-size: 0.8rem;
        position: fixed;
        bottom: 4rem;
        right: 4rem;
        overflow: hidden;
    }
    .header_list{
        height: 2rem;
        line-height: 2rem;
        width: 100%;
        background-color: rgba(0,0,0,0.7);
        color: white;
    }
    .content_list{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        color: white;
        display: flex;
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
</style>