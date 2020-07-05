<template>
    <div class="detail_nav">
        <div class="detail_nav_img">
            <img :src="showImg">
        </div>
        <div class="detail_nav_mess">
            <div class="list_name">
                <img src="../../../assets/listlogo.jpg">
                <p>{{detailNavMessage.name}}</p>
            </div>
            <div class="artist_mess">
                <img :src="showArtistImg">
<!--                -->
                <p>{{detailNavMessage.creator.nickname}}</p>
                <p>{{(new Date(detailNavMessage.createTime).toLocaleString())}} 创建</p>
            </div>
            <div class="song_mess">
                <div class="book-item">
                    <img src="../../../assets/play.svg">
                    <p>播放</p>
                    <p class="additem">+</p>
                </div>
                <div class="book-item">
                    <img src="../../../assets/collection.svg">
                    <p>收藏</p>
                </div>
                <div class="book-item">
                    <img src="../../../assets/share.svg">
                    <p>分享</p>
                </div>
                <div class="book-item">
                    <img src="../../../assets/下载.svg">
                    <p>下载</p>
                </div>
                <div class="book-item">
                    <img src="../../../assets/评论.svg">
                    <p>评论({{detailNavMessage.shareCount}})</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    Date.prototype.toLocaleString = function() {
        return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate();
    };

    export default {
        name: "DetailNav",
        props:{
            detailNavMessage:{
                type:Object,
               default(){
                    return {}
               }
            }
        },
        computed:{
            showImg(){
                return this.detailNavMessage.coverImgUrl;
            },
            showArtistImg(){
                return this.detailNavMessage.creator.avatarUrl;
            },
        },
        methods:{
            //日期
            // showTime(time){
            //     var date = new Date(time*1000); //获取一个时间对象 注意：如果是uinx时间戳记得乘于1000。比如php函数time()获得的时间戳就要乘于1000
            //     return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            //
            // }
        },
    }
</script>

<style scoped>

.detail_nav{
    display: flex;
    margin: 0 2rem;
}
.detail_nav_img{
    width: 12rem;
    height: 12rem;
    border: 1px solid grey;
    margin: 1rem 0;
}
.detail_nav_mess{
    height: 10rem;
    /*border: 1px solid grey;*/
    margin: 2rem;
}
.detail_nav_img img{
    width: 11.5rem;
    height:  11.5rem;
    border: 1px solid grey;
}
.list_name{
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
}
.list_name img{
    width: 4rem;
    height: 2rem;
}
.list_name p{
    font-size: 1.2rem;
    color: grey;
}
.artist_mess{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.artist_mess img{
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
}
.artist_mess p{
        font-size: 1rem;
        margin: 0.5rem;
        color: grey;
    }


.song_mess {
    width: auto;
    display: flex;
    flex-wrap: nowrap;
    margin-top: 1rem;
}


.book-item{
    width: auto;
    /*width: 4.8rem;*/
    height: 1.5rem;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    border: 1px solid grey;
    box-shadow: 1px 1px 1px grey ;
    border-radius: 5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.book-item:first-child{
    background-color: #3080cc;
    color: white;
}
.book-item img{
    width: 1.2rem;
    height:1.2rem;
    margin: 0.2rem;
}
.book-item p {
    font-size: 0.8rem;
    margin:  0.2rem;
    text-align: center;
}

.additem{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bolder;
    border-left: 1px solid grey;
}
</style>