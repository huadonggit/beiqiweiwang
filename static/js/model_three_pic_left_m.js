$(function(){
    $('body,html').scroll( function() {
        var heighttop=$(".m-threepic-left-m").eq(0).offset().top;
        var mheight=$('.m-threemiddle-left-m img').height();
        $('.m-threepic-left-m').css('height',mheight);
        $('.m-threepic-left-m img').css('height',mheight);
        if ($(window).scrollTop() >= heighttop-500 ) {
            $('.m-threemiddle-left-m').animate({opacity:'1'},1000,function (){
                $('.m-threeleft-left-m').animate({marginLeft:0},1000);
                $('.m-threeright-left-m').animate({marginLeft:'66.666%'},1000);
            });
        }
    });
});