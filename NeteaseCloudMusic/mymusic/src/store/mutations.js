//用户登录信息保存
export  const userStatus = (state,user)=>{
    if (user){
        state.currentUser = user;
        state.isLogin = true;
        console.log("当前用户信息：",state.currentUser);
    }else if(user === null){
    //    登出得时候，清空
        sessionStorage.setItem("userId",null);
        sessionStorage.setItem("userToken","");
        state.currentUser = null;
        state.isLogin = false;
        state.token = "";
    }
};

//播放器相关功能
//获取当前播放歌曲的信息
// ->设置当前播放歌曲信息
export  const  setContent = (state, payload)=>{
    state.playContent = payload;
    state.playList.indexOf(payload) === -1?state.playList.push(payload):""
};
 //获取当前播放歌曲的歌词  还没有做该功能
export  const setLyric = (state, payload)=>{
        state.playContent.lyric = payload
    };
    //设置当前播放歌曲的进度
export  const setCurrent = (state, payload) => {
    state.current =  Math.ceil(payload)
};
    //从播放列表中移除歌曲  还没有做该功能
export  const removeSong = (state, payload) => {
    let index = state.playList.indexOf(payload);
    state.playList.splice(index, 1)
};
    //往播放列表中加入歌曲 都加入播放列表最前面
export  const   addSong = (state, payload) => {
        let index = state.playList.indexOf(payload);
        state.playList.indexOf(payload) === -1?state.playList.unshift(payload):""
};
