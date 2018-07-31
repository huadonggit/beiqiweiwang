$(function(){
    $('.m_fashion').hover(function(){
        $('.m_leftmove').animate({left:'0',opacity:'1'},1000);
        $('.m_f_view').animate({marginLeft:'0',opacity:'1'},700,function(){
            $('.m_f_drive').animate({marginLeft:'12.2%',opacity:'1'},100,function(){
                $('.m_f_headlight').animate({marginLeft:'31.2%',opacity:'1'},100,function(){
                    $('.m_f_taillight').animate({marginLeft:'53.7%',opacity:'1'},100,function(){
                        $('.m_f_wheel').animate({left:'70.5%',opacity:'1'},100,function(){

                        });
                    });
                });
            });
        });
    })

})