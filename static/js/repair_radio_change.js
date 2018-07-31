$(function(){
    var radio=$('.repair-radio-left');
    $('<div class="bq-radio repair-radio-left repair-radio-change check">').insertAfter(radio).click(function(){
        $(this).addClass('nocheck');

    });
    //$('.repair-radio-change .nocheck').click(function(){
    //    $(this).addClass('check');
    //});



});