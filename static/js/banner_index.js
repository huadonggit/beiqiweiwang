$(function(){
    /*左右箭头*/
    $('.index-banner-left').click(function(){
         //$('.index-banner-box img').finish()
        //e.stopPropagation()
        bannerleft();
    });
    $('.index-banner-right').click(function(){
         //$('.index-banner-box img').finish()
        //e.stopPropagation()
        bannermove();
    });
    $('.index-banner-left').hover(function(){
        if (f==0){f=circleNum};
        f--;
    })
    $('.index-banner-box,.index-banner-left,.index-banner-right').hover(function(){
        clearInterval(tt);
    },function(){
        tt=setInterval(bannermove,2500);
    })


    /*banner,   circle,,创建*/
    //var circleNum=6;
    var circleNum=$('.index-banner-box img').size();

    for(var i=0;i<circleNum;i++){
        $('<div class="index-banner-circle fl"></div>').appendTo('.index-banner-circle-box-in');
    };

    $('.index-banner-box').find('img:first').css({'display':"block"});
    $('.index-banner-circle').eq(0).addClass('index-banner-circle-circle');
    $('.index-banner-circle').each(function(i){
        $(this).click(function(){
            $('.index-banner-circle').addClass('index-banner-circle-disc');
            $(this).removeClass('index-banner-circle-disc').addClass('index-banner-circle-circle');
            $('.index-banner-box img').css({'display':'none'}).eq(i).css({'display':'block'});
            f=i;
        });
    });
    //var f=0;
    var f=1;
    var tt=setInterval(bannermove,2500);
    function bannermove(){
        if (f==circleNum){f=0}
        $('.index-banner-circle').addClass('index-banner-circle-disc').eq(f).removeClass('index-banner-circle-disc').addClass('index-banner-circle-circle');
        $('.index-banner-box img').css({'display':'none'}).eq(f).css({'display':'block'});
        f++;
    }
    function bannerleft(){
        if (f==0){f=circleNum}
        $('.index-banner-circle').addClass('index-banner-circle-disc').eq(f-1).removeClass('index-banner-circle-disc').addClass('index-banner-circle-circle');
        $('.index-banner-box img').css({'display':'none'}).eq(f-1).css({'display':'block'});
        f--;
    }
});