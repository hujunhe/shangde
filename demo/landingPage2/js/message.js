//var basePath="http://localhost:8000/portal-war-tg/";
var basePath="http://lp.sunlands.com/";
//无弹出框验证
function tuiguang_message_open(messageForm,callback,messageId,schoolId){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	if(phone==""){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}else{
		 $.ajax({
			url: encodeURI(encodeURI(basePath+"/jsonpMessage.htm?msg.phone="+$("#"+messageForm).find("input[name='msg.phone']").val()+"&msg.messageId="+messageId+"&msg.schoolId="+schoolId+"&msg.field1="+$("#"+messageForm).find("input[name='msg.field1']").val()+"&msg.field2="+$("#"+messageForm).find("input[name='msg.field2']").val()+"&msg.field3="+$("#"+messageForm).find("input[name='msg.field3']").val()+"&msg.remark="+$("#"+messageForm).find("input[name='msg.remark']").val()+"&msg.email="+$("#"+messageForm).find("input[name='msg.email']").val()+"&msg.school_code="+$("#"+messageForm).find("input[name='msg.school_code']").val()+"&msg.message_type="+$("#"+messageForm).find("input[name='msg.message_type']").val()+"&msg.name="+$("#"+messageForm).find("input[name='msg.name']").val()+"&msg.project_code="+$("#"+messageForm).find("input[name='msg.project_code']").val()+"&callback="+callback)),
			type: "get",
			dataType: "jsonp",
		    jsonp: callback,
			success: function(data){
				if(data.status=='true'){
					var msg=new Object();
					msg.messageId=messageId;
					msg.schoolId=schoolId;
					msg.phone=$("#"+messageForm).find("input[name='msg.phone']").val();
					msg.name=$("#"+messageForm).find("input[name='msg.name']").val();
					msg.field1=$("#"+messageForm).find("input[name='msg.field1']").val();
					msg.field2=$("#"+messageForm).find("input[name='msg.field2']").val();
					msg.field3=$("#"+messageForm).find("input[name='msg.field3']").val();
					msg.officialName=$("#levelMessageForm").find("input[name='officialName']").val();
					msg.service=$("#loginForm").find("input[name='service']").val();
					msg.remark=$("#"+messageForm).find("input[name='msg.remark']").val();
					msg.email=$("#"+messageForm).find("input[name='msg.email']").val();
					msg.school_code=$("#"+messageForm).find("input[name='msg.school_code']").val();
					msg.message_type=$("#"+messageForm).find("input[name='msg.message_type']").val();
					msg.project_code=$("#"+messageForm).find("input[name='msg.project_code']").val();
					callback(msg);
				}else{
					$('.enterinput_one').val("验证失败!!!"); 
				}
			}
		});
	}
}

//提供跨域请求留言和发送短信
function tuiguang_message_jsonp(messageForm,callback,messageId,schoolId){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	if(phone==""){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}else{
		 $.ajax({
			url: encodeURI(encodeURI(basePath+"/jsonpMessage.htm?msg.phone="+$("#"+messageForm).find("input[name='msg.phone']").val()+"&msg.messageId="+messageId+"&msg.schoolId="+schoolId+"&msg.field1="+$("#"+messageForm).find("input[name='msg.field1']").val()+"&msg.field2="+$("#"+messageForm).find("input[name='msg.field2']").val()+"&msg.field3="+$("#"+messageForm).find("input[name='msg.field3']").val()+"&msg.remark="+$("#"+messageForm).find("input[name='msg.remark']").val()+"&msg.email="+$("#"+messageForm).find("input[name='msg.email']").val()+"&msg.school_code="+$("#"+messageForm).find("input[name='msg.school_code']").val()+"&msg.message_type="+$("#"+messageForm).find("input[name='msg.message_type']").val()+"&msg.name="+$("#"+messageForm).find("input[name='msg.name']").val()+"&msg.project_code="+$("#"+messageForm).find("input[name='msg.project_code']").val()+"&callback="+callback)),
			type: "get",
			dataType: "jsonp",
		    jsonp: callback,
			success: function(data){
				if(data.statusType!='false'){
					var msg=new Object();
					msg.messageId=messageId;
					msg.schoolId=schoolId;
					msg.phone=$("#"+messageForm).find("input[name='msg.phone']").val();
					msg.name=$("#"+messageForm).find("input[name='msg.name']").val();
					msg.field1=$("#"+messageForm).find("input[name='msg.field1']").val();
					msg.field2=$("#"+messageForm).find("input[name='msg.field2']").val();
					msg.field3=$("#"+messageForm).find("input[name='msg.field3']").val();
					msg.officialName=$("#levelMessageForm").find("input[name='officialName']").val();
					msg.service=$("#loginForm").find("input[name='service']").val();
					msg.remark=$("#"+messageForm).find("input[name='msg.remark']").val();
					msg.email=$("#"+messageForm).find("input[name='msg.email']").val();
					msg.school_code=$("#"+messageForm).find("input[name='msg.school_code']").val();
					msg.message_type=$("#"+messageForm).find("input[name='msg.message_type']").val();
					msg.project_code=$("#"+messageForm).find("input[name='msg.project_code']").val();
					callback(msg);
				}else{
					$('.enterinput_one').val("验证失败!!!"); 
				}
			}
		});
	}
}