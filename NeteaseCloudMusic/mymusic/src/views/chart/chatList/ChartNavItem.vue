<template>
    <div class="chart-nav">
        <div class="left-chart">
            <!--            左边大图片-->
            <img :src="showImage" alt="" >
        </div>
        <div class="right-chart">
            <!--            云音乐飙升榜-->
            <div class="top-chart"> <span class="name">{{eachChartItem.name}}</span> </div><br>
            <div class='center-chart'>
                <span class="update">更新时间：{{new Date(eachChartItem.updateTime).toLocaleString()}}</span>
                <span class="update">{{eachChartItem.updateFrequency}}</span>
            </div>
            <div class='bottom-chart'>
                <div class="bottom-chart-item">
                    <img src="../../../assets/play.svg">
                    <span> 播放</span>
                    <div class="additem">+</div>
<!--                    <img   src="../../../assets/add.svg"  width="10px"  height="10px">-->
                </div>
                <div class="bottom-chart-item">
                    <img src="../../../assets/添加.svg">
                    <span>({{Math.floor(eachChartItem.playCount/1000)}})</span>
                </div>
                <div class="bottom-chart-item">
                    <img src="../../../assets/share.svg">
                    <span>({{ Math.floor( eachChartItem.subscribedCount/1000) }})</span>
                </div>
                <div class="bottom-chart-item">
                    <img src="../../../assets/下载.svg">
                    <span> 下载 </span>
                </div>
                <div class="bottom-chart-item">
                    <img src="../../../assets/评论.svg">
                    <span>({{ Math.floor( eachChartItem.subscribedCount/1000) }})</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    Date.prototype.toLocaleString = function() {
        return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate() + "/ " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
    };
    export default {
        name: "ChartNavItem",
        props:{
            eachChartItem:{
                type:Object,
                default(){
                    return []
                }
            },

        },
        computed:{
            showImage(){
                return this.eachChartItem.coverImgUrl;
            },
            //    转换时间格式
            transferTime(cTime){
                var jsonDate = new Date(parseInt(cTime));
                Date.prototype.format = function (format){
                    var  o = {
                        "y+": this.getFullYear(),
                        "M+": this.getMonth()+1,
                        "d+": this.getDate(),
                        "h+": this.getHours(),
                        "m+": this.getMinutes(),
                        "s+": this.getSeconds()
                    };

                    if(/(y+)/.test(format)){
                        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
                    }

                    for(var k in o){
                        if(new RegExp("("+k+")").test(format)){
                            format = format.replace(RegExp.$1, RegExp.$1.length == 1?o[k] : ("00" + o[k]).substr("" + o[k].length));
                        }
                    }
                    return format;
                };
                var newDate = jsonDate.format("yyyy-MM-dd hh:mm:ss");
                return newDate
            }

        },
    }
</script>

<style scoped>
    .chart-nav{
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        /*border: 1px solid black;*/
        margin-bottom:  10px ;
    }
    .left-chart{
        /*width: 40%;*/
        /*height: 100%;*/
        width: 145px;
        height:145px;
        margin-left: 8%;
        border: 1px solid #a8a8a8;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left-chart img{
        width: 140px;
        height:140px;
        border: 1px solid #a8a8a8;
    }
    .right-chart{
        width: 60%;
        height: 50%;
        margin-left: 5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }
    .top-chart ,.bottom-chart,.center-chart{
        width: auto;
    }
    .name{
        margin-left:10px ;
        font-size: 1.5rem;
    }
    .update{
        color: #3c3f41;
        font-size: 1rem;
        margin: 10px ;
    }
.bottom-chart{
    width: 80%;
    height: 1.5rem;
    margin-left:0.5rem ;
    /*background-color: #fff7e5;*/
    display: flex;
    justify-content: space-evenly;
    justify-items: center;
}
    .bottom-chart img{
        width: 0.8rem;
        height:  0.8rem;
    }
    .bottom-chart-item{
        width: 20%;
        height: 100%;
        font-size: 0.8rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid grey;
        box-shadow: 1px 1px 1px grey ;
        border-radius: 10%;
        margin:0.25rem;

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
    .bottom-chart-item:first-child{
        background-color: #3080cc;
        color: white;
    }
</style>