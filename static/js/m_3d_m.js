$(function () {
    var mwidths=$('#m_3d_m').width();
    var _height = parseInt(mwidths*720/1380);
    $('#m_3d_m').height(_height);
    $('#m_3d_m_embed').css("height",_height+"px");
});