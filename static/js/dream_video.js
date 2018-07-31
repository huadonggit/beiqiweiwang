/**
 * Created by yanhuadong on 2016/3/28.
 */
$(document).ready(function(){

    var img_url = '';
    var script_url = '';
    var video_src = "static/video/01.flv";
    var thePlayer;  //保存当前播放器以便操作
    $(function() {
        thePlayer = jwplayer('dream-video').setup({
            skin:script_url+'static/jwplayer/skins/opacity.zip',
            image:img_url+'static/img/report/photoNews_img0.jpg',
            flashplayer: script_url+'static/jwplayer/player.swf',
            file: video_src,
            width:"100%",
            height:"100%",
        });
    });

});