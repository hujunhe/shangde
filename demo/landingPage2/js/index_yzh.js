$("body").css("background","#2477ef");var App=function($item){this._$app=$item;this._$pages=this._$app.find(".page");this.$currentPage=this._$pages.eq(0);this._isFirstShowPage=true;this._isInitComplete=false;this._isDisableFlipPage=false;this._isDisableFlipPrevPage=false;this._isDisableFlipNextPage=false;var theClass=this;var $win=$(window);(function(){$win.on("scroll.elasticity",function(e){e.preventDefault()}).on("touchmove.elasticity",function(e){e.preventDefault()});$win.delegate("img","mousemove",function(e){e.preventDefault()})})();$win.on("load",function(e){var currentPage=null,activePage=null;var triggerLoop=false;var startX=0,startY=0,moveDistanceX=0,moveDistanceY=0,isStart=false,isNext=false,isFirstTime=true;theClass._$app.on("mousedown touchstart",function(e){var e=event||e;if(theClass._isDisableFlipPage){return}currentPage=theClass._$pages.filter(".z-current").get(0);activePage=null;if(currentPage){isStart=true;isNext=false;isFirstTime=true;moveDistanceX=0;moveDistanceY=0;if(e.type=="mousedown"){startX=e.pageX;startY=e.pageY}else{startX=e.touches[0].pageX;startY=e.touches[0].pageY}currentPage.classList.add("z-move");currentPage.style.webkitTransition="none"}}).on("mousemove touchmove",function(e){var e=event||e;if(isStart&&(activePage||isFirstTime)){if(e.type=="mousemove"){moveDistanceX=e.pageX-startX;moveDistanceY=e.pageY-startY}else{moveDistanceX=e.touches[0].pageX-startX;moveDistanceY=e.touches[0].pageY-startY}if(Math.abs(moveDistanceY)>Math.abs(moveDistanceX)){if(moveDistanceY>0){if(theClass._isDisableFlipPrevPage){return}if(isNext||isFirstTime){isNext=false;isFirstTime=false;if(activePage){activePage.classList.remove("z-active");activePage.classList.remove("z-move")}if(currentPage.previousElementSibling&&currentPage.previousElementSibling.classList.contains("page")){activePage=currentPage.previousElementSibling}else{if(triggerLoop){activePage=theClass._$pages.last().get(0)}else{activePage=false}}if(activePage&&activePage.classList.contains("page")){activePage.classList.add("z-active");activePage.classList.add("z-move");activePage.style.webkitTransition="none";activePage.style.webkitTransform="translateY(-100%)";$(activePage).trigger("active");currentPage.style.webkitTransformOrigin="bottom center"}else{currentPage.style.webkitTransform="translateY(0px) scale(1)";activePage=null}}else{currentPage.style.webkitTransform="scale("+(window.innerHeight/(window.innerHeight+moveDistanceY)).toFixed(3)+")";activePage.style.webkitTransform="translateY(-"+(window.innerHeight-moveDistanceY)+"px)"}}else{if(moveDistanceY<0){if(theClass._isDisableFlipNextPage){return}if(!isNext||isFirstTime){isNext=true;isFirstTime=false;if(activePage){activePage.classList.remove("z-active");activePage.classList.remove("z-move")}if(currentPage.nextElementSibling&&currentPage.nextElementSibling.classList.contains("page")){activePage=currentPage.nextElementSibling}else{activePage=theClass._$pages.first().get(0);triggerLoop=true}if(activePage&&activePage.classList.contains("page")){activePage.classList.add("z-active");activePage.classList.add("z-move");activePage.style.webkitTransition="none";activePage.style.webkitTransform="translateY("+window.innerHeight+"px)";$(activePage).trigger("active");currentPage.style.webkitTransformOrigin="top center"}else{currentPage.style.webkitTransform="translateY(0px) scale(1)";activePage=null}}else{currentPage.style.webkitTransform="scale("+((window.innerHeight+moveDistanceY)/window.innerHeight).toFixed(3)+")";activePage.style.webkitTransform="translateY("+(window.innerHeight+moveDistanceY)+"px)"}}}}}}).on("mouseup touchend",function(e){if(isStart){isStart=false;if(activePage){theClass._isDisableFlipPage=true;currentPage.style.webkitTransition="-webkit-transform 0.4s ease-out";activePage.style.webkitTransition="-webkit-transform 0.4s ease-out";if(Math.abs(moveDistanceY)>Math.abs(moveDistanceX)&&Math.abs(moveDistanceY)>100){if(isNext){currentPage.style.webkitTransform="scale(0.2)";activePage.style.webkitTransform="translateY(0px)"}else{currentPage.style.webkitTransform="scale(0.2)";activePage.style.webkitTransform="translateY(0px)"}if($(activePage).index()==1){$("ul.m-cascadingTeletex").addClass("z-viewArea");$(".u-guidePrev, .u-guideNext").css("display","block")}else{$("ul.m-cascadingTeletex").removeClass("z-viewArea");$(".u-guidePrev, .u-guideNext").css("display","none")}if($(activePage).index()==0){$("body").css("background-color","#2477ef")}else{if($(activePage).index()==1){$("body").css("background-color","#2477ef")}else{if($(activePage).index()==2){$("body").css("background-color","#84a4ff")}else{if($(activePage).index()==3){$("body").css("background-color","#84a4ff")}else{if($(activePage).index()==4){$("body").css("background-color","#84a4ff")}else{if($(activePage).index()==5){$("body").css("background-color","#84a4ff")}else{if($(activePage).index()==6){$("body").css("background-color","#84a4ff")}else{if($(activePage).index()==7){$("body").css("background-color","#84a4ff")}else{if($(activePage).index()==8){$("body").css("background-color","#ff7809")
}else{if($(activePage).index()==9){$("body").css("background-color","#ffa248")}else{if($(activePage).index()==9){$("body").css("background-color","#ffa248")}}}}}}}}}}}setTimeout(function(){activePage.classList.remove("z-active");activePage.classList.remove("z-move");activePage.classList.add("z-current");currentPage.classList.remove("z-current");currentPage.classList.remove("z-move");theClass._isDisableFlipPage=false;theClass.$currentPage=$(activePage).trigger("current");$(currentPage).trigger("hide")},500)}else{if(isNext){currentPage.style.webkitTransform="scale(1)";activePage.style.webkitTransform="translateY(100%)"}else{currentPage.style.webkitTransform="scale(1)";activePage.style.webkitTransform="translateY(-100%)"}setTimeout(function(){activePage.classList.remove("z-active");activePage.classList.remove("z-move");theClass._isDisableFlipPage=false},500)}}else{currentPage.classList.remove("z-move")}}})})};$(function(){var audio1=document.getElementById("music");$(".u-globalAudio").on("click",function(){if($(this).hasClass("z-play")){$(this).removeClass("z-play").addClass("z-pause");_pause()}else{$(this).removeClass("z-pause").addClass("z-play");_play()}});function _play(){audio1.play()}function _pause(){audio1.pause()}});$(function(){var bid=$("#backgroundid").val();var pageUrl=$("#pageImg").val();var isrageffect=$("#isrageffect").val();if(isrageffect<1){var app=new App($("body"))}$(".leftLayerTrigger").on("touchstart",function(e){var e=event||e;x=e.touches[0].pageX}).on("touchmove",function(e){var _this=$(this).eq(0);var e=event||e;moveDistanceX=e.touches[0].pageX-x;if(moveDistanceX<-200&&moveDistanceX!=0){console.log(moveDistanceX);$(".u-guideTop").addClass("noOp");var othPath=$(this).find(".othPath").val();$(".leftLayerTrigger").find(".leftLayer").empty();$(this).find(".leftLayer").append('<img class="close-icon" onclick="closeImage(this)" src="Close-Icon.png"><iframe width="100%" height="100%" src="'+othPath+'" frameborder=0 allowfullscreen></iframe>	');_this.find(".leftLayer").animate({"left":0+"px","opacity":"1","display":"block"})}})});function closeImage(obj){$(obj).parent(".leftLayer").stop().animate({"left":"100%","opacity":0,"display":"none"}).empty();$(".u-guideTop").removeClass("noOp")}function aa(data){this.removeClass("op");$("#i_"+data).show();$("#d_"+data).show()};