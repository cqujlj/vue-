<template>
    <div class="user_song_list">
        <p>我创建的歌单（{{owerSongList.length}}）</p>
        <div class="line"></div>
        <div class="my_song_list">
<!--            实现点击某一个歌单，跳转到歌单列表-->
        <song-list-item class="my_song_list_item"
                        v-for="(item, index) in owerSongList"
                        :songs-item="item"/>
        </div>
        </div>
</template>

<script>
    import SongListItem from "../../../components/common/songlist/SongListItem";
    export default {
        name: "MySongList",
        components:{
            SongListItem,
        },
        props:{
            owerSongList:{
                type:Array,
            default(){
                    return []
                }
            },
    }
    }
</script>

<style scoped>
.user_song_list{
    width: 60rem;
}
p{
    color: darkred;
    text-align: left;
    font-size: 1.5rem;
    margin-left: 1rem;
}
    .line{
        width: 100%;
        height: 3px;
        background-color: darkred;
    }
    .my_song_list{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 0.35rem;
    }
    .my_song_list_item{
        /*width: 10rem;*/
    }
</style>