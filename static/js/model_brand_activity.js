$(function(){
    $('.brand-activity-list span').removeClass('brand-activity-list-hover').eq(0).addClass('brand-activity-list-hover').end().hover(function(){
        $('.brand-activity-list span').removeClass('brand-activity-list-hover')
        $(this).addClass('brand-activity-list-hover')
    });
    $('.brand-activity .brand-activity-list span').eq(0).hover(function(){
        $('.brand-activity .new,.brand-activity .media,.brand-activity .activity,.brand-activity .load').css('display','none');
        $('.brand-activity .new').toggle();
    });
    $('.brand-activity .brand-activity-list span').eq(1).hover(function(){
        $('.brand-activity .new,.brand-activity .media,.brand-activity .activity,.brand-activity .load').css('display','none');
        $('.brand-activity .media').toggle();
    });
    $('.brand-activity .brand-activity-list span').eq(2).hover(function(){
        $('.brand-activity .new,.brand-activity .media,.brand-activity .activity,.brand-activity .load').css('display','none');
        $('.brand-activity .activity').toggle();
    });
    $('.brand-activity .brand-activity-list span').eq(3).hover(function(){
        $('.brand-activity .new,.brand-activity .media,.brand-activity .activity,.brand-activity .load').css('display','none');
        $('.brand-activity .load').toggle();
    });
});