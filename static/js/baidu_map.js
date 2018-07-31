$(function(){
    $(document).on('click','.map-list .map-name',function(){
        var position=$(this).attr('data-position');
        var positionArr = position.split(",");
        var positionX = parseFloat(positionArr[0]);
        var positionY = parseFloat(positionArr[1]);
        var title = $(this).find("strong").text();
        var addr = $(this).closest('.map-list').find(".map-addr").text();
        var tel = $(this).closest('.map-list').find(".map-tel").text();

        var content = '<div class="map-float"><div class="map-title"><p>'+title+'</p></div><div class="map-content"><table><tr><td>地址：</td><td>'+addr+'</td></tr><tr><td>电话：</td><td>'+tel+'</td></tr></table><p><button class="sendbtn" type="button" onclick="showSendFrom(this)">发送到手机</button></p></div></div><div class="map-form" style="display:none;"><p>发送到手机短信</p><table><tr><td><input type="text" placeholder="手机号码" class="mobile-num"/></td><td><input type="checkbox" id="remeberNum" class="remeber-num"/><label for="remeberNum">记住该号码</label></td></tr><tr><td><input type="text" placeholder="验证码" class="code"/><a href="javascript:void(0)" class="code-pic" onclick="changePic()"><img src="../static/img/code.jpg" alt="" /></a></td><td></td></tr></table><button class="sendmessage" type="button" onclick="sendMessage()">免费发送到手机</button></div>';

        resetMap(positionX,positionY,title,content);
    })

    $('.map-list .map-name').eq(0).trigger('click');
    console.log("111");

})

function showSendFrom(el){
    $(el).closest('.map-float').hide().siblings(".map-form").show();
}

function sendMessage(){
    alert("已成功将地址发送到您的手机，请注意接收！")

}

function changePic(){
    alert("更换验证码")
}

// 百度地图API功能
function resetMap(positionX,positionY,title,content){
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(positionX,positionY);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    map.centerAndZoom(point, 15);
    var opts = {
        enableMessage:true,//设置允许信息窗发送短息
        width:355,
        message:""
    }
    var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象
    marker.addEventListener("click", function(){
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    });
}