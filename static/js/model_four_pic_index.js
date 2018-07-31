$(function(){
    $('.four-pic-box img').hover(
        function(){
            $(this).addClass('big');
        },
        function(){
            $(this).removeClass('big');
        });
})