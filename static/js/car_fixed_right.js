$(function(){
    $(document).scroll(function(){
        $('.car-fixed-right').css('display','block').find('a').find('img:even').addClass('yesopen').end().each(function(i){
            $(this).hover(function() {
                    $(this).find('p').css('color','#9d1b12');
                    $(this).find('img:odd').addClass('yesopen').end().find('img:even').removeClass('yesopen');
                },
                function(){
                    $(this).find('p').css('color','#fff');
                    $(this).find('img:even').addClass('yesopen').end().find('img:odd').removeClass('yesopen');
                })
        })
    });
});