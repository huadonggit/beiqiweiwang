$(function() {
    $( ".datepicker" ).datepicker({
        dateFormat: "yy-mm-dd",
        monthNames: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
        dayNamesMin : [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ]
    });
});