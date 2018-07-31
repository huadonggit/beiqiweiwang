$(function(){
    var cpimg=$('.campaign-pic').find('img')
    var iwidth=cpimg.width();
    cpimg.height(iwidth*463/1000);
    var scpimg=$('.server-care-pic').find('img')
    var iwidth=scpimg.width();
    scpimg.height(iwidth*317/420);
    $('.prev_news .next_news').find('span').css({'width':'auto','vertical-align':'top'}).find('a').css({'border':'none','padding':'0'})
    var mwidths=$('.topicItem .photo').width();
    var _height = parseInt(mwidths*255/425);
    $('.topicItem .photo').height(_height).css("overflow","hidden");;
    $('#jiathis_modal_body #jiathis_webchat img').css('margin','20px auto')
    $('input[type=radio]').height('auto');
    $('select').height('38px');
    $(' .top-nav .t-right').click(function(){
        var zhi=$('.t-right-input').val();
        if(zhi==''){
            $(this).find('a').css('right','19px');
            $(this).css('padding','5px 17px 5px 30px').find('input').animate({'width':'160px'},1000);
        }
    });
    var flag=0;
    $('.t-three-car .threeCarPic').click(function(){
        $(this).each(function(i) {
            var index=$(this).index()-4;
            flag=$('.t-three-box-gray').eq(index).is('.flag');
            $('.t-three-box-gray').css('display','none').removeClass('flag').eq(index).css('display','block').addClass('flag');
            $('.threeCarTri').css('display','none').removeClass('flag').eq(index).css('display','block');
        })
        if(flag){
            $('.threeCarTri').css('display','none').removeClass('flag');
            $('.t-three-box-gray').css('display','none').removeClass('flag');
        }
    });
    $(document).scroll(function() {
        $('.t-three-box-gray').css('display','none');
        $('.threeCarTri').css('display','none');
    });
});


