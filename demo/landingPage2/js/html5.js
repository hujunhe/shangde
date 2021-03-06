
<!doctype html>
<html lang="zh-cn">
<head>
    

    	

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<meta name="description" content="尚德机构,是中国最大的职业教育机构之一,致力于提高学员职场竞争力.尚德机构的培训课程和服务范围广阔,从职业资格认证、技能培训,到与职业相关的就业服务,客户遍及中国北方多个大中城市,已经培训10余万名学员.目前,尚德机构标准化的课程体系,已成为职业培训领域的模板.">
	
	<meta name="keywords"  content="尚德机构,尚德,自考,成人高考,成考,网教,成教,远程,函授,电大,文凭,学历,学位,本科,1980,专科,升本,接本,续本,转本,大专,大本,成人教育"/>
	
	<meta name="author" content="Piaoyis,me@Piaoyis.com">
	<input type="hidden" id="ctx" value=""/>
	<input type="hidden" name="basePath" value="http://lp.sunlands.com" id="basePath"/>
	<link rel="stylesheet" type="text/css" href="http://lp.sunlands.com/css/share/nav.css">
	<link rel="stylesheet" type="text/css" href="http://lp.sunlands.com/css/login.css">
	<script type="text/javascript" src="http://lp.sunlands.com/js/jquery.min.js"></script>
	<script type="text/javascript" src="http://lp.sunlands.com/js/jquery.include.js"></script>
	<script src="http://lp.sunlands.com/js/jquery.cookie.js" type="text/javascript"></script>
	<script type="text/javascript" src="http://lp.sunlands.com/js/login.js"></script>
	<script type="text/javascript">
	   var basePath="http://lp.sunlands.com";
	   var sdObj={
			  open:function(href){
				  var win=window.open('_blank');
				  win.location=href;  
			  }    
	   }
    </script>
	<title>尚德机构 -- 职业教育领跑者</title>
	 <link rel="stylesheet" type="text/css" href="/css/region-css/region.css">
	 <link rel="stylesheet" type="text/css" href="/css/error.css">
    <script type="text/javascript" src="/js/jquery.easing.min.js"></script>
    <style type="text/css">
	  .nav_wrap{width:100%; background: url(/images/pro_img/pic13.png) repeat-x;} 
	</style>
</head>
<body>
   


 <input type="hidden" id="loginMark" value=""/>
 
  



     <script type="text/javascript" src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js" charset="utf-8"></script>
     <!-- 猜地区 -->
     <script>
     	$( window ).on('load',function () {
     		$("#mimi").height($(document).height() );
     		$('.guess_area').fadeIn(200);
     	})
     </script>
	 <div class="guess_area" id="guess_area" style="display:none">
	      <span><img src="/img/region-Img/img3.png" onclick="closePos();"></span>
	      <p>我们猜您可能在<img src="/img/region-Img/img0.png"><a id="area"></a>地区</p>
	      <div class="btn_wrap">
	          <div class="gussbtn_le" onclick="ensurePos();">是的</div>
	          <div class="gussbtn_ri"><a href="/region.htm">不是,选择其他地区</a></div>
	      </div>
	 </div>
	 <div class="mimi" id="mimi"></div>
	 <script type="text/javascript">
		 var city=remote_ip_info.city;
		 if(!(city&&city!='null')){
			 closePos();
		 }else{
		     $("#area").text(city);
		 }
		 var nowCity='广州';
	     function ensurePos(){
	    	 if(city&&city!=nowCity){
	    	     $.ajax({
	 				url:'findCityByInputValue.htm',
	 				data:{"inVal":city},
	 				type:'post',
	 				dataType:'json',
	 				async:true,
	 				success:function(data){
	 					 if(data.success){
	 						 var cityList=data.cityList;
	 						 if(cityList.length>0){
	 							window.location.href="index.htm?sc="+cityList[0].id;
	 						 }
	 					 }
	 				}
	 			}); 
	    	 } 
	    	 closePos();
	     }
	     function closePos(){
	    	 $("#mimi").hide();
	    	 $("#guess_area").hide(); 
	     } 
	 </script>	



 
