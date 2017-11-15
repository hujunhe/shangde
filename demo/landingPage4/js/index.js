$(function () {
    $("#submittel").click(function () {
      var vinCode = parseInt($.trim($("#vCode").val()));
        if ($("#tel").val() == "" || $("#tel").val().length < 11 || $("#tel").val().length > 11) {
            alert("您输入的手机号有误")
            return false;
        }
        if (vinCode.length === 0 || vinCode.length > 4 ) {
          alert("请填写正确的验证码");
          return false;
        }
        if(vinCode !== 1845){
          alert("请填写正确的验证码");
          return false;
        }
        tuiguang_message_open('messageForm1', callback, 1, 35);
        if ($("#tel").val() == "" || $("#tel").val().length < 11 || $("#tel").val().length > 11) {
            return false;
        }
        if ($('input[name=radio1]:checked').val() == "aa") {
            $(".modald").css('display', 'block');
            $("#modal_overlay").css('display','block');

        }
        else if ($('input[name=radio2]:checked').val() == "bb") {
            $(".modalb").css('display', 'block');
            $("#modal_overlay").css('display','block');
        }
        else if ($('input[name=radio3]:checked').val() == "ee") {
            $(".modale").css('display', 'block');
            $("#modal_overlay").css('display','block');
        }
        else if ($('input[name=radio4]:checked').val() == "cc") {
            $(".modalc").css('display', 'block');
            $("#modal_overlay").css('display','block');
        }
        else {
            $(".modalb").css('display', 'block');
            $("#modal_overlay").css('display','block');
        }
    });
    $("#submitgif").click(function () {
      var vinCode = parseInt($.trim($("#vCode1").val()));
      var tel = $.trim($("#tel1").val())
        if (tel == "" || tel.length < 11 || tel.length > 11) {
            alert("您输入的手机号有误")
            return false;
        }
        if (vinCode.length === 0 || vinCode.length > 4 ) {
          alert("请填写正确的验证码");
          return false;
        }
        if(vinCode !== 1845){
          alert("请填写正确的验证码");
          return false;
        }
        tuiguang_message_open('messageForm1', callback, 1, 35);
    });
    $(".phone").on("click",".abled",function(){
      var tel = $.trim($("#tel").val());
      if (tel.length !== 11) {
        alert("您输入的手机号有误");
        return false;
      }
      $.ajax({
        url: "http://gw.sunlands.com/tuiguang/ajax_tuiguang_message.action",
        data: {
          tel: tel,
          //填写手机号
          messageId: '141', //写死的id
          schoolId: '44', //写死的schoolId
          callback: 'callbackfunction'
        },
        method: "get",
        dataType: "jsonp",
        jsonp: "callbackfunction",
        success: function(data) {
        }
      });
    })

    $(".gift_phone").on("click",".abled1",function(){
      var tel = $.trim($("#tel1").val());
      if (tel.length !== 11) {
        alert("您输入的手机号有误");
        return false;
      }
      $.ajax({
        url: "http://gw.sunlands.com/tuiguang/ajax_tuiguang_message.action",
        data: {
          tel: tel,
          //填写手机号
          messageId: '141', //写死的id
          schoolId: '44', //写死的schoolId
          callback: 'callbackfunction'
        },
        method: "get",
        dataType: "jsonp",
        jsonp: "callbackfunction",
        success: function(data) {
        }
      });
    })
});
function callbackfunction(data){
  $("#getVcode").removeClass("abled")
  var html=JSON.stringify(data);
  var num = 59;
  var timer = setInterval(function(){
    if(num === 0){
      clearInterval(timer);
      $("#getVcode").html("点击获取验证码").addClass("abled");
    }else{
      num--;
      $("#getVcode").html(num);
    }
  },1000)
}
function callback(msg) {
    alert("恭喜您，信息已提交成功！");
    //追加短信,可以删除掉,如果要追加留言必须带上参数:&callback="+回调函数如:testBack可以为别的随便名称,但必须跟下面的名称一样
    $.ajax({
        url: encodeURI(encodeURI("http://w.sunlands.com/tuiguang/ajax_tuiguang_message.htm?tel=" + msg.phone + "&name=" + msg.name
            + "&messageId=" + msg.messageId + "&schoolId=" + msg.schoolId + "&callback=" + testBack)),
        type: "get",
        dataType: "jsonp",
        jsonp: testBack,//回调函名称必须有,和参数&callback="的值一样的
        success: function (data) {
        }
    });
}
//和追加留言一起的回调函数,和参数&callback="的值一样的
function testBack(msg) {
    //可以为空
}
