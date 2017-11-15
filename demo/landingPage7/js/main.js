$(function() {
  setupManifest();
  startPreload();
});
var canvas = document.getElementById("myCanvas");
var stage = new createjs.Stage(canvas);

var manifest;
var preload;
var progressText = new createjs.Text("", "20px Arial", "#dd4814");
progressText.x = 125 - progressText.getMeasuredWidth() / 2;
progressText.y = 20;
stage.addChild(progressText);
stage.update();

//定义相关JSON格式文件列表
function setupManifest() {
  manifest = [{
      "src": "img/company_back.jpg"
    },
    {
      "src": "img/companyPic.png"
    },
    {
      "src": "img/connection1.jpg"
    },
    {
      "src": "img/fourPic_back.jpg"
    },
    {
      "src": "img/logo.jpg"
    },
    {
      "src": "img/pics.png"
    },
    {
      "src": "img/promise.png"
    },
    {
      "src": "img/school_add.png"
    },
    {
      "src": "img/school_back.jpg"
    },
    {
      "src": "img/schoolPic.jpg"
    },
    {
      "src": "img/students.jpg"
    },
    {
      "src": "img/swipe1_back.jpg"
    },
    {
      "src": "img/swipe2_back.jpg"
    },
    {
      "src": "img/swipe2_word.png"
    },
    {
      "src": "img/swipe3_back.jpg"
    },
    {
      "src": "img/swipe3_word.png"
    },
  ];
}

//开始预加载
function startPreload() {
  preload = new createjs.LoadQueue();
  //注意加载音频文件需要调用如下代码行
  preload.installPlugin(createjs.Sound);
  preload.on("fileload", handleFileLoad);
  preload.on("progress", handleFileProgress);
  preload.on("complete", loadComplete);
  preload.on("error", loadError);
  preload.loadManifest(manifest);

}

//处理单个文件加载
function handleFileLoad(event) {
  console.log("文件类型: " + event.item.type);
  if (event.item.id == "logo") {
    console.log("logo图片已成功加载");
  }
}

//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
  console.log("加载出错！", evt.text);
}

//已加载完毕进度
function handleFileProgress(event) {
  var html = preload.progress * 100 | 0;
  $("#jindu").html(html);
}

//全度资源加载完毕
function loadComplete(event) {
  console.log("已加载完毕全部资源");
  $(".preLoad").fadeOut();
  start();
}

function start() {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
  });
  $(".mainBody").scroll(function() {
    if (this.scrollTop > 200) {
      $(".rotateBox").addClass("small");
      $(".big").hide();
      $(".smallIcon").show();
    } else {
      $(".rotateBox").removeClass("small");
      $(".smallIcon").hide();
      $(".big").show();
    }
  });
  var url = this.location.href;
  $("form #field3").each(function(n) {
    $("form #field3").get(n).value = url;
  });
  $("#but1").click(function() {
    var vinCode = parseInt($.trim($("#vinCode").val()));
    console.log(vinCode);
    var tel = $("#tel1").val();
    if (tel.length === 0 || tel.length > 11) {
      alert("您输入的手机号有误");
      return false;
    }
    if (vinCode.length === 0 || vinCode.length > 4) {
      alert("请填写正确的验证码");
      return false;
    }
    if (vinCode !== 799765) {
      alert("请填写正确的验证码");
      return false;
    }
    tuiguang_message_open('messageForm1', callback, 98, 35);
  });
  $(".content").on("click", ".abled", function() {
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
        messageId: '142', //写死的id
        schoolId: '74', //写死的schoolId
        callback: 'callbackfunction'
      },
      method: "get",
      dataType: "jsonp",
      jsonp: "callbackfunction",
      success: function(data) {}
    });
  });
  $(".close").click(function() {
    $(".alertBox").fadeOut();
  });
  $(".signIn").click(function() {
    $(".alertBox").fadeIn();
  });
}

function callbackfunction(data) {
  $("#getVinCode").removeClass("abled");
  var html = JSON.stringify(data);
  var num = 59;
  var timer = setInterval(function() {
    if (num === 0) {
      clearInterval(timer);
      $("#getVinCode").html("点击获取验证码").addClass("abled");
    } else {
      num--;
      $("#getVinCode").html(num);
    }
  }, 1000);
}

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

function testBack() {
  alert("注册成功");
}
