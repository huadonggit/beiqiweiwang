$(function(){
    var toggle=0;
    $('.m_t_table_button').click(function(){

        $(this).prev('.m_t_table').toggleClass('open').end();
        if(toggle==0){
            $(this).html('向上收起');
            toggle=1;
        }else{
            $(this).html('了解更多');
            toggle=0;
        }
    });
});