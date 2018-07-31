$(function () {
    $('.m_switch_img').find('img:first').show();
    $('.m_switch_square').each(function (i) {
        $(this).click(function () {
            $('.m_switch_306').find('img').hide().eq(i).show();
        });
    });
    $('.m306-banner-right').click(function(){
        alert(1);
        $('.m_switch_img').find('img:visible').next().show().siblings().hide();
    });
    $('.m306-banner-left').click(function(){
        $('.m_switch_img').find('img:visible').prev().show().siblings().hide();
    });
});