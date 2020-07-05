<template>
    <scroll class="recommend" ref="scroll" :pull-up-load="true" :probe-type="3">
        <div class="recommend_content">
<!--            头部-->
            <div class="recommend_title">
                <div class="recommend_class">
                    <p class="all_recommend" >全部</p>
                    <button class="recommend_list_class" @click="showClass">选择分类</button>
<!---------------分类列表-->
                    <div v-show="isShowClass" class="recommend_class_page">
                        <div class="allStyle">
                            <button >全部风格</button>
                        </div>
                        <div class="category">
                            <table border="0" cellpadding="8">
                                <tr >
                                    <td class="category_title">
                                        <img style="height: 1.5rem;width: 1.5rem" src="../../assets/logo.png">
                                        <span>{{category.categories[0]}}</span>
                                    </td>
                                    <td class="category_content">
                                        <ul id="category0">
                                            <!--   利用读取出来的数据 使用dom往对应表格内添加li-->
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="category_title">
                                        <img style="height: 1.5rem;width: 1.5rem" src="../../assets/logo.png">
                                        <span>{{category.categories[1]}}</span>
                                    </td>
                                    <td class="category_content">
                                        <ul id="category1"></ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="category_title">
                                        <img style="height: 1.5rem;width: 1.5rem" src="../../assets/logo.png">
                                        <span>{{category.categories[2]}}</span>
                                    </td>
                                    <td class="category_content">
                                        <ul id="category2"></ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="category_title">
                                        <img style="height: 1.5rem;width: 1.5rem" src="../../assets/logo.png">
                                        <span>{{category.categories[3]}}</span>
                                    </td>
                                    <td class="category_content">
                                        <ul id="category3">2</ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="category_title">
                                        <img style="height: 1.5rem;width: 1.5rem" src="../../assets/logo.png">
                                        <span>{{category.categories[4]}}</span>
                                    </td>
                                    <td class="category_content">
                                        <ul id="category4"></ul>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="hot_new" @click="changeHot">
                    <span v-if="isHot === 'hot' " class="hot" >热门</span>
                    <span v-else class="new">最新</span>
                </div>
            </div>
<!--            列表-->
            <div class="recommend_list" >
                <div v-for="item in recommendList">
                    <song-list-item :songs-item="item"></song-list-item>
                </div>
            </div>

        <!--分页-->
        <div class="page-bar">
            <div class="start_page" @click="startClick">第一页</div>
                <div v-if="cur > 1" class="last_page" v-on:click="lastPageClick">上一页</div>
                <div v-if="cur === 1" class="last_page">上一页</div>

            <div v-for="index in allPage">
                <div class="CurrentPage" :class="{activeStyle : cur === index}"
                     v-show="index - cur < 6 && index - cur >= -2 "
                     @click="cur = index , CurrentPageClick()" >{{index}}</div>

            </div>

                <div v-if="cur!== allPage" class="next_page" v-on:click="nextPageClick">下一页</div>
                <div v-if="cur === allPage" class="next_page">下一页</div>
            <div class="end_page" @click="endClick">最后1页</div>
                <div class="page_span"><span>第<i>{{cur}}</i>页</span>/<span>共<i>{{allPage}}</i>页</span></div>

         </div>
        </div>
    </scroll>
