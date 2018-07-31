$(function(){
    $(".taboptions li").click(function(){
        var tabIndex = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(this).closest(".tab").find(".tablist").eq(tabIndex).addClass("on").siblings().removeClass("on");
    })
    $(".taboptions li").eq(0).trigger("click");

})