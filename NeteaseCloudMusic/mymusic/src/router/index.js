import Vue from "vue";
import VueRouter from "vue-router";

//懒加载 要进行路由跳转的页面
const Home=()=> import('../views/home/Home');
const Profile=()=>import('../views/profile/Profile');
const Chart=()=> import('../views/chart/Chart');
const Detail=()=> import('../views/detail/Detail');
const Video=()=> import('../views/video/Video');
const Recommend=()=> import('../views/recommend/Recommend');
//安装插件
Vue.use(VueRouter);
//创建映射关系
const routes=[
  {
    path:'',
    redirect:'/home'
    //重定向  默认网页打开时打开默认的路径
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/video/:id',
    component: Video
  },
  {
    path: '/recommend',
    component: Recommend
  },

];
const  router = new VueRouter({
  mode:'history',
  routes
});

//导出
export  default router;