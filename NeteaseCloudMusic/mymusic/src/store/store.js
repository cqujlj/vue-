import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
//vuex是一个状态管理器而非一个存储工具
Vue.use(Vuex);

//创建存储对象Store,并导出
export default new Vuex.Store({
    //state负责:保存共享数据,供各个组件使用
    state: {
        currentUser:null,  //当前用户的所有信息
        isLogin:false,   //是否登录  默认没有登录
        token:"",    //保存用户登录后持有的token

        playList: [], //播放列表
        playContent: {},   //当前播放的歌曲信息
        current: "" ,//当前歌曲的播放进度

//播放列表：在歌曲列表中点击播放或者添加时，就更新播放列表，而播放控制部分的循环模式也是需要通过播放列表来实现的
// 播放信息：不管是在歌词页面还是播放控制组件上都需要进行展示
// 播放进度：控制歌词滚动以及播放进度条的更新
    },
    getters,
    mutations,
    actions
})