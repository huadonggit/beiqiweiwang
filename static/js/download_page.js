/**
 * Created by gaojian on 16/3/14.
 */
$(function(){
    var currentIndex = 0;
    var two_video_width = $('.video_download').width();
    var ul_dom = $('.video_download ul.video_list');


    var videoItem_r = $('.video_download ul.video_list li.add_m_r');

    var videoItem = $('.video_download ul.video_list li');
    var list_len = videoItem.length;
    if(list_len%2 != 0)
    {
        list_len++;

    }
    var Ul_width = Math.round(list_len/2) *100;
    ul_dom.css('width',Ul_width + '%');
    //console.log("list_len : " + list_len);

    var item_margin_right = 0.05/(list_len -1);
    var item_W = (1 / list_len) - (item_margin_right/2); //(100 - item_margin_right)/list_len - item_margin_right; //(100 / list_len) - (item_margin_right  / 2 );

   // console.log("item_W : " + item_W);
    videoItem.css('width', item_W*100+ "%");
    videoItem_r.css('margin-right',item_margin_right*100 + "%");
    var videoItem_h = $('.video_download ul.video_list li').width()*0.5;
    $(".video_download ul.video_list li .photo").css("height",parseInt(videoItem_h)+"px");
    //videoItem.css("height",parseInt(videoItem_h)+"px");
    $('.video_download .header .switch a.left_btn').click(function(){

        if(currentIndex>0)currentIndex--;

        //console.log("click left! : "+ currentIndex);
        var toLeft = -two_video_width * currentIndex;
        ul_dom.animate({left:toLeft},1000);

        if(currentIndex==0)
        {
           // $('.video_download .header .switch a.left_btn').addClass("on_disable");
            $(this).addClass("on_disable");
        }

        if(currentIndex == list_len-2)
        {
            $('.video_download .header .switch a.right_btn').removeClass("on_disable");
        }
    });

    $('.video_download .header .switch a.right_btn').click(function(){

        if(currentIndex<list_len-1)currentIndex++;
       // console.log("click right! : " + currentIndex);
        var toLeft = -two_video_width * currentIndex;
        ul_dom.animate({left:toLeft},1000);

        if(currentIndex==list_len-1)
        {
            //$('.video_download .header .switch a.right_btn').addClass("on_disable");
            $(this).addClass("on_disable");
        }

        if(currentIndex == 1)
        {
            $('.video_download .header .switch a.left_btn').removeClass("on_disable");
        }
    })
});
