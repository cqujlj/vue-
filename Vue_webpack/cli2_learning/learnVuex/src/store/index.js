import Vue from "vue"
import  Vuex from 'vuex'
import {
  INCREMENT,
  DECREMENT,
  CHANGEINFO,
  DELETEINFO,
  ADDCOUNT,
  SUBCOUNT,
  ADDSTUDENT,
  AUPDATEINFO,
  UPDATEINFO} from "./mutation_types";
//1、安装插件
Vue.use(Vuex)
//2、创建对象
const store=new Vuex.Store({
  state:{
    counter:10,
    message:"我是共享message",
    students:[
      {id:101,name:'Jack',age:22},
      {id:102,name:'Nancy',age:19},
      {id:103,name:'Jane',age:16},
      {id:104,name:'Jeo',age:12},
    ],
    info:{name:'Lisa',weight:48,height:168}
  },
  // 定义函数 大多用于同步操作
  // vuex的state只能通过mutation修改
  mutations:{
    [INCREMENT](state){
      state.counter++;
    },
    [DECREMENT](state){
      state.counter--;
    },
    [ADDCOUNT](state,count){
      state.counter+=count;
    },
    // subCount(state,count){
    //   state.counter-=count;
    // },
    [SUBCOUNT](state,payload){
      console.log(payload);
      state.counter-=payload.count;
    },
    //这里的stu是一个对象
    [ADDSTUDENT](state,stu){
      state.students.push(stu);
    },
    //响应式修改info数据
    [CHANGEINFO](state){
      // state.info['sex']='lady',//非响应式
      Vue.set(state.info,'sex','lady')// Vue.set()是响应式的
    },
    [DELETEINFO](state){
      // delete state.info.weight,//非响应式
      Vue.delete(state.info,'weight')
    },
    [UPDATEINFO](state){
      state.info.name='Jerry';
      console.log('修改完成');
    }
  },
  //执行异步操作
  actions:{
    // 该aUpdateInfo函数由vue组件调用
    // aUpdateInfo(context){
    //   setTimeout(()=>{
    //     //调用mutation里面的UpdateInfo函数  执行异步操作
    //     context.commit('UpdateInfo')
    //   },1000)
    // },

    //携带有参数的actions  payload可以是对象（表示有多个参数传递）
    // aUpdateInfo(context,payload){
    //   setTimeout(()=>{
    //         context.commit('UpdateInfo');
    // 异步操作后调用一一些其他函数 给出提示操作完成
    //     console.log(payload.load1);
    //     payload.success();
    //   },1000)
    // },
    //异步操作的另一种写法  promise
    [AUPDATEINFO](context,payload){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          context.commit(UPDATEINFO);
          console.log(payload.load1);
          payload.success();
          resolve("actions问：完成了吗？");
        },1000)
      })
    },
  },
  //getters类似于computed计算属性
  getters:{
    powerCounter(state){
      return state.counter*state.counter;
    },
    more20Stu(state){
      return state.students.filter( s=>s.age>18);
    },
    //将 getters作为参数
    more20StuLength(state,getters){
      return getters.more20Stu.length;
    },
    // 指定筛选年龄段>specialAge的学生 不写死筛选条件
    moreAgeStu(state){
      return function (specialAge) {
        return state.students.filter( stu=>stu.age>specialAge)
      }
    },
  },

  modules:{
    moduleA:{
      state:{
        moACount:99,
        moAMess:"我是moA的message"
      },
      mutations:{
        powerCount(state,num){
          return state.moACount+=num;
        }
      },
      actions:{
        // aUpdateMoA(context,payload){
        //     setTimeout(()=>{
        //           context.commit('UpdateMoA');
        //   // 异步操作后调用一一些其他函数 给出提示操作完成
        //       console.log(payload.load1);
        //       payload.success();
        //     },1000)
        //   },
      },
      getters:{
        powerMoACount(state){
          return state.moACount*100;
        },
        powerMoACount2(state,getters,rootState){
          return getters.powerMoACount*10000;
        }
      }
    },
  }
})
//3、导出
export default store
