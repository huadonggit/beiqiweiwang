$(function(){
    //$('.m-pic-word-word').eq(0).css('marginTop','7px');
    $('.m-yi-server-box').eq(0).css('display','block');
    $('.m-yi-server-red-box').find('.m-yi-server-gray:last').css('display','none').end().eq(0).find('.m-yi-server-red').eq(0).css('color', '#9d1b12').end().end().end().eq(1).find('.m-yi-server-red').eq(1).css('color', '#9d1b12').end().end().end().eq(2).find('.m-yi-server-red').eq(2).css('color', '#9d1b12');
    var i=0;
    $('.m-yi-server-red').each(function(k){
        $(this).click(function(){
            i=k%3;
            //$(this).eq(i).css('color', '#9d1b12');
            $('.m-yi-server-box').css('display','none').eq(i).css('display','block');
        })
    })
    $('.m-yi-server-arrow').find('span').find('img:odd').css({'display':'none'}).end().each(function(k){
        $(this).hover(function() {
                $(this).find('img:even').css({'display':'none'}).end().find('img:odd').css({'display':'block'});
            },
            function(){
                $(this).find('img:odd').css({'display':'none'}).end().find('img:even').css({'display':'block'});
            })
        $(this).click(function(){
            if(i==0){i=3}
            $('.m-yi-server-box').css('display','none').eq(i-1).css('display','block');
            i--;
        })
    });
    /*$('.m-yi-server-arrow').find('span:first').each(function(k){
        $(this).hover(function() {
                $(this).find('img').prop({'src':'static/img/server_arrow_r0.png'})
            },
            function(){
                $(this).find('img').prop({'src':'static/img/server_arrow_0.png'})
            })
        $(this).click(function(){
            if(i==0){i=3}
            $('.m-yi-server-box').css('display','none').eq(i-1).css('display','block');
            i--;
        })
    });
    $('.m-yi-server-arrow').find('span:last').each(function(k){
        $(this).hover(function() {
                $(this).find('img').prop({'src':'static/img/server_arrow_r1.png'})
            },
            function(){
                $(this).find('img').prop({'src':'static/img/server_arrow_1.png'})
            })
        $(this).click(function(){
            if(i==2){i=-1}
            $('.m-yi-server-box').css('display','none').eq(i+1).css('display','block');
            i++;
        })
    })*/
});