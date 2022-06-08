const judgePageChange = (cb) => {
    // https://blog.csdn.net/weixin_47436633/article/details/124421798
    // 分别兼容：['chrome', '火狐', 'ie']
    // 需要兼容其他浏览器添加参数判断进去就行了
    ['webkitVisibility', 'mozvisibility', 'msvisibility']
    .forEach(item =>
      `${item}State` in document &&
      document.addEventListener(`${item.toLowerCase()}change`, () => cb(document[`${item}State`])))
  }
$(document).ready(() => {
    root = $('body');
    video = $('#background')[0];
    // src: Foxtail-Grass Studio - 歳月-雲流れ- (岁月-云流-)
    bgm = new Audio('https://ghproxy.com/https://raw.githubusercontent.com/zjkimin/hakurei-reimu-cn/main/assets/res/bgm.mp3');
    bgm.load();
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
    video.addEventListener('canplay', function (){
        setTimeout(function(){
            setTextAnimState('running');
        },59);
    });
    judgePageChange((status)=> {
        // console.log(status)
        if (status=='visible'){
            video.play();
        }
    });      
    root.click(function () {
        // video.muted=false;
        video.play();
        bgm.loop = true;
        bgm.autoplay = true;
        bgm.play();
    })
});