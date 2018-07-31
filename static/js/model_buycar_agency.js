$(function(){
    $('.b-a-list-up').find('select').width('180px');
    var bwidth=$('.b-a-list-down').width();
    $('.b-a-list-down').find('.b-a-word').css('width',bwidth-222);
    $(window).resize(function(){
        var bwidth=$('.b-a-list-down').width();
        $('.b-a-list-down').find('.b-a-word').css('width',bwidth-222);
    })
});