    var now = new Date();
    var start = new Date();
    var end = new Date();
    var n = now.getDay();  
    end.setDate(now.getDate() - n + 8);      
var fnTimeCountDown = function(d, o){
	var f = {
		zero: function(n){
			var n = parseInt(n, 10);
			if(n > 0){
				if(n <= 9){
					n = "0" + n;	
				}
				return String(n);
			}else{
				return "00";	
			}
		},
		dv: function(){
		    d = end || Date.UTC(2016, 6, 6); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
			var future = new Date(d), now = new Date();
			//现在将来秒差值
			var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60, 
			dur_minisec = (Math.random())*1000,  pms = {
				minisec: "000",
				sec: "00",
				mini: "00",
				hour: "00",
				day: "00",
				month: "00",
				year: "0"
			};
			if(dur > 0){
				pms.minisec = f.zero(dur_minisec);
				pms.sec = f.zero(dur % 60);
				pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
				pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
				pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";
				//月份，以实际平均每月秒数计算
				//pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
				//年份，按按回归年365天5时48分46秒算
				//pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
			}
			return pms;
		},
		ui: function(){
			if(o.minisec){
				o.minisec.innerHTML = f.dv().minisec;
			}
			if(o.sec){
				o.sec.innerHTML = f.dv().sec;
			}
			if(o.mini){
				o.mini.innerHTML = f.dv().mini;
			}
			if(o.hour){
				o.hour.innerHTML = f.dv().hour;
			}
			if(o.day){
				o.day.innerHTML = f.dv().day;
			}
			//if(o.month){
//				o.month.innerHTML = f.dv().month;
//			}
//			if(o.year){
//				o.year.innerHTML = f.dv().year;
//			}
			setTimeout(f.ui,1);
		}
	};	
	f.ui();
};

var zxx = {
	$: function(id){
		return document.getElementById(id);	
	},
    futureDate: Date.UTC(end.getFullYear(), end.getMonth() + 1, end.getDate(), 12),
	obj: function(){
		return {
			minisec: zxx.$("minisec"),
			sec: zxx.$("sec"),
			mini: zxx.$("mini"),
			hour: zxx.$("hour"),
			day: zxx.$("day"),
			//month: zxx.$("month"),
			//year: zxx.$("year")
		}
	}
};
fnTimeCountDown(zxx.futureDate, zxx.obj());

document.getElementById("callBtn2").onclick = function() { 
lxb.call(document.getElementById("guesttel2")); 
var value1 = document.getElementById("guesttel2").value; 
_czc.push(['_trackEvent', '离线宝1', '无', value1, '1', 'div']); 
}; 

/*(function() {
document.addEventListener('DOMContentLoaded', function() {
var html = document.documentElement;
var windowWidth = html.clientWidth;
html.style.fontSize = windowWidth / 6.4 + 'px';
// 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';    
}, false);
})();*/