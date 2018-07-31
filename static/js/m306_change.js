$(function(){
    $('.m_t_p_strong strong').find('span:odd').css({'display':'inline-block','line-height':'30px','text-align':'left','font-size':'13px','vertical-align':'bottom','color':'#707070'});
    $('.m_t_power').hover(
        function(){
            change();
        },
        function(){
            hp.text(horsepower);
            p.text(power);
            t.text(torsion);
        }
    )
    var hp=$('.m_t_p_strong strong').eq(0).find('span').eq(0);
    var p=$('.m_t_p_strong strong').eq(1).find('span').eq(0);
    var t=$('.m_t_p_strong strong').eq(2).find('span').eq(0);
    var horsepower=hp.text();
    var power=p.text();
    var torsion=t.text();
    function change(){
        add(horsepower,hp);
        addt(power,p);
        addtt(torsion,t);
    }
    function add(text,prop){
        var num=0;
        prop.text(num);
        var text=parseFloat(text);
        var ti=setInterval(function changeto(){
            if(num<text){
                num+=0.5;
                prop.text(num);
            }else{
                prop.text(num);
            }
        },10);
    }
    function addt(text,prop){
        var num=0;
        prop.text(num);
        var text=parseFloat(text);
        var ti=setInterval(function changeto(){
            if(num<text){
                num+=0.5;
                prop.text(num);
            }else{
                prop.text(num);
            }
        },10);
    }
    function addtt(text,prop){
        var num=0;
        prop.text(num);
        var text=parseFloat(text);
        var ti=setInterval(function changeto(){
            if(num<text){
                num+=0.5;
                prop.text(num);
            }else{
                prop.text(num);
            }
        },10);
    }
});