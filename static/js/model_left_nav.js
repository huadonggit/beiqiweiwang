$(function(){
    /*$('a').each(function(){
        $('this').attr('onFocus','blur()')
    });
    function bluring() {
        if (event.srcElement.tagName == "A" || event.srcElement.tagName == "IMG") document.body.focus();
    }
    document.onfocusin=bluring;*/
    $('.l-buy-car-list').find('li').hover(
        function(){
            $(this).addClass('l-buy-list-hover');
        },
        function(){
            $(this).removeClass('l-buy-list-hover');
        }
    );
    $('.l-car-pic-box').css('display','none').eq(0).css('display','block').addClass('.l-car-pic-box-show');
    var num=0;
    $('.l-car-nav span').each(function(i){
        $(this).hover(function(){
            num=i;
            $('.l-car-nav span').removeClass('left-span-hover').eq(i).addClass('left-span-hover');
            $('.l-car-pic-box').css('display','none').removeClass('.l-car-pic-box-show').eq(i).css('display','block').addClass('.l-car-pic-box-show');
            $('.l-car-detail').css('display','none');
        });



        //if(i!=3){
        //    $(this).hover(function(){
        //        num=i;
        //        $('.l-car-nav span').removeClass('left-span-hover').eq(i).addClass('left-span-hover');
        //        $('.l-car-pic-box').css('display','none').removeClass('.l-car-pic-box-show').eq(i).css('display','block').addClass('.l-car-pic-box-show');
        //        $('.l-car-detail').css('display','none');
        //    });
        //}
        /*$(this).click(function(){
            num=i;
            $('.l-car-nav span').removeClass('left-span-hover').eq(i).addClass('left-span-hover');
            $('.l-car-pic-box').css('display','none').removeClass('.l-car-pic-box-show').eq(i).css('display','block').addClass('.l-car-pic-box-show');
            $('.l-car-detail').css('display','none');
        });*/
        $('.l-car-nav span').removeClass('left-span-hover').eq(0).addClass('left-span-hover');
        $('.l-car-pic-box').css('display','none').eq(0).css('display','block');
    });
    $('.l-li').hover(
        function(){
            $(this).addClass('l-hover-show');
        },
        function(){
            $(this).removeClass('l-hover-show');
        }
    );
    //点击
    //$('.l-li ').eq(1).find('a').click(function(){
    //    $('.l-car').toggle(function(){
    //        $(this).addClass('block');
    //        $('.l-buy-car').removeClass('block');
    //    });
    //    $('.l-buy-car').css({'display':'none'});
    //});
    //$('.l-li ').eq(2).find('a').click(function(){
    //    $('.l-buy-car').eq(0).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //    $('.l-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //});
    //$('.l-li ').eq(3).find('a').click(function(){
    //    $('.l-car .l-buy-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //    $('.l-buy-car').eq(1).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //});
    //$('.l-li ').eq(4).find('a').click(function(){
    //    $('.l-car .l-buy-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //    $('.l-buy-car').eq(2).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //});
    //$('.l-li ').eq(5).find('a').click(function(){
    //    $('.l-car .l-buy-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //    $('.l-buy-car').eq(3).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //});
    //浮过
    $('.l-li ').hover(function(e){
        //e.finish;
        //if($(this).hasClass(".l-first-show")){
        //    $(this).find('.l-car').removeClass('block');
        //    $(this).find('.l-buy-car').hide().removeClass('block');
        //}else {
            $(this).find('.l-car').toggleClass('block');
            $(this).find('.l-buy-car').toggle().toggleClass('block');
        //}
        //$('.l-car').toggle(function(){
        //    $(this).addClass('block');
        //    $('.l-buy-car').removeClass('block');
        //});
        //$('.l-buy-car').css({'display':'none'});
    });
    //$('.l-li ').eq(2).find('a').hover(function(){
    //    $('.l-buy-car').eq(0).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //    $('.l-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //});
    //$('.l-li ').eq(3).find('a').hover(function(){
    //    $('.l-car .l-buy-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //    $('.l-buy-car').eq(1).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //});
    //$('.l-li ').eq(4).find('a').hover(function(){
    //    $('.l-car .l-buy-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //    $('.l-buy-car').eq(2).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //});
    //$('.l-li ').eq(5).find('a').hover(function(){
    //    $('.l-car .l-buy-car').css({'display':'none'});
    //    $('.l-car').removeClass('block');
    //    $('.l-buy-car').eq(3).toggle(function(){
    //        $(this).addClass('block');
    //    });
    //});
    $('.l-car-detail-con').css({'display':'none'});
    $('.l-car-pic').hover(
        function(){
            $(this).css('background', '#f2f2f2');
            $(this).find('.l-car-drive').css({'display': 'block'});
        },
        function(){
            $(this).css('background', 'none');
            $(this).find('.l-car-drive').css({'display': 'none'});
        }
    );
     $('.l-car-detail').css('display','none').eq(0).css({'display': 'block'});
    $('.l-car-pic-box-mvp').find('.l-car-pic').each(function (i) {
        $(this).hover(function(){
            $('.l-car-detail-suv,.l-car-detail-mvp,.l-car-detail-x,.l-car-detail-d').css({'display': 'none'});
            $('.l-car-detail-mvp').css({'display': 'block'}).find('.l-car-detail-con').css({'display': 'none'}).eq(i).css({'display': 'block'});
        });
    });
    $('.l-car-pic-box-suv').find('.l-car-pic').each(function (i) {
        $(this).hover(function(){
            $('.l-car-detail-suv,.l-car-detail-mvp,.l-car-detail-x,.l-car-detail-d').css({'display': 'none'});
            $('.l-car-detail-suv').css({'display': 'block'}).find('.l-car-detail-con').css({'display': 'none'}).eq(i).css({'display': 'block'});
        });
    });
    $('.l-car-pic-box-x').find('.l-car-pic').each(function (i) {
        $(this).hover(function(){
            $('.l-car-detail-suv,.l-car-detail-mvp,.l-car-detail-x,.l-car-detail-d').css({'display': 'none'});
            $('.l-car-detail-x').css({'display': 'block'}).find('.l-car-detail-con').css({'display': 'block'}).css({'display': 'none'}).eq(i).css({'display': 'block'});
        });
    });
     $('.l-car-pic-box-d').find('.l-car-pic').each(function (i) {
         $(this).hover(function(){
             $('.l-car-detail-suv,.l-car-detail-mvp,.l-car-detail-x,.l-car-detail-d').css({'display': 'none'});
             $('.l-car-detail-d').css({'display': 'block'}).find('.l-car-detail-con').css({'display': 'none'}).eq(i).css({'display': 'block'});
         });
     });
});

