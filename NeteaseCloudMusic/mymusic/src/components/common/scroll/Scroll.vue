<!--该组件用于封装scroll-->
<template>
<!--  ref/children-->
<!--  ref如果是绑定在组件中，那么通过this.$refs.refname获得的是一个组件对象-->
  <!--  ref如果是绑定在普通元素中，那么通过this.$refs.refname获得的是一个元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                scroll: {}
            }
        },
        mounted() {
            //创建BScroll对象
            //probeType决定是否监听 默认0：不监听；1、不实时监听；
            // 2：加实时监听，但不监听滚动;3、实时监听，并且监听因为惯性的滚动
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad: this.pullUpLoad,
            });
            //监听滚动位置
            if(this.probeType===2 || this.probeType===3){
                this.scroll.on('scroll',(position)=>{
                    this.$emit('scroll',position);
                    // console.log(position);
                })  ;
            }

            //监听上拉加载更多
            if(this.pullUpLoad){
                this.scroll.on('pullingUp',()=>{
                    // console.log('上拉加载');
                    //发出事件 在home.vue中实现
                    this.$emit('pullingUp');
                });
            }

            // console.log(this.scroll)
  //scrollerHeight：可滚动区域长度；
  // 该属性是根据BScroll的content中的子组件高度决定，
  // 但是刚开始计算scrollerHeight时，没有将图片计算在内，所以计算结果是错误的，
  // 后来图片加载进来之后需要新的高度，但但是刚开始计算scrollerHeight时没有更新，
  // 所以滚动会出问题，如何解决？
  // 监听每一张图片是否加载完成，只要加载完图片,就执行refresh()
 //怎么监听？1、原生监听img.onload=function(){}
  // 2、vue监听：@load="imageLoad"


        },
        methods:{
            //滚动到坐标(0,0)
            scrollTo(x,y,time=30){
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
                // this.scroll.scrollTo(x,y,time)
            },
            //上拉下载更多
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
                // this.scroll.finishPullUp()
            },
            //刷新
            refresh(){
                this.scroll && this.scroll.refresh && this.scroll.refresh();
                // console.log('---scroll刷新-----')
            },
            getScrollY(){
                return this.scroll?this.scroll.y:0;
            },
          scrollToElement(el, time) {
            var that = this;
            var pos;
            el = el.nodeType ? el : that.scroller.querySelector(el);
            if (!el) return;
            pos = that._offset(el);
            pos.left += that.wrapperOffsetLeft;
            pos.top += that.wrapperOffsetTop;
            pos.left = pos.left > 0 ?
                    0 : pos.left < that.maxScrollX ?
                            that.maxScrollX : pos.left;
            pos.top = pos.top > that.minScrollY ?
                    that.minScrollY : pos.top < that.maxScrollY ?
                            that.maxScrollY : pos.top;
            time = time === undefined ?
                    Math.max(Math.abs(pos.left) * 2, Math.abs(pos.top) * 2) : time;

            that.scrollTo(pos.left, pos.top, time);
          },

          _offset(el) {
            var left = -el.offsetLeft,
                    top = -el.offsetTop;

            while (el === el.offsetParent) {
              if (el === this.scroller) continue;//若为滑动块，则跳过
              left -= el.offsetLeft;
              top -= el.offsetTop;
            }

            if (el !== this.wrapper) {
              left *= this.scale;
              top *= this.scale;
            }

            return {left: left, top: top};
          }
          // scrollToElement() {
          //   this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
          // }

        }
    }
</script>

<style scoped>
</style>
