$(function(){
    $("body,html").scroll( function() {
        var heighttop=$(".m-twopic-right").eq(0).offset().top;
        var mheight=$('.m-twoleft-right img').height();
        $('.m-twopic-right').css('height',mheight);
        $('.m-twopic-right img').css('height',mheight);
        if ($(window).scrollTop() >= heighttop-500 ) {
            $('.m-twoleft-right').animate({marginLeft:0},1000);
            $('.m-tworight-right').animate({marginLeft:'38.444%'},1000);
        }
    });
});