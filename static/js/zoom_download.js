function ZoomPic ()
{
    this.initialize.apply(this, arguments)
}
ZoomPic.prototype =
{
    initialize : function (id)
    {
        var _this = this;
        this.wrap = typeof id === "string" ? document.getElementById(id) : id;
        this.oUl = this.wrap.getElementsByTagName("ul")[0];
        this.aLi = this.wrap.getElementsByTagName("li");
        this.timer = null;
        this.aSort = [];
        this.iCenter = 3;
        var _w = $(this.wrap).width();
        var _h = parseInt(_w*0.4356);
        this.css(this.oUl,"height",_h);
        this.options = [
            {width:parseInt(_w*0.30), height:parseInt(_w*0.18), top:parseInt(_w*0.13), left:parseInt(_w*0.30), zIndex:1},
            {width:parseInt(_w*0.3712), height:parseInt(_w*0.2273), top:parseInt(_w*0.1061), left:0, zIndex:2},
            {width:parseInt(_w*0.5167), height:parseInt(_w*0.3181), top:parseInt(_w*0.0606), left:parseInt(_w*0.045), zIndex:3},
            {width:parseInt(_w*0.7121), height:_h, top:0, left:parseInt(_w*0.1440), zIndex:4},
            {width:parseInt(_w*0.5167), height:parseInt(_w*0.3181), top:parseInt(_w*0.0606), left:parseInt(_w*0.4394), zIndex:3},
            {width:parseInt(_w*0.3712), height:parseInt(_w*0.2273), top:parseInt(_w*0.1061), left:parseInt(_w*0.6288), zIndex:2},
            {width:parseInt(_w*0.30), height:parseInt(_w*0.18), top:parseInt(_w*0.13), left:parseInt(_w*0.50), zIndex:1}
        ];
        for (var i = 0; i < this.aLi.length; i++) this.aSort[i] = this.aLi[i];
        this.aSort.unshift(this.aSort.pop());
        this.setUp();
        this.doImgClick();
        this.timer = setInterval(function ()
        {
            _this.doNext()
        }, 5000);
        this.wrap.onmouseover = function ()
        {
            clearInterval(_this.timer)
        };
        this.wrap.onmouseout = function ()
        {
            _this.timer = setInterval(function ()
            {
                _this.doNext()
            }, 5000);
        };
        $(window).resize(function(){

            _this.resizing();
        });
    },
    doPrev : function ()
    {
        this.aSort.unshift(this.aSort.pop());
        this.setUp()
    },
    doNext : function ()
    {
        this.aSort.push(this.aSort.shift());
        this.setUp()
    },
    doImgClick : function ()
    {
        var _this = this;
        for (var i = 0; i < this.aSort.length; i++)
        {
            this.aSort[i].onclick = function ()
            {
                if (this.index > _this.iCenter)
                {
                    for (var i = 0; i < this.index - _this.iCenter; i++) _this.aSort.push(_this.aSort.shift());
                    _this.setUp()
                }
                else if(this.index < _this.iCenter)
                {
                    for (var i = 0; i < _this.iCenter - this.index; i++) _this.aSort.unshift(_this.aSort.pop());
                    _this.setUp()
                }
            }
        }
    },
    setUp : function ()
    {
        var _this = this;
        var i = 0;
        for (i = 0; i < this.aSort.length; i++) this.oUl.appendChild(this.aSort[i]);
        for (i = 0; i < this.aSort.length; i++)
        {
            this.aSort[i].index = i;
            if (this.index == _this.iCenter)
            {
                $(_this.aSort[_this.iCenter].getElementsByTagName("a")[0]).css("display","none");
            }
            if (i < 7)
            {
                this.css(this.aSort[i], "display", "block");
                this.css(this.aSort[i].getElementsByTagName("a")[0],"display","none");
                this.css(this.aSort[_this.iCenter].getElementsByTagName("a")[0],"display","block");
                (this.aSort[i].getElementsByTagName("a")[0]).style.top = "-66px";

                this.doMove(this.aSort[i], this.options[i], function ()
                {
                    _this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {opacity:100}, function ()
                    {
                        _this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {opacity:100}, function ()
                        {
                            this.doMove(this.aSort[_this.iCenter].getElementsByTagName("a")[0], {top:0});
                        });
                    });
                });
            }
            else
            {
                this.css(this.aSort[i], "display", "none");
                this.css(this.aSort[i], "width", 0);
                this.css(this.aSort[i], "height", 0);
                this.css(this.aSort[i], "top", 5);
                this.css(this.aSort[i], "left", parseInt(this.oUl.offsetWidth / 2));
            }
            if (i < this.iCenter || i > this.iCenter)
            {
                //this.css(this.aSort[i].getElementsByTagName("img")[0], "opacity", 30)
                this.aSort[i].onmouseover = function ()
                {
                    _this.doMove(this.getElementsByTagName("img")[0], {opacity:100})
                };
                this.aSort[i].onmouseout = function ()
                {
                    _this.doMove(this.getElementsByTagName("img")[0], {opacity:35})
                };
                this.aSort[i].onmouseout();
            }
            else
            {
                this.aSort[i].onmouseover = this.aSort[i].onmouseout = null
            }
        }
    },
    addEvent : function (oElement, sEventType, fnHandler)
    {
        return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
    },
    css : function (oElement, attr, value)
    {

        if (arguments.length == 2)
        {
            return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
        }
        else if (arguments.length == 3)
        {
            switch (attr)
            {
                case "width":
                case "height":
                case "top":
                case "left":
                case "bottom":
                    oElement.style[attr] = parseInt(value) + "px";
                    break;
                case "opacity" :
                    //oElement.style.filter = "alpha(opacity=" + value + ")";
                    //oElement.style.opacity = value / 100;
                    break;
                default :
                    oElement.style[attr] = value;
                    break
            }
        }
    },
    doMove : function (oElement, oAttr, fnCallBack)
    {
        var _this = this;
        clearInterval(oElement.timer);
        oElement.timer = setInterval(function ()
        {
            var bStop = true;
            for (var property in oAttr)
            {
                var iCur = parseFloat(_this.css(oElement, property));
                property == "opacity" && (iCur = parseInt(iCur.toFixed(2) * 100));
                var iSpeed = (oAttr[property] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

                if (iCur != oAttr[property])
                {
                    bStop = false;
                    _this.css(oElement, property, iCur + iSpeed)
                }
            }
            if (bStop)
            {
                clearInterval(oElement.timer);
                fnCallBack && fnCallBack.apply(_this, arguments)
            }
        }, 30)
    },
    resizing : function ()
    {
        this._w = $(this.wrap).width();
        var _w = this._w;
        var _h = parseInt(this._w*0.4356);
        this.css(this.oUl,"height",_h);

        this.options = [
            {width:parseInt(_w*0.30), height:parseInt(_w*0.18), top:parseInt(_w*0.13), left:parseInt(_w*0.30), zIndex:1},
            {width:parseInt(_w*0.3712), height:parseInt(_w*0.2273), top:parseInt(_w*0.1061), left:0, zIndex:2},
            {width:parseInt(_w*0.5167), height:parseInt(_w*0.3181), top:parseInt(_w*0.0606), left:parseInt(_w*0.045), zIndex:3},
            {width:parseInt(_w*0.7121), height:_h, top:0, left:parseInt(_w*0.1440), zIndex:4},
            {width:parseInt(_w*0.5167), height:parseInt(_w*0.3181), top:parseInt(_w*0.0606), left:parseInt(_w*0.4394), zIndex:3},
            {width:parseInt(_w*0.3712), height:parseInt(_w*0.2273), top:parseInt(_w*0.1061), left:parseInt(_w*0.6288), zIndex:2},
            {width:parseInt(_w*0.30), height:parseInt(_w*0.18), top:parseInt(_w*0.13), left:parseInt(_w*0.50), zIndex:1}
        ];
        this.setUp();
    }
};
window.onload = function ()
{
    new ZoomPic("box");
};