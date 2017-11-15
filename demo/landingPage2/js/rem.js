initFont();
window.onresize=function(){
	initFont(); //初始字体占百分比
};


//wap页面随着屏幕变化而改变大小
function initFont(){
	var initWidth=document.getElementById("initRem").getAttribute("init");
	var winWidth=document.documentElement.clientWidth,fontSize=null;

	if(winWidth>=initWidth){
		fontSize=625;
	}else if(winWidth<320){
		fontSize=(625*320)/initWidth;
	}else{
		fontSize=(625*winWidth)/initWidth;
	}
	document.getElementsByTagName("html")[0].style.fontSize=fontSize+"%";
}



