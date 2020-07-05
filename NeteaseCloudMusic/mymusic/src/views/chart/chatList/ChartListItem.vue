<template>
    <div class="chart-list-item">
        <div class="left-column">
            <img :src="showImage" alt=""  @load="imageLoad">
        </div>
        <div class="right-column">
            <div class="top"> <span class="price">{{chartItem.name}}</span> </div>
            <div class='bottom'>
                 <span class="price">{{chartItem.updateFrequency}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChartListItem",

        props:{
            chartItem:{
                type:Object,
                default(){
                    return []
                }
            },

        },
        computed:{
            showImage(){
                return this.chartItem.coverImgUrl;
            },

        },
        methods:{
            //监听图片是否加载成功  事件总线
            imageLoad(){
                //发射图片加载事件i
                this.$bus.$emit('itemImageLoad');
            },
        }
    }
</script>

<style scoped>
    .chart-list-item{
        width: 16rem;
        height: 4rem;
        display: flex;
        border-bottom: 0.5px solid #bfbfbf;
    }
    .chart-list-item:hover{
        background-color: rgb(255, 247, 229);
    }

    .left-column{
        width:30%;
        height:4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left-column img{
        width: 2.85rem;
        height: 2.85rem;
    }
    .right-column{
        width:auto;
        height: 4rem;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0.7rem;
       align-content: center;
    }
    .top ,.bottom{
        width: 100%;
        text-align: left;
        margin:  0.35rem 0;
    }

    span{
        font-size: 0.9rem;
    }

</style>