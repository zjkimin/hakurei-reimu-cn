$(document).ready(() => {
    root = $('body');
    video = $('#background')[0];
    // sync with text animation
    video.currentTime=1.5
    // src: Foxtail-Grass Studio - 歳月-雲流れ- (岁月-云流-)
    bgm = new Audio('https://static.hakurei.cc/stream/reimu_cn/bg/bgm.mp3');
    bgm.load();
    bgm.loop = true;
    bgm.autoplay = true;
    // Chrome不允许自动播放了,不过还是要试一下
    bgm.addEventListener("canplaythrough", event => {
        /* 音频可以播放；如果权限允许则播放 */
        bgm.play();
    });
    dom_tit=$('#mtitle')[0];
    dom_moe=$('#Moe')[0];
    function setTextAnimState(state){
        // state: running | paused
        dom_tit.style.animationPlayState=state;
        dom_moe.style.animationPlayState=state;
    }
    // console.log(dom_tit,dom_moe)
    // video.addEventListener('canplay', function (){
    //     // setTimeout(function(){
    //     setTextAnimState('running');
    //     // },0);
    // });
    // judgePageChange((status)=> {
    //     // console.log(status)
    //     if (status=='visible'){
    //         video.play();
    //     }
    // });      
    root.click(function () {
        // video.muted=false;
        video.play();
        bgm.play();
    })
});
