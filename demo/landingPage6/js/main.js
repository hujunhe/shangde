
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
        src:  "../img/background.jpg",
        id: "1"
    },
    {
        src:  "../img/page1_background.jpg",
        id: "1"
    },
    {
        src:  "../img/page4_input.jpg",
        id: "1"
    },
    {
        src:  "../img/page4_popBox.jpg",
        id: "1"
    },
    {
        src:  "../img/page4_search1.jpg",
        id: "1"
    },
    {
        src:  "../img/page4_search2.jpg",
        id: "1"
    },
    {
        src:  "../img/page5_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page8_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page9_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page11_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page12_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page14_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page15_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page18_bac.jpg",
        id: "1"
    },
    {
        src:  "../img/page7_bac.gif",
        id: "1"
    },
    {
      src:"../img/icon_sprite.png",
      id:"1"
    },
    {
      src:"../img/logo.png",
      id:"1"
    },
    {
      src:"../img/page2_headPic.png",
      id:"1"
    },
    {
      src:"../img/page2_title.png",
      id:"1"
    },
    {
      src:"../img/page3_temp.png",
      id:"1"
    },
    {
      src:"../img/page3_title.png",
      id:"1"
    },
    {
      src:"../img/page4_title.png",
      id:"1"
    },
    {
      src:"../img/page10_temp.png",
      id:"1"
    },
    {
      src:"../img/page10_title.png",
      id:"1"
    },
    {
      src:"../img/page13_title.png",
      id:"1"
    },
    {
      src:"../img/page14_title.png",
      id:"1"
    },
    {
      src:"../img/page17_title.png",
      id:"1"
    },
    {
      src:"../img/point.png",
      id:"1"
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
    if(event.item.id == "logo"){
        console.log("logo图片已成功加载");
    }
}

//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！",evt.text);
}

//已加载完毕进度
function handleFileProgress(event) {
  var html = preload.progress*100|0;
  $("#jindu").html(html);
}

//全度资源加载完毕
function loadComplete(event) {
    console.log("已加载完毕全部资源");
    $(".preLoad").fadeOut();
    start();
}





$(function() {
  setupManifest();
  startPreload();
});

function start() {
  //第一页滑动事件
  $(".page1").swipe({
    swipeUp: function() {
      this.fadeOut('normal', function() {
        //page2动画
        (function() {
          $(".talkingBox ul li").show();
        })()
      });
    }
  });
  // 第二页点击事件
  $(".page2 .nextBtn").swipe({
    tap: function() {
      this.parents(".page").fadeOut('normal', function() {
        (function() {
          $(".leftWord ul li").show();
          setTimeout(function(){
            $(".redColor").animate({top:"30%"},function(){
              setTimeout(function(){
                $(".redColor").animate({top:"20%"},function(){
                  setTimeout(function(){
                    $(".redColor").animate({top:"10%"},function(){
                      setTimeout(function(){
                        $(".redColor").animate({top:"0"},function(){
                          $(".finish").show();
                        })
                      },500)
                    })
                  },500)
                })
              },500)
            })
          },600)


        })()
      });
    }
  });
  //第三页点击事件
  $(".page3 .nextBtn").swipe({
    tap:function(){
        this.parents(".page").fadeOut('normal', function(){
          var p = 'zikao.bjeea.cn';
          var i = 0;
          var timer = setInterval(function(){
            var tmp = $("#pushWord").text();
            i++;
            tmp = p.substr(0,i);
            $("#pushWord").html(tmp);
            if(i === p.length){
              clearInterval(timer)
              return ;
            }
          },100)
        })
    }
  })
  $("#baiduSearch").click(function(){
    $(".searchResult img").show();
    $(".page4 .searchBox .hands").animate({top:"2.5rem",right:"1.5rem"});
  })
  //第4页点击事件
  $("#nextBtn").swipe({
    tap:function(){
      $(".popBox").show();
    }
  })
  //第五页点击
  $("#nextPage").swipe({
    tap:function(){
      this.parents(".page").fadeOut('normal',function(){
        $(".page5 .remberIcon").show();
      })
    }
  })
  //第六页
  $(".page5").swipe({
    tap:function(){
      this.fadeOut('normal')
    }
  })
  $(".page6").swipe({
    tap:function(){
      this.fadeOut('normal',function(){
        $(".page7 .mateIcon").show();
      })
    }
  })
  $(".page7").swipe({
    tap:function(){
      this.fadeOut('normal',function(){
        $(".page8 .findPassIcon").show();
      })
    }
  })
  $(".page8").swipe({
    tap:function(){
      this.fadeOut('normal',function(){
        tempretrue($(".page9 .color"),0,70,$(".page9 .number"));
        $(".page9 .seventyPerIcon").show();
      })
    }
  })
  $(".page9 .nextBtn").swipe({
    tap:function(){
      this.parents(".page").fadeOut('normal',function(){
        $(".page10 .startClassIcon").show();
      })
    }
  })
  $(".page10 #page10Btn").swipe({
    tap:function(){
      this.parents(".page").fadeOut('normal',function(){
        $(".page11 .allRoadIcon").show();
      })
    }
  })
  $(".page11").swipe({
    tap:function(){
      this.fadeOut('normal',function(){
        tempretrue($(".page12 .color"),70,80,$(".page12 .number"));
        $(".page12 .tenPerIcon").show();
      })
    }
  })
  $(".page12 .nextBtn").swipe({
    tap:function(){
      this.parents(".page").fadeOut('normal',function(){
        $(".page13 .timeIcon").show();
      })
    }
  })
  $(".page13").swipe({
    tap:function(){
      this.fadeOut('normal',function(){
        tempretrue($(".page14 .color"),80,90,$(".page14 .number"));
        $(".page14 .tenPerIcon").show();
      })
    }
  })
  $(".page14 .nextBtn").swipe({
    tap:function(){
      this.parents(".page").fadeOut('normal',function(){
        $(".page15 .thisIcon").show();
      })
    }
  })
  $(".page15").swipe({
    tap:function(){
      this.fadeOut('normal',function(){
        tempretrue($(".page16 .color"),90,100,$(".page16 .number"));
        $(".page16 .tenPerIcon").show();
      })
    }
  })
  $(".page16 .nextBtn").swipe({
    tap:function(){
      this.parents(".page").fadeOut('normal',function(){
        $(".page17 .thisIcon").show();
      })
    }
  })


}
function tempretrue(obj,start,end,word,color){
  var number = 100 - end;
  var tmp = start;
  var timer = setInterval(function(){
      if(tmp === end){
        clearInterval(timer);
        return;
      }else{
        tmp ++;
        word.text(tmp+'%');
      }
  },10);
  obj.animate({top:number + '%',backgroundColor:color});
}
