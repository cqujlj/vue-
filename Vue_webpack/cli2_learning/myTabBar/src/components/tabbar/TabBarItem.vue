<template>
  <div class="tab-bar-item"  @click="itemClick">
<!--    存放对应的图片和文字-->
    <div v-if="!isActive">  <slot name="item-icon"></slot> </div>
    <div v-else>  <slot name="icon-active"></slot> </div>
    <div :style="activeStyle"> <slot name="item-text"></slot>  </div>
    <!--    <img  src="../../assets/img/TabBar/common.png" alt="">-->
<!--    <div >首页</div>-->
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        // path由父组件传参过来
        props:{
            path:{
                type: String
            },
            activeColor:{
                type:String,
                default:'red',
            }
        },
        data(){
            return{
                // isActive:true  //写死了无法动态改变颜色
            }
        },

        computed:{
            // tabbar颜色动态控制
            isActive(){
                // /common-->item(/common)=true
                // /common-->item(/cart)=false
                // /common-->item(/profile)=false
                // /common-->item(/category)=false
                return this.$route.path.indexOf(this.path) !==-1
                    // indexOf没找到返回-1
                // !==-1表示找到  则为ture
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}
                // 注意  不能写成isActive()
            },
        },
        methods:{
            // 监听点击事件，监听到要跳转的地址，进行跳转
            itemClick(){
                console.log('itemClick')
                // 实现跳转
                this.$router.push(this.path)
            }

        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    /*去掉图片下方自动的3px空白*/
    vertical-align: middle;
    margin-bottom: 1px;
  }


</style>
