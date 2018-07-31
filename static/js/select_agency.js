/**
 * Created by yanhuadong on 2016/2/20.
 */

(function($){
    function hideOptions(speed){/*下拉列表显示*/
        if(speed.data){speed=speed.data}
        if($(document).data("nowselectoptions"))
        {
            $($(document).data("nowselectoptions")).slideUp(speed);
            $($(document).data("nowselectoptions")).prev("div").removeClass("tag_select_open");
            $(document).data("nowselectoptions",null);
            $(document).unbind("click",hideOptions);
            $(document).unbind("keyup",hideOptionsOnEscKey);
        }
    }
    function hideOptionsOnEscKey(e){/*下拉列表显示*/
        var myEvent = e || window.event;
        var keyCode = myEvent.keyCode;
        if(keyCode==27)hideOptions(e.data);
    }
    function showOptions(speed){
        $(document).bind("click",speed,hideOptions);/*下拉列表显示*/
        $(document).bind("keyup",speed,hideOptionsOnEscKey);
        $($(document).data("nowselectoptions")).slideDown(speed);/*下拉列表显示*/
        $($(document).data("nowselectoptions")).prev("div").addClass("tag_select_open");
    }

    $.fn.selectCssAgency=function(_speed){
        $(".select-agency-serise").each(function(){
            var speed=_speed||"fast";
            if($(this).data("cssobj")){
                $($(this).data("cssobj")).remove();
            }
            $(this).hide();
            /*2-20*/
            var divselect = $("<div placeholder='请选择车系' class='form-agency-serise agency-background' style='margin-left: 0;width:146px;'></div>").insertAfter(this).addClass("tag_agency_select");
            $(this).data("cssobj",divselect);
            var divoptions = $("<ul style=''></ul>").appendTo(divselect).addClass("tag_options").hide();
            divselect.click(function(e){
                if($($(document).data("nowselectoptions")).get(0) != $(this).find("ul").get(0)){
                    hideOptions(speed);
                }
                if(!$(this).find("ul").is(":visible"))
                {
                    e.stopPropagation();
                    $(document).data("nowselectoptions",$(this).find("ul"));
                    showOptions(speed);/*下拉列表显示*/
                }
            });
            divselect.hover(function(){
                    $(this).addClass("tag_agency_select_hover");
                }
                ,
                function(){
                    $(this).removeClass("tag_agency_select_hover");
                });
            $(this).change(function(){
                $(this).nextAll("ul").children("li:eq("+ $(this)[0].selectedIndex +")").addClass("open_selected").siblings().removeClass("open_selected");
                $(this).next("div").html($(this).children("option:eq("+ $(this)[0].selectedIndex +")").text());
            });
            $(this).children("option").each(function(i){
                var lioption= $("<li></li>").html($(this).text()).attr("title",$(this).attr("title")).appendTo(divoptions);
                if($(this).attr("selected")){
                    lioption.addClass("open_selected");
                    divselect.html($(this).text());
                }
                lioption.data("option",this);
                lioption.click(function(){
                    lioption.data("option").selected=true;/*弹出，上字*/
                    $(lioption.data("option")).trigger("change",true)
                });
                lioption.hover(/*掠过变色*/
                    function(){$(this).addClass("open_hover");},
                    function(){ $(this).removeClass("open_hover"); }
                );
            });
        });
        $(".select-agency-city").each(function(){
            var speed=_speed||"fast";
            if($(this).data("cssobj")){
                $($(this).data("cssobj")).remove();
            }
            $(this).hide();
            /*2-20*/
            var divselect = $("<div placeholder='选择城市' class='form-agency-city agency-background' style='margin-left:190px;width:146px;'></div>").insertAfter(this).addClass("tag_agency_select");
            $(this).data("cssobj",divselect);
            var divoptions = $("<ul style=''></ul>").appendTo(divselect).addClass("tag_options").hide();
            divselect.click(function(e){
                if($($(document).data("nowselectoptions")).get(0) != $(this).find("ul").get(0)){
                    hideOptions(speed);
                }
                if(!$(this).find("ul").is(":visible"))
                {
                    e.stopPropagation();
                    $(document).data("nowselectoptions",$(this).find("ul"));
                    showOptions(speed);/*下拉列表显示*/
                }
            });
            divselect.hover(function(){
                    $(this).addClass("tag_agency_select_hover");
                }
                ,
                function(){
                    $(this).removeClass("tag_agency_select_hover");
                });
            $(this).change(function(){
                $(this).nextAll("ul").children("li:eq("+ $(this)[0].selectedIndex +")").addClass("open_selected").siblings().removeClass("open_selected");
                $(this).next("div").html($(this).children("option:eq("+ $(this)[0].selectedIndex +")").text());
            });
            $(this).children("option").each(function(i){
                var lioption= $("<li></li>").html($(this).text()).attr("title",$(this).attr("title")).appendTo(divoptions);
                if($(this).attr("selected")){
                    lioption.addClass("open_selected");
                    divselect.html($(this).text());
                }
                lioption.data("option",this);
                lioption.click(function(){
                    lioption.data("option").selected=true;/*弹出，上字*/
                    $(lioption.data("option")).trigger("change",true)
                });
                lioption.hover(/*掠过变色*/
                    function(){$(this).addClass("open_hover");},
                    function(){ $(this).removeClass("open_hover"); }
                );
            });
        });
        $(".select-agency-area").each(function(){
            var speed=_speed||"fast";
            if($(this).data("cssobj")){
                $($(this).data("cssobj")).remove();
            }
            $(this).hide();
            /*2-20*/
            var divselect = $("<div placeholder='选择地区' class='form-agency-area agency-background' style='margin-left: 380px;width:146px;'></div>").insertAfter(this).addClass("tag_agency_select");
            $(this).data("cssobj",divselect);
            var divoptions = $("<ul style=''></ul>").appendTo(divselect).addClass("tag_options").hide();
            divselect.click(function(e){
                if($($(document).data("nowselectoptions")).get(0) != $(this).find("ul").get(0)){
                    hideOptions(speed);
                }
                if(!$(this).find("ul").is(":visible"))
                {
                    e.stopPropagation();
                    $(document).data("nowselectoptions",$(this).find("ul"));
                    showOptions(speed);
                }
            });
            divselect.hover(function(){
                    $(this).addClass("tag_agency_select_hover");
                }
                ,
                function(){
                    $(this).removeClass("tag_agency_select_hover");
                });
            $(this).change(function(){
                $(this).nextAll("ul").children("li:eq("+ $(this)[0].selectedIndex +")").addClass("open_selected").siblings().removeClass("open_selected");
                $(this).next("div").html($(this).children("option:eq("+ $(this)[0].selectedIndex +")").text());
            });
            $(this).children("option").each(function(i){
                var lioption= $("<li></li>").html($(this).text()).attr("title",$(this).attr("title")).appendTo(divoptions);
                if($(this).attr("selected")){
                    lioption.addClass("open_selected");
                    divselect.html($(this).text());
                }
                lioption.data("option",this);
                lioption.click(function(){
                    lioption.data("option").selected=true;
                    $(lioption.data("option")).trigger("change",true)
                });
                lioption.hover(
                    function(){$(this).addClass("open_hover");},
                    function(){ $(this).removeClass("open_hover"); }
                );
            });
        });
        $(".select-agency-people").each(function(){
            var speed=_speed||"fast";
            if($(this).data("cssobj")){
                $($(this).data("cssobj")).remove();
            }
            $(this).hide();
            /*2-20*/
            var divselect = $("<div placeholder='选择经销商' class='form-agency-people agency-background' style='margin-left: 570px;width:146px;'></div>").insertAfter(this).addClass("tag_agency_select");
            $(this).data("cssobj",divselect);
            var divoptions = $("<ul style=''></ul>").appendTo(divselect).addClass("tag_options").hide();
            divselect.click(function(e){
                if($($(document).data("nowselectoptions")).get(0) != $(this).find("ul").get(0)){
                    hideOptions(speed);
                }
                if(!$(this).find("ul").is(":visible"))
                {
                    e.stopPropagation();
                    $(document).data("nowselectoptions",$(this).find("ul"));
                    showOptions(speed);
                }
            });
            divselect.hover(function(){
                    $(this).addClass("tag_agency_select_hover");
                }
                ,
                function(){
                    $(this).removeClass("tag_agency_select_hover");
                });
            $(this).change(function(){
                $(this).nextAll("ul").children("li:eq("+ $(this)[0].selectedIndex +")").addClass("open_selected").siblings().removeClass("open_selected");
                $(this).next("div").html($(this).children("option:eq("+ $(this)[0].selectedIndex +")").text());
            });
            $(this).children("option").each(function(i){
                var lioption= $("<li></li>").html($(this).text()).attr("title",$(this).attr("title")).appendTo(divoptions);
                if($(this).attr("selected")){
                    lioption.addClass("open_selected");
                    divselect.html($(this).text());
                }
                lioption.data("option",this);
                lioption.click(function(){
                    lioption.data("option").selected=true;
                    $(lioption.data("option")).trigger("change",true)
                });
                lioption.hover(
                    function(){$(this).addClass("open_hover");},
                    function(){ $(this).removeClass("open_hover"); }
                );
            });
        });



    }
})(jQuery);