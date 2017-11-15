(function(doc, win) {
  //orientationchange : 判断手机是水平方向还是垂直方向，感应方向

  //doc ==》 document对象
  //doc.documentElement ==> 得到文档的根元素-->  <html>
  //之所以要得到文档的根元素，是为了计算网页所打开时屏幕的真实宽度
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      //320 是我们默认的手机屏幕
      //clientWidth 是我们页面打开时所得到的屏幕（可看见页面的真实宽度）宽度真实的宽度值
      //这两者相除得到一个放大或缩小的比例值
      //320 ip5 --> 20px
      //414 ip6s --> 25px;
      //width:2rem;
      docEl.style.fontSize = 50 * (clientWidth / 320) + 'px';
      //设置根元素font-size
    };
  /*600px
  20 * 600/320  -- >  [2 -- 3] 放大范围

  200/320 -- > [0.5 -- 0.1] 缩小*/
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);

//如果你不想进行一个响应式设计的开发，你可以直接把font-size写死

$(function() {
  $('.p1_word img').animate({
    opacity: 0
  }, 0, function() {

    $('.p1_word img').animate({
      opacity: 0
    }, 0, function() {

      $('.bg2').animate({
        opacity: 1
      }, 1000, function() {
        $('#array').show();
      });
    })
  });
  $(".fix-close").click(function() {
    $(".fixed").hide();
    $(".fixed2").hide();
    $(".fixed3").hide();
  })

  $("#scrollDiv").Scroll({
    line: 2,
    speed: 1500,
    timer: 3000
  });

  var num = 3268;
  var int = self.setInterval(function() {
    num++;
    $('.num').html(num);
  }, 500);
  var height = window.innerHeight;
  $(".p1,.bg2 img").css("height", height);
  $(".bg2").click(function() {
    $("html,body").animate({
      scrollTop: height
    }, 500);
  })
  $("#but1").click(function() {
    var vinCode = parseInt($.trim($("#vinCode").val()));
    console.log(vinCode);
    var tel = $("#tel1").val();
    if (tel.length === 0 || tel.length > 11) {
      alert("您输入的手机号有误");
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
    tuiguang_message_open('messageForm1', callback, 98, 35)
  })

  $(".btn").on("click",".abled",function(){

    var tel = $.trim($("#tel1").val());
    if (tel.length === 0 || tel.length > 11) {
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
})
function callbackfunction(data){
  $("#getVinCode").removeClass("abled")
  var html=JSON.stringify(data);
  var num = 59;
  var timer = setInterval(function(){
    if(num === 0){
      clearInterval(timer);
      $("#getVinCode").html("点击获取验证码").addClass("abled");
    }else{
      num--;
      $("#getVinCode").html(num);
    }
  },1000)
}

$.fn.extend({
  Scroll: function(opt, callback) {
    //������ʼ��
    if (!opt) var opt = {};
    var _this = this.eq(0).find("ul:first");
    var lineH = _this.find("li:first").height(), //��ȡ�и�
      line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10), //ÿ�ι�����������Ĭ��Ϊһ�������������߶�
      speed = opt.speed ? parseInt(opt.speed, 10) : 500, //�����ٶȣ���ֵԽ�����ٶ�Խ�������룩
      timer = opt.timer ? parseInt(opt.timer, 10) : 3000; //������ʱ�����������룩
    if (line == 0) line = 1;
    var upHeight = 0 - line * lineH;
    //��������
    scrollUp = function() {
      _this.animate({
        marginTop: upHeight
      }, speed, function() {
        for (i = 1; i <= line; i++) {
          _this.find("li:first").appendTo(_this);
        }
        _this.css({
          marginTop: 0
        });
      });
    }
    //�����¼�����
    _this.hover(function() {
      clearInterval(timerID);
    }, function() {
      timerID = setInterval("scrollUp()", timer);
    }).mouseout();
  }
})



function testBack(msg) {
  //����Ϊ��
};

function callback(msg) {
  var d = new Date();

  if (d.getSeconds() % 2 == 1) {
    $(".fixed").show();
    //$('.fix-gif').show();
    setTimeout(function() {

      $('.fix-word').show();
    }, 1000);
  } else {
    $(".fixed2").show();
    //$('.fix-gif').show();
    setTimeout(function() {
      $('.fix-word2').show();
    }, 1000);
  }
  $.ajax({
    url: encodeURI(encodeURI("http://w.sunlands.com/tuiguang/ajax_tuiguang_message.htm?tel=" + msg.phone + "&name=" + msg.name +
      "&messageId=" + msg.messageId + "&schoolId=" + msg.schoolId + "&callback=" + testBack)),
    type: "get",
    dataType: "jsonp",
    jsonp: testBack, //�ص������Ʊ�����,�Ͳ���&callback="��ֵһ����
    success: function(data) {}
  });


}
