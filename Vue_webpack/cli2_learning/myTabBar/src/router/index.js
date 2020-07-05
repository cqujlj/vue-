///////配置路由相关信息

// 先导入路由
import vueRouter from 'vue-router'
import Vue from 'vue'
// import Home from "../views/common/Home";
// import common from '../components/common.vue'
// import about from '../components/about.vue'
// import user from '../components/user.vue'
//懒加载模式  将每个路由组件打包到对应的js文件中  等访问时再加载该路由资源
const Home=()=> import('../views/home/Home');
const Category=()=> import('../views/category/Category');
const Cart=()=> import('../views/cart/Cart');
const Profile=()=> import('../views/profile/Profile');

// 1、通过vue.ues（插件），安装插件
Vue.use(vueRouter);

// 2、创建vueRouter对象

const  routes=[
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
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router=new vueRouter({
  // 配置路径和组件之间的映射关系
  mode:'history',//将hash模式改成history模式
  routes
});


// 3、将router对象传入到vue实例中
export default router
