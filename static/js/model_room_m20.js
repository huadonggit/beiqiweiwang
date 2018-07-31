$(function(){
    $('.m_room').hover(function() {
        var imgheight=$('.m_r_car').height();
        $('.m_r_v').animate({height:imgheight},1000);
        var imgwidth=$('.m_r_car').width();
        $('.m_r_h').animate({width:imgwidth},1000);
    });
    $('.m_r_three_pic .m_plat,.m_r_three_pic .m_volume,.m_r_three_pic .m_chair').hover(function() {
        $('.m_volume').animate({opacity:'1'},1000,function (){
            $('.m_plat').animate({marginLeft:0},100);
            $('.m_chair').animate({marginLeft:'62.16%'},100);
        });
    });
});