///////配置路由相关信息

// 先导入路由
import vueRouter from 'vue-router'
import Vue from 'vue'
// import common from '../components/common.vue'
// import about from '../components/about.vue'
// import user from '../components/user.vue'
//懒加载模式  将每个路由组件打包到对应的js文件中  等访问时再加载该路由资源
const home=()=> import('../components/home.vue')
const about=()=> import('../components/about.vue')
const user=()=> import('../components/user.vue')
const Profile=()=> import('../components/Profile.vue')
const homeNews=()=> import('../components/homeNews.vue')
const homeMessage=()=> import('../components/homeMessage.vue')


// 1、通过vue.ues（插件），安装插件
Vue.use(vueRouter)

// 2、创建vueRouter对象

const  routes=[
  {
    path:'',
    redirect:'/common'
    //重定向  默认网页打开时打开默认的路径
  },
  {
    path: '/common',
    component: home,
    meta:{
      title:'首页'
    },
    // 路由嵌套
    children:[
      {
        path:'',
        redirect:'news'
         },
      {
        path:'news',
        component:homeNews,
      },
      {
        path:'message',
        component:homeMessage,
      }
    ]
  },
  {
    path: '/about',
    component: about,
    meta:{
      title:'关于'
    }
  },
  {
    //在路径后面自动跟上用户名  根据用户的角色权限来动态展示路由（动态路由）
    path: '/user/:userId',
    component: user,
    meta:{
      title:'用户'
    }
  },
  {
    //query
    path: '/Profile',
    component: Profile,
    meta:{
      title:'我的'   //定义网页title
    }
  },
]

const router=new vueRouter({
    // 配置路径和组件之间的映射关系
  // mode:'history',//将hash模式改成history模式
  routes,
  linkActiveClass:'active'
    })
//监听路由跳转 （导航守卫）
router.beforeEach(function (to, from, next) {
  // 使用matched[0]是为了组件嵌套式便于  修改网页的title
  document.title=to.matched[0].meta.title,
    next()  // 必须执行next()，否组无法跳转
})


// 3、将router对象传入到vue实例中
export default router
