import Vue from 'vue'
import Vuex from 'vuex'
//vuex是一个状态管理器而非一个存储工具
Vue.use(Vuex);

//格式化歌词
function formatLyric(lyric) {

}

//创建存储对象Store,并导出
export default new Vuex.Store({
//state负责:保存共享数据,供各个组件使用
    state:{
        cur:0,
        list:[],
    },
    mutations:{
         queryDataM(state,payload){
            let {id,data} = payload;
            state.cur = payload.id;
            if (data){
                state.list.push(data);
            }
        }
    },
    actions:{
        async queryDataA({state,commit},id){
            //判断歌曲是否存在
            let result = state.list.find(item=>{
                return parseInt(item.id) === parseInt(id);
            });
            if (result){
                //存在只用改id
                commit("queryDataM",{
                 id
                });
                return;
            }else{
            // 不存在 从服务器请求歌曲数据
                result = await api.info(id);
                if (parseInt(result.code) === 0){
                    commit("queryDataM",{
                        id,
                        data:result.data
                    });
                }
            }

        }
    },
    getters:{},
})