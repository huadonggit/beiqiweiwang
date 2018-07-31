
$(function(){
    $('.d_year_part li .j-btn').click(function(){
        var _li=$(this).closest("li");
        var num=_li.index();
        _li.addClass('d_active').siblings().removeClass('d_active');
        $('.newsBox').eq(num).addClass('on').siblings(".newsBox").removeClass('on');
    })
    $(".d_year .d_right").click(function(){
        var year = $(".d_year_part li");
        var _this = $(".d_year_part li.d_active");
        var _this_index = _this.index();
        if(_this_index<(year.length-1)){
            _this.next().addClass("d_active").siblings("li").removeClass("d_active");
            $('.newsBox').eq(_this_index+1).addClass('on').siblings(".newsBox").removeClass('on');
        } else{
            $('.d_year_part li .j-btn').eq(0).trigger('click');
        }
    })
    $(".d_year .d_left").click(function(){
        var year = $(".d_year_part li");
        var _this = $(".d_year_part li.d_active");
        var _this_index = _this.index();
        if(_this_index>0){
            _this.prev().addClass("d_active").siblings("li").removeClass("d_active");
            $('.newsBox').eq(_this_index-1).addClass('on').siblings(".newsBox").removeClass('on');
        } else{
            $('.d_year_part li .j-btn').eq(year.length-1).trigger('click');
        }
    })

});


/*
window.onload=function(){
		/!*
		tab('j-tab','j-left','j-right');
		
		function tab(sName,sLLL,sRRR){
			var aFu=document.getElementsByClassName(sName);
			var aaLL=document.getElementsByClassName(sLLL);
			var aaRR=document.getElementsByClassName(sRRR);
			for (var i=0; i<aFu.length; i++){
				_tab(aFu[i],aaLL[i],aaRR[i]);
			}
		}
		*!/
		
		var oDiv1=document.getElementById('tab');
		if(oDiv1){
			_tab(oDiv1,'d_left','d_right');
		}
		var oDiv2=document.getElementById('d_tab2');
		if(oDiv2){
			_tab1(oDiv2,'d_left2','d_right2');
		}
		var oDiv3=document.getElementById('d_tab3');
		if(oDiv3){
			_tab1(oDiv3,'d_left3','d_right3');
		}

		
		function _tab(fu,l,r){
			// var aBtn=fu.getElementsByClassName('j-btn');
			var aBtn=getByClass(fu, 'j-btn');
			// var aBox=fu.getElementsByClassName('d_box');
			for(var i=0; i<aBtn.length; i++){
				(function(index){
					aBtn[i].onclick=function(){
						now=index;
						ttb();
					};
				})(i);
			}
			//下一个
			var oR=document.getElementById(r);
			var now=0;
			
			oR.onclick=next;
			//上一个
			var oL=document.getElementById(l);
			oL.onclick=function(){
				now--;
				if(now==-1){
					now=aBtn.length-1;
				}
				ttb();
			};
			
			//自动播放
			// var timer=setInterval(next,200000);
			// fu.onmouseover=function(){
			// 	clearInterval(timer);
			// };
			// fu.onmouseout=function(){
			// 	timer=setInterval(next,200000);
			// };
			
			function next(){
				now++;
				if(now==aBtn.length){
					now=0;
				}
				ttb();
			};
			function ttb(){
				for(var i=0; i<aBtn.length; i++){
					aBtn[i].className='j-btn';
					// aBox[i].className='d_box';
				}
				aBtn[now].className='j-btn d_active';
				// aBox[now].className='d_box d_active';
			}
		}
		function _tab1(fu,l,r){
			// var aBtn=fu.getElementsByClassName('j-btn');
			// var aBox=fu.getElementsByClassName('d_box');
			var aBox=getByClass(fu, 'd_box');
			// for(var i=0; i<aBox.length; i++){
			// 	(function(index){
			// 		aBtn[i].onclick=function(){
			// 			now=index;
			// 			ttb();
			// 		};
			// 	})(i);
			// }
			//下一个
			var oR=document.getElementById(r);
			var now=0;
			
			oR.onclick=next;
			//上一个
			var oL=document.getElementById(l);
			oL.onclick=function(){
				now--;
				if(now==-1){
					now=aBox.length-1;
				}
				ttb();
			};
			
			//自动播放
			// var timer=setInterval(next,200000);
			// fu.onmouseover=function(){
			// 	clearInterval(timer);
			// };
			// fu.onmouseout=function(){
			// 	timer=setInterval(next,200000);
			// };
			
			function next(){
				now++;
				if(now==aBox.length){
					now=0;
				}
				ttb();
			};
			function ttb(){
				for(var i=0; i<aBox.length; i++){
					// aBtn[i].className='j-btn';
					aBox[i].className='d_box clearfix';
				}
				// aBtn[now].className='j-btn d_active';
				aBox[now].className='d_box clearfix d_active';
			}
		}
		

		function getByClass(oParent,sName){
			if(oParent.getElementsByClassName){
				return oParent.getElementsByClassName(sName);
			}else{
				var aRes=[];
				var aChild=oParent.getElementsByTagName('*');
				
				for(var i=0; i<aChild.length; i++){
					var aTmp=aChild[i].className.split(' ');
					
					for(var j=0; j<aTmp.length; j++){
						if(aTmp[j] == sName){
							aRes.push(aChild[i]);
						}
					}
				}
				return aRes;
			}
			
		}
		
	};*/