</template>
<style scoped>
    .recommend{
        /*如果不设置高度，则返回顶部不起作用*/
        height: calc(100% - 4rem);
        overflow: hidden;
        margin-top:4rem ;
        background-color: #dadada;
    }
    .recommend_content{
        width: 72rem;
        margin: 0 auto;
        background-color: #fff;

    }
    .recommend_title{
        width: 70rem;
        height: 3rem;
        border-bottom: 2px solid #ab0e0e;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin : 1rem auto;
    }
    .recommend_class{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        margin-left: 1rem;
        /*background-color: #a27fff;*/
    }
    .all_recommend{
        font-size: 1.4rem;
        color: black;
    }
    .recommend_list_class{
        width: 6rem;
        height: 1.8rem;
        margin-left: 0.5rem;
        font-size: 1rem;
        color: black;
    }
    .hot_new{
        width: 3rem;
        height: 1.6rem;
        line-height: 1.5rem;
        background-color: #ab0e0e;
        border-radius: 1%;
        box-shadow:  1px 1px 1px #802726;
        color: white;
        margin-right: 1rem;
    }
    .hot_new:hover{
        cursor: pointer;
    }
    .recommend_list{
        width: 70rem;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-evenly;
        margin: auto;
    }
    .page-bar{
        width: 45rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin:1rem auto;
    }
    .page-bar i{
        font-style:normal;
        color: #d44950;
        margin: 0px 0.2rem;
        font-size: 0.8rem;
    }
    .CurrentPage{
        width: 2rem;
    }
    .next_page, .last_page{
        width: 4rem;
    }
    .CurrentPage,.next_page, .last_page, .end_page, .start_page{
        height: 2rem;
        line-height: 2rem;
        font-size: 1rem;
        /*color: gray;*/
        box-shadow: 1px 1px 1px  1px grey;
        margin: 0.2rem;

    }
    .page_span{
        height: 2rem;
        line-height: 2rem;
        font-size: 1rem;
        color: gray;
        /*box-shadow: 1px 1px 1px grey;*/
        margin: 0.2rem;
    }
    .CurrentPage:hover,.next_page:hover, .last_page:hover{
        cursor: pointer;
        color: white;
        background-color: #898888;
    }
    . activeStyle{
        color: white;
        background-color: #898888;
    }
    .recommend_class_page{
        width: 45rem;
        box-shadow: 2px 2px 2px 2px rgba(161, 161, 161, 0.5);
        position: relative;
        top:18rem;
        left: -9rem;
        background-color: #f4f3f3;
        z-index: 2;
    }
    .recommend_class_page:before{
        position: absolute;
        top: -0.6rem;
        width: 0;
        height: 0;
        left: 10%;
        margin-left: -1rem;
        content: " ";
        border-bottom: 0.7rem solid #dfdddd;
        border-left: 0.7rem solid transparent ;
        border-right:  0.7rem solid transparent ;

    }
    .allStyle{
        width: 100%;
        height: 3rem;
        border-bottom: 1px solid #d4d2d2;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .allStyle button{
        font-size: 1rem;
        margin-left: 1rem;
    }
    .category{
        width: 100%;
        /*height:20rem;*/
    }
    table{
        width: 100%;
        margin: auto;

    }
    tr, td{
        text-align: center;
        font-size: 0.8rem;
        color: grey;
        align-items: center;
    }
    tr{
        padding: 1rem;
    }
    .category_title{
        width: 15%;
    }
    .category_title span{
        font-size: 1rem;
    }
    .category_content{
        width: 85%;
    }
    ul{
        list-style:none;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
    }
    li:hover{
        cursor: pointer;
    }