<!-- 导航 开始 -->
<div class="wrap_nav son_demo">
		<div class="nav_cen son_cen" id="header_nav">
			<div class="nav_logoson"></div>
			<!--  img src="../img/index-Img/zong_zi.gif" style="float:left;margin-top:-10px;width:66px;margin-right:10px;"-->
			<ul class="nav_select son_select">
				<li><a href="javascript:;" style="cursor:default;text-decoration:none;color:#000;font-weight: bold;">广州</a></li>
				<li>
					<a href="http://lp.sunlands.com/region.htm" class="hov_goal">切换地区</a>
				</li>
			</ul>
			<ul class="nav_secen pad">
				<li><a href="http://lp.sunlands.com/index.htm">首页</a></li>
				<li ><a href="http://lp.sunlands.com/category/indexWebCategory.htm" id="allcourseNav">全部课程</a></li>
				<li><a href="http://lp.sunlands.com/tiku/indexWebTiku.htm">免费题库</a></li>
				<li><a href="http://lp.sunlands.com/trial/indexWebTrial.htm">免费体验区</a></li>
				
				<li><a href="http://yi.sunlands.com" target="_blank">个人中心</a></li>
				
			</ul>
			
			
				<ol class="log" id="login_register">
					<li><a href="javascript:;">登录</a></li><li class="mar">|</li>
					<li><a href="javascript:;">注册</a></li>
				</ol>
			
		</div>
	</div> 
	 <input id="userParam"  type="hidden" value="50938574543"/>
	
	  
	<!-- 注册登录 -->
	<div class="shade" id="shade"></div>
	<div class="user_log" id="user_log">
		<div class="del_ben" id="close"><img src="http://lp.sunlands.com/img/index-Img/del.png"></div>
		<form action="" id="registerForm">
			<input type="hidden" name="number" id="number" value="" /> 
			<div class="new_enroll">
				<h1>新用户注册</h1>
				<div class="phone_wrap clearfix">
					<p class="no-show" id="error_register"><span><img src="http://lp.sunlands.com/img/index-Img/pic31.gif"></span>请输入手机号</p>
					<input type="text" name="mobile" value="" id="mobile" placeholder="手机号" class="on_pche"/>
				</div>
				<div class="phone_wrap mar_mix">
					<div class="cover" id="cover"></div>
					<input type="password" nama="password" value="" id="password" placeholder="密&nbsp;&nbsp;码"/>
				</div>
				<div class="verify_wrap" id="verify_wrap">
					<a href="javascript:;" style="font-size: 12px; line-height: 40px; color: #fff;">获取验证码</a>
					<div class="input_wr" id="input_wr">
						<input type="text" name="mobile_code" value="" id="mobile_code" placeholder="验证码" />
					</div>
				</div>
				<div id="voiceVcode" style="float: right; width: 242px; line-height:26px;margin-right:25px;color:#666666;display: none;">如果长时间未收到，请点击这里<a href="javascript:void(0);"  style="color: #2a75bb;">获取语音验证</a></div>
				<div class="free_btn" style="clear: both;" id="regisger_submit" onclick="_hmt.push(['_trackEvent', 'register_login', 'register', '','']);">免费注册</div>
			</div>
		</form>
		<input type="hidden" name="personUrl" id="personUrl" value='http://yi.sunlands.com/yzz-portal-war' /> 
		<form action="" id="loginForm">
		    <input type="hidden" name="casUrl" id="casUrl" value='http://passport.sunlands.com' /> 
		     
			<input type="hidden" name="service" id="service" value="http://lp.sunlands.com/error.htm" />
			<input type="hidden" name="auto" id="auto" value="true" /> 
			<div class="new_enroll old_user">
				<h1>老用户登录</h1>
				<div class="phone_wrap clearfix">
					<p class="deng_show" id="error_login"><span><img src="http://lp.sunlands.com/img/index-Img/pic31.gif"></span>请使用手机号登录</p>
					<input type="text" name="username" value="" id="username" placeholder="手机号" class="tw_pche" style="width:295px;padding-left:10px;"/>
				</div>
				<div class="phone_wrap mar_mix">
					<input type="password" name="password" value="" id="password" placeholder="密&nbsp;&nbsp;码" class="padd-no" style="width:295px; padding-left:10px;"/>
				</div>
				<h4 style="float:right;margin-top: 42px;margin-right:6px;"><a href="http://passport.sunlands.com/showForgetPage.action" style="color:#2A75BB" target="_blank">忘记密码?</a></h4>
				<div class="immediately_btn" id="login_submit" onclick="_hmt.push(['_trackEvent', 'register_login', 'login', '','']);">立即登录</div>
				<h5 style="color: #2A75BB; display: inline;position: absolute;left: 34px;top: 219px;"><input type="checkbox" style="margin-right:5px;" checked="checked" id="che"/>记住密码</h5>
			</div>
		</form>
	</div>
	
	
		
	
	<script type="text/javascript">
		$(function(){
			// 用户头像
	        $('.nav_cen p').click(function(){
	            $('#usernav').fadeToggle(300);
	        });
	        $('.user-nav-top > i').click(function(){
	            $('#usernav').fadeOut(300);
	        });
	        
	        $(".nav_logoson").click(function(){
	        	window.location.href="http://www.sunlands.com";
	        });
		});
	</script>	


