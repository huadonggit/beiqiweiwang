$(function(){
    $("body,html").scroll( function() {
        var heighttop=$(".m-threepic-left").eq(0).offset().top;
        var mheight=$('.m-threemiddle-left img').height();
        $('.m-threepic-left').css('height',mheight);
        $('.m-threepic-left img').css('height',mheight);
        if ($(window).scrollTop() >= heighttop-500 ) {
            $('.m-threemiddle-left').animate({opacity:'1'},1000,function (){
                $('.m-threeleft-left').animate({marginLeft:0},1000);
                $('.m-threeright-left').animate({marginLeft:'61.811%'},1000);
            });
        }
    });
});
