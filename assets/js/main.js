$(document).ready(() => {
    root = $('body');
    video = $('#background')[0];
    // src: Foxtail-Grass Studio - 歳月-雲流れ- (岁月-云流-)
    bgm = new Audio('assets/res/bgm.mp3');
    bgm.load();
    // Chrome不允许自动播放了(悲)
    // bgm.addEventListener("canplaythrough", event => {
    //     /* 音频可以播放；如果权限允许则播放 */
    //     bgm.play();
    // });
    root.click(function () {
        // video.muted=false;
        video.play();
        bgm.loop = true;
        bgm.autoplay = true;
        bgm.play();
    })
});