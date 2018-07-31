$(function(){
    $('.video_download .video_item .photo').delay(100).click(function(){
        videosrc=$(this).attr('date-src');
        console.log(videosrc)
        $('.video_download_gray').show();
        playvideo(videosrc,true);
    });
    $('.video_download_gray').find('.video_close').click(function(){
        playvideo(videosrc,false);
        $('.video_download_gray').hide();
    });
    function playvideo(src,flog){
        console.log(src,flog);
        var script_url = 'static/';
        console.log(script_url+'jwplayer/player.swf');
        var video_src = src;
        var thePlayer;  //保存当前播放器以便操作
        $(function() {
            thePlayer = jwplayer('video_list').setup({
                flashplayer: script_url+'jwplayer/player.swf',
                file: src,
                width:"100%",
                height:"100%"
            }).play(flog);
        });
    }
});