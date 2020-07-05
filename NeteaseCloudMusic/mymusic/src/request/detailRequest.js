import {request} from "./axios";
//获取歌单详情
export function getBookList(id) {
    return request({
        url:'/playlist/detail',
        params:{
            id:id,
        }
    })
}

// /获取相关歌单
// /related/playlist?id=1
export function relatePlayList(id) {
    return request({
        url:'/related/playlist',
        params:{
            id:id,
        }
    })
}

//获取歌曲url
export function playResource(id) {
    return request({
        url:'/song/url',
        params:{
            id:id,
        }
    })
}

//获取歌曲歌词/lyric?id=33894312
export function playLyric(id) {
    return request({
        url:'/lyric',
        params:{
            id:id,
        }
    })
}

//获取mv
// /mv/detail?mvid=5436712
export function playMv(mvid) {
    return request({
        url:'/mv/detail',
        params:{
            mvid:mvid,
        }
    })
}