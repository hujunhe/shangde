$(function() {
  audioAutoPlay('audio');
  startPreload();

});

function swipes(obj, n) {
  var _obj = '.' + obj + n;
  var newObj = '.' + obj + (n + 1);
  $(_obj).swipe({
    swipeUp: function() {
      if (n !== 6) {
        this.fadeOut("fast", function() {
          $(newObj).show();
          swipes(obj, n + 1);
        });
      }
    }
  });
}
var manifest = [{
    src: '../img/back1.jpg'
  },
  {
    src: '../img/back2.jpg'
  },
  {
    src: '../img/back3.jpg'
  },
  {
    src: '../img/back4.jpg'
  },
  {
    src: '../img/back5.jpg'
  },
  {
    src: '../img/back6.jpg'
  },
  {
    src: '../img/icon.jpg'
  },
  {
    src: '../img/arrow.png'
  },
  {
    src: '../img/title.png'
  },
  {
    src: '../img/title1.png'
  },
  {
    src: '../img/title2.png'
  },
  {
    src: '../img/title3.png'
  },
  {
    src: '../img/title4.png'
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
  $(".preLoad").fadeOut(function() {
    $(".page1").show();

    //document.getElementById('audio').play();
    swipes('page', 1);
  });
}

function audioAutoPlay(id) {
  var audio = document.getElementById(id),
    play = function() {
      audio.play();
      document.removeEventListener("touchstart", play, false);
    };
  audio.play();
  document.addEventListener("WeixinJSBridgeReady", function() {
    play();
  }, false);
  document.addEventListener('YixinJSBridgeReady', function() {
    play();
  }, false);
  document.addEventListener("touchstart", play, false);
}
