$(function() {
  startPreload();
  //显示输入弹窗
  $(".lotteryBtn").click(function() {
    $(".subCellphoneMask").show();
  });
  //获得中奖列表
  (function() {
    $.ajax({
      type: 'GET', //这里用GET
      url: 'https://smallprogram.sunlands.com/xueli/api/getprizelist.php',
      dataType: 'jsonp', //类型
      data: {
        r: Math.random()
      },
      jsonp: 'callback', //jsonp回调参数，必需
      async: false,
      success: function(result) { //返回的json数据
        if (result.status == "true") {
          var html = '';
          for (var i = 0; i < result.prizelist.length; i++) {
            html += '<li>手机号:' + result.prizelist[i].mobile + '&nbsp;' + result.prizelist[i].name + '</li>';
          }
          $(".prizeList").html(html);
          var scrollObj = document.getElementById("js_scrollList");
          scroll({
            obj: scrollObj,
            direction: "top",
            ele: "ul",
            time: 50 //速度，单位越大速度越慢
          });
        } else
          alert(result.code);
      },
      timeout: 3000
    });
  })();
  //发送短信验证码
  $("#getVcode").click(function() {
    var _this = $(this);
    $.ajax({
      type: 'GET', //这里用GET
      url: 'https://smallprogram.sunlands.com/xueli/api/sendverificationcode.php',
      dataType: 'jsonp', //类型
      data: {
        phone: $("#tel").val(), //这里填手机号
        r: Math.random()
      },
      jsonp: 'callback', //jsonp回调参数，必需
      async: false,
      success: function(result) { //返回的json数据
        if (result.status == "true")
          alert("短信已发送!");

        else
          alert(result.code);
      },
      timeout: 3000
    });
  });
  $("#js_getLottery").click(function() {
    var _this = $(this);
    if (_this.attr('data-on') === "on") {
      $.ajax({
        type: 'GET', //这里用GET
        url: 'https://smallprogram.sunlands.com/xueli/api/drawprize.php',
        dataType: 'jsonp', //类型
        data: {
          phone: $("#tel").val(), //这里填手机号
          code: $("#checkVcode").val(), //这里填验证码
          r:Math.random()
        },
        jsonp: 'callback', //jsonp回调参数，必需
        async: false,
        success: function(result) { //返回的json数据
          if (result.status == "true") {
            alert("您的奖品ID：" + result.prize + "。领奖码:" + result.giftcode + "。领奖名:" + result.name);
            _this.attr("data-on", 'off');
            $(".subCellphoneMask").hide();
            var prize = result.prize;
            var deg = 360 * 4 + prize * 45 + 22.5;
            var style = document.getElementById("dynamic")
            style.innerHTML = '@keyframes _rotate{0%{transform:rotate(0deg);}100%{transform:rotate(' + deg + 'deg);}}@-webkit-keyframes _rotate{0%{transform:rotate(0deg);}100%{transform:rotate(' + deg + 'deg);}}';
            $('.rotateBg').addClass("ani");
            $('.lotteryBtn').find("img").removeClass("animate");
            $(".lotteryBtn").off();
            setTimeout(function() {
              $(".lotteryBtn").click(function() {
                alert("抽过奖了");
              });
              $(".showPrize").html(result.name);
              $(".prizeCode").html(result.giftcode);
              $(".alertBoxMask").show();
            }, 8000)

          } else {
            if (result.code == "200") {
              alert("您已经抽过奖了。");
              if (result.prize == 0)
                alert("未中奖");
              else
              $(".subCellphoneMask").hide();
                $(".showPrize").html(result.name);
                $(".prizeCode").html(result.giftcode);
                $(".alertBoxMask").show();
            } else
              alert(result.code);
          }
        },
        timeout: 3000
      });
    }

  });
  $(".alertBox").click(function(){
    window.location.href='http://mobile.sunland.org.cn/activity/mlink/getExtentionPage?channel=guangdiantong&scene=xiangmuye&configUser=yangzheng&siteId=60321415&pageDetail=homepage&reserveParam1=21juntuan&reserveParam2=moqiuli&reserveParam3=xiangmujingli/juntuanzhang';
  })

});

var manifest = [{
    src: '../img/background.jpg'
  },
  {
    src: '../img/bottom.png'
  },
  {
    src: '../img/btn.png'
  },
  {
    src: '../img/listBac.png'
  },
  {
    src: '../img/pointer.png'
  },
  {
    src: '../img/prize.png'
  },
  {
    src: '../img/prizeRotate.png'
  },
  {
    src: '../img/rules.png'
  },
  {
    src: '../img/subCell.png'
  },
  {
    src: '../img/title.png'
  }
];



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
  $("#jindu span").html(html);
}

//全度资源加载完毕
function loadComplete(event) {
  console.log("已加载完毕全部资源");
  $(".preLoad").fadeOut();
}
