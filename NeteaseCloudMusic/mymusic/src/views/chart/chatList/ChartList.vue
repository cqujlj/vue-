<template>
    <div id="chat-list">
        <!--  存放tab-bar-item-->
        <chart-list-item
                v-for = "(item , index) in charts"
                :chartItem ="item"
                @click.native="itemClick(index)"
                v-bind:class="{activeStyle:index === currentIndex}"
              />
<!--        chart是父组件传来的数据  :chartItem ="item" 给子组件发数据 -->
    </div>
</template>

<script>
    import ChartListItem from "./ChartListItem";
    export default {
        name: "ChartList",
        components:{
            ChartListItem
        },
        data(){
            return {
                currentIndex:0
            }
        },
        props:{
            charts:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            // itemClick(index){
            //     console.log("我点击了item");
            //     this.currentIndex = index;
            // }
            itemClick(index){
                // //点击该item，说明激活它，并且发送index，请求对应数据
                this.currentIndex = index;
                this.$emit('itemClick',index);
                // 发射点击事件出去，告诉数据总线，我点击了这个index
                // this.$bus.$emit('chartListItemClick',index);
            }
        },

    }
</script>

<style scoped>
    #chat-list{
        /*display: flex;    !*水平方向均匀分布*!*/
        /*增加阴影*/
        box-shadow: 0px -3px 1px rgba(140, 140, 140, 0.2);
        z-index:9;
        /*  方法：设置div样式 z-index:auto*/
        /*  auto可定义为一个值(整数数字)，越大代表越置前，如可定义为： z-index:999。*/
        /*前提是div是定位元素。*/
    }
    .activeStyle{
        background-color: #e5dece;
    }
</style>