</style>
<script>
    import {getRecommendList,getRecommendStyle} from "../../request/recommend";
    import Scroll from "../../components/common/scroll/Scroll";
    import SongListItem from "../../components/common/songlist/SongListItem";
    export default {
        name: "Recommend",
        components:{
            Scroll,
            SongListItem,
        },
        data(){
            return{
                recommendList:[],
                isHot:"hot",
                pageNum:40,  //每页显示多少条
                allPage:1, //总页数
                cur: 1,//当前页码
                offset:0,//当前请求的数据的起始位置
                cat:"全部", //当前分类的类型
                isShowClass:false,  //是否显示分类页面
                category:{},
                subCategory:[],
                }
        },
        created() {
            getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                console.log("网页精选歌单：",res);
                let _this = this;
                _this.recommendList = res.playlists;
                _this.allPage = Math.ceil( res.total / this.pageNum );
            }).catch(err =>{
                console.log(err)
            });

            getRecommendStyle().then(res =>{
                console.log("歌单分类：",res);
                let _this = this;
                _this.category = res;
                let subCategory = res.sub;
                setTimeout(()=>
                {
                    for (let i = 0; i <subCategory.length; i++){
                        if (subCategory[i].category === 0){
                            var category0 = document.getElementById('category0');
                            //2 创建文本节点
                            let textNode=document.createTextNode(subCategory[i].name);
                            let liEle=document.createElement('li');
                            liEle.style.height = "1rem";
                            liEle.style.marginLeft = "1rem";
                            liEle.style.marginTop = "1rem";
                            liEle.appendChild(textNode);
                            category0.appendChild(liEle);
                            var liEles = document.getElementsByTagName("li");
                            for ( let i=0; i<liEles.length; i++){
                                liEles[i].addEventListener("click", function()
                                {
                                    console.log("My content：",this.innerText);
                                    // this.cat= this.innerText;
                                    // this.isShowClass = !this.isShowClass;
                                    // getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                                    //     let _this = this;
                                    //     _this.recommendList = res.playlists;
                                    //     console.log("点击li之后：", _this.recommendList);
                                    //     _this.allPage = Math.ceil( res.total / this.pageNum );
                                    // }).catch(err =>{
                                    //     console.log(err)
                                    // });
                                });
                            }
                        }
                        else  if (subCategory[i].category === 1){
                            var category1 = document.getElementById('category1');
                            let textNode=document.createTextNode(subCategory[i].name);
                            let liEle=document.createElement('li');
                            liEle.style.height = "1rem";
                            liEle.style.marginLeft = "1rem";
                            liEle.style.marginTop = "1rem";
                            liEle.appendChild(textNode);
                            category1.appendChild(liEle);
                        }
                        else  if (subCategory[i].category === 2){
                            var category2 = document.getElementById('category2');
                            let textNode=document.createTextNode(subCategory[i].name);
                            let liEle=document.createElement('li');
                            liEle.style.height = "1rem";
                            liEle.style.marginLeft = "1rem";
                            liEle.style.marginTop = "1rem";
                            liEle.appendChild(textNode);
                            category2.appendChild(liEle);
                        }
                        else  if (subCategory[i].category === 3){
                            var category3 = document.getElementById('category3');
                            let textNode=document.createTextNode(subCategory[i].name);
                            let liEle=document.createElement('li');
                            liEle.style.height = "1rem";
                            liEle.style.marginLeft = "1rem";
                            liEle.style.marginTop = "1rem";
                            liEle.appendChild(textNode);
                            category3.appendChild(liEle);
                        }
                        else  if (subCategory[i].category === 4){
                            var category4 = document.getElementById('category4');
                            //2 创建文本节点
                            let textNode=document.createTextNode(subCategory[i].name);
                            let liEle=document.createElement('li');
                            liEle.style.height = "1rem";
                            liEle.style.marginLeft = "1rem";
                            liEle.style.marginTop = "1rem";
                            liEle.appendChild(textNode);
                            category4.appendChild(liEle);
                        }
                    }
                });
            });
            // this.changeCat();
            },

        methods:{
            changeCat(){
                this.$nextTick(
                    function () {

                    }
                )
            },

            showClass(){
                this.isShowClass = !this.isShowClass;
            },
            //根据点击页数请求数据
            changeHot(){
                if (this.isHot === "hot"){
                    this.isHot = "new";
                    getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                        let _this = this;
                        _this.recommendList = res.playlists;
                        _this.allPage = Math.ceil( res.total / this.pageNum );
                    }).catch(err =>{
                        console.log(err)
                    });
                }else if (this.isHot === "new"){
                        this.isHot = "hot";
                    getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                        let _this = this;
                        _this.recommendList = res.playlists;
                        _this.allPage = Math.ceil( res.total / this.pageNum );
                    }).catch(err =>{
                        console.log(err)
                    });
                    }
            },
            //点击第一页
            startClick(){
                if (this.cur === 1) return;
                this.$refs.scroll.scrollTo(0,0); //回到顶部失败
                this.cur = 1;
                this.offset =  0;
                getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                    let _this = this;
                    _this.recommendList = res.playlists;
                    _this.allPage = Math.ceil( res.total / this.pageNum );
                }).catch(err =>{
                    console.log(err)
                });
            },
            //点击最后一页
            endClick(){
                if (this.cur === this.allPage) return;
                this.cur = this.allPage;
                this.offset =  this.pageNum * (this.allPage - 1);
                getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                    let _this = this;
                    _this.recommendList = res.playlists;
                    _this.allPage = Math.ceil( res.total / this.pageNum );
                }).catch(err =>{
                    console.log(err)
                });
                this.$refs.scroll.scrollTo(0,0,30);
            },
            // 点击上一页 cur--  offset-this.pageNum 请求新数据
            lastPageClick(){
                this.cur --;
                this.offset -=  this.pageNum;
                getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                    let _this = this;
                    _this.recommendList = res.playlists;
                    _this.allPage = Math.ceil( res.total / this.pageNum );
                }).catch(err =>{
                    console.log(err)
                });
            },
            //点击下一页 cur++ offset+this.pageNum 请求新数据
            nextPageClick(){
                this.cur ++;
                this.offset +=  this.pageNum;
                getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                    let _this = this;
                    _this.recommendList = res.playlists;
                    _this.allPage = Math.ceil( res.total / this.pageNum );
                }).catch(err =>{
                    console.log(err)
                });
            },
            //点击具体某个页面
            CurrentPageClick(){
                console.log("点击了",this.cur);
                this.offset =  this.cur *this.pageNum;
                getRecommendList(this.cat,this.pageNum,this.isHot,this.offset).then(res =>{
                    let _this = this;
                    _this.recommendList = res.playlists;
                    _this.allPage = Math.ceil( res.total / this.pageNum );
                }).catch(err =>{
                    console.log(err)
                });
            }
        }
    }
</script>

