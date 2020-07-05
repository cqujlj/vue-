var audio = document.getElementById("audio");
function time() {
//进度条 只改变路程和速度
    var all_time = parseInt(audio.duration);
    //时间 进度总长度
    var now_time = parseInt(audio.currentTime);
//    速度 每秒走的进度
    var music_frame = 500;
//  路程 改变后的进度总长度
    document.getElementById("all_time").style.width = music_frame +'px';
//    限制路程
    document.getElementById("now_time").style.width = now_time * music_frame / all_time + 'px';
//     document.getElementById("now_time").style.width = now_time +'px';
//     document.getElementById("all_time").style.width = all_time +'px';

//    时间数据
    var m1 = parseInt(all_time / 60);
    var s1 = parseInt(all_time % 60);
    if (m1 < 10) {m1 = "0"+m1;}
    if (s1 < 10) {s1 = "0"+s1;}
    var m2 = parseInt(now_time / 60);
    var s2 = parseInt(now_time % 60);
    if (m2 < 10) {m2 = "0"+m2;}
    if (s2 < 10) {s2 = "0"+s2;}
    document.getElementById("progress").innerHTML = m2+':'+s2+"/"+m1+":"+s1;
}

audio.oncanplay = function () { time(); }
function start() {
//暂停时执行播放 否则执行暂停
    if (audio.paused){
        audio.play();
        setInterval(function () { time()},100);
    }else {
        audio.pause();
    }
}