$(document).ready(function(){
    //$('.map-box-address a').eq(0).addClass('beijing').hover(function(e){
    //    $(this).find('.map-box-blue').show().end().find('.map-box-gray').hide().end().find('.map-box-list').show();
    //    e.stopPropagation();
    //    e.preventDefault();
    //})
    var map=$('.map-box-address a');
    for(var i=0;i<16;i++){
        map.eq(i).addClass('add'+i);
    }

    //map.eq(1).addClass('shanghaixinnengyuan');
    //map.eq(2).addClass('beijing');
    //map.eq(3).addClass('beijing');
    //map.eq(4).addClass('beijing');
    //map.eq(5).addClass('beijing');
    //map.eq(6).addClass('beijing');
    //map.eq(7).addClass('beijing');
    //map.eq(8).addClass('beijing');
    //map.eq(9).addClass('beijing');
    //map.eq(10).addClass('beijing');
    //map.eq(11).addClass('beijing');
    //map.eq(12).addClass('beijing');
    //map.eq(13).addClass('beijing');
    //map.eq(14).addClass('beijing');
    //


    map.hover(function(){
        $(this).find('.map-box-list').show();
    },function(){
        $(this).find('.map-box-list').hide();
    })
    //$('.map-box-address a').eq(0).addClass('beijing').hover(function(){
    //    $(this).addClass('show');
    //})
})