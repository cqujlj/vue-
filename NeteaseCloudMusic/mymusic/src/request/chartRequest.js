//chart专用的数据请求统一管理  避免与其他页面混在一起很复杂
import {request} from "./axios";


//0-26
export function getChartIdx(idx) {
    return request({
        url:'/top/list',
        params: {
            idx:idx,
        }
    })
}

//获取对应歌曲的详细信息 /song/detail?ids=347230
//chart里面传入ids  0-99
export function getASong(ids) {
    return request({
        url:'/song/detail',
        params:{
            ids:ids,
        }
    })
}