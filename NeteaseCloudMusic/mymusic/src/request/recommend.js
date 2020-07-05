//recommend专用的数据请求统一管理  避免与其他页面混在一起很复杂
import {request} from "./axios";


// 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
//
// cat:cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
//
// limit: 取出评论数量 , 默认为 50
//
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值

export function getRecommendList(cat,num,order,offset) {
    return request({
        url:'/top/playlist',
        params: {
            cat:cat,
            limit:num,
            order:order,
            offset:offset,
        }
    })
}


// /playlist/catlist   歌单分类

export function getRecommendStyle() {
    return request({
        url:'/playlist/catlist',
    })
}
