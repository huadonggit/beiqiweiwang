$(function(){
    $("body,html").scroll( function() {
        var heighttop=$(".m-threepic-right").eq(0).offset().top;
        var mheight=$('.m-threemiddle-right img').height();
        $('.m-threepic-right').css('height',mheight);
        $('.m-threepic-right img').css('height',mheight);
        if ($(window).scrollTop() >= heighttop-500 ) {
            $('.m-threemiddle-right').animate({opacity:'1'},1000,function (){
                $('.m-threeleft-right').animate({marginLeft:0},1000);
                $('.m-threeright-right').animate({marginLeft:'59.202%'},1000);
            });
        }
    });
});