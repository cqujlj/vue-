import {request} from "./axios";
//获取用户详情
export function getUser(uid) {
    return request({
        url:'/user/detail',
        params:{
            uid:uid,
        }
    })
}

//获取用户歌单
export function getUserSongList(id) {
    return request({
        url:'/user/playlist',
        params:{
            uid:id,
        }
    })
}




// 获取用户电台  /user/dj?uid=32953014

//获取用户关注列表  /user/follows?uid=32953014

//获取用户粉丝列表  /user/followeds?uid=32953014
// /user/followeds?uid=416608258&time=1560152549136