<div class="baocuo">
   <a href="http://lp.sunlands.com" class="shouye"></a>
   
   		<a href="javascript:history.go(-1);" class="shuaxin"></a>
   
   
   <div style="display: none"></div>
</div>

 
<link rel="stylesheet" type="text/css"
	href="http://lp.sunlands.com/css/share/footer.css">
<!-- footer 开始 -->
<div class="wrap_foo">
	<div class="footer_cen">
		<h1>尚德机构，学习是一种信仰!</h1>
		<div class="body_cen">
			<div class="boy_le">
				<ul>
					<li><a href="/intro/intro.htm" target="_blank">关于我们</a></li>
					<li><a href="javascript:;">隐私条款</a></li>
					<li><a href="javascript:;">联系我们</a></li>
					<li><a href="/intro/rule.htm" target="_blank">法律声明</a></li>
					<li><a href="javascript:;">帮助中心</a></li>
					<li><a href="/intro/indexWebNews.htm" target="_blank">尚德新闻</a></li>
					<li><a href="/intro/indexWebMedia.htm" target="_blank">尚德媒体</a></li>
				</ul>
				<h2>友情链接</h2>
				<ol>
					<li><a href="http://www.duia.com/login" target="_blank">对啊网</a></li>
					<li><a
						href="http://www.haixue.com/indexCourse/indexLogin.do?r=0"
						target="_blank">嗨学网</a></li>
					<li><a href="http://3g.sunlands.com" target="_blank">悦城3G</a></li>
					<li><a href="http://www.huluo.com" target="_blank">狐逻学院</a></li>
				</ol>
			</div>
			<div class="boy_ri">
				<p>© 2001-2014北京尚佳崇业教育科技有限公司
					<a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">京ICP备14002947号-3</a>&nbsp;&nbsp;|&nbsp;&nbsp;京ICP证140312号</p>
				<p>公安备案号<a href="javacript:;" target="_blank"></a>&nbsp;&nbsp;|&nbsp;&nbsp;京公网安备11010502027412</p>
					
				<!-- <div class="brand"><script src="http://kxlogo.knet.cn/seallogo.dll?sn=e14102111010755254vsze000000&size=0"></script></div> -->
				<div class="brand">
					<span
						style="display: inline-block; position: relative; width: auto;"><a
						style="display: inline-block;" kx_type="图标式" target="_blank"
						tabindex="-1" id="kx_verify"
						href="https://ss.knet.cn/verifyseal.dll?sn=e14102111010755254vsze000000&amp;ct=df&amp;a=1&amp;pa=0.5568104213733962"
						target="_blank"><img alt="可信网站" oncontextmenu="return false;"
							style="border: none; border-radius: 6px;"
							src="http://rr.knet.cn/static/images/logo/cnnic.png"></a></span>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 	<script type="text/javascript">
	   var _hmt = _hmt || [];
	   (function() {
	     var hm = document.createElement("script");
	     hm.src = "//hm.baidu.com/hm.js?23d4354d50ecfa27da8d895d0e2cb170";
	     var s = document.getElementsByTagName("script")[0]; 
	     s.parentNode.insertBefore(hm, s);
	   })();
    </script> -->
<script>
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "//hm.baidu.com/hm.js?042f1b4fd18a22ee217f0673c4c1b92f";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();
</script>
</body>
</html>    
        
   