//home专用的数据请求统一管理  避免与其他页面混在一起很复杂
import {request} from "./axios";

export function getHomeBannersData() {
    return request({
        url:'/banner?type=0'
    })
    //返回的时promise 可以直接.then
}

export function getTodayPlayList() {
    return request({
        url:'/personalized?limit=8',
    })
}

export function getNewSongList() {
    return request({
        url:'/top/album?offset=0&limit=8'
    })
}

//获取歌单详情
export function getChartDetail() {
    return request({
        url:'/toplist/detail'
    })
}
//获取歌单
export function getChartToplist() {
    return request({
        url:'/toplist'
    })
}
//发送登录请求
export function sendLogin(phone,password) {
    return request({
        url:'/login/cellphone',
        params:{
            phone:phone,
            password:password
        }
    })
}
// /logout  退出登录
export function logout() {
    return request({
        url:'/logout',
    })
}


//获取歌手
export function getSinger(offset,limit) {
    return request({
        url:'/top/artists',
        params:{
            offset:offset,
            password:limit
        }
    })
}

//获取主播
export function getAnchor(limit) {
    return request({
        url:'/dj/toplist/hours',
        params:{
            password:limit
        }
    })
}