/**
 * app下载页面业务逻辑
 * @author zhangshaoliu
 * @update 2015-07-16
 */
(function(){
    // 获取查询参数
    function getUrlQuery(keyName) {
        var searchStr = location.search, // 如果无search返回""
            reg = new RegExp("(^|&)" + keyName + "=([^&]*)(&|$)","i");

        searchStr = searchStr.length > 0 ? searchStr.substring(1) : "";

        var results = searchStr.match(reg);
        if (!results) {
            return null;
        }
        return results[2];
    }

    // 判断平台类型
    var  _ua = navigator.userAgent.toLowerCase();
    var platform = {
        isIphone: !!_ua.match(/iphone/i),
        isAndroid: !!_ua.match(/android/i),
        isIpad: !!_ua.match(/ipad/i)
    }

    $(function() {
        var $tabItem = $(".tab-item"),
            $tabCon = $(".tab-content"),
            $maskLayer = $('.mask');
            //$appStoreBtn = $('.ios'),
            //$androidDownBtn = $('.android'),
            //$ipadDownBtn = $('.btn-download');

        // app下载按钮根据平台显/隐
        /*if(platform.isIphone){
            $androidDownBtn.addClass('hidden');
            $ipadDownBtn.addClass('disable');
        }else if(platform.isAndroid){
            $appStoreBtn.addClass('hidden');
            $ipadDownBtn.addClass('disable');
        }else{
            $androidDownBtn.addClass('disable');
            $appStoreBtn.addClass('disable');
        }*/

        $tabItem.on('click', function() {
            var $this = $(this),
                currIndex = $(this).index();

            $tabItem.removeClass('selected');
            $this.addClass('selected');
            $tabCon.hide();
            $tabCon.eq(currIndex).show();
            return false;
        });

        // 点击下载 & 统计
        $(document).on('click', 'a.ios, a.android, a.btn-download', function() {
            // 显示微信分享图标
            if (/MicroMessenger/i.test(navigator.userAgent)) {
                $maskLayer.show();
                return false;
            }

            var $this = $(this),
                _type = 'ipad',
                _url = 'http://www.imooc.com/mobile/appdown';

            if ($this.hasClass('ios')) {
                _type = 'ios';
            } else if ($this.hasClass('android')) {
                _type = 'android';
            } else {
                _url = 'https://itunes.apple.com/cn/app/mu-ke-wang-for-ipad-mian-feiit/id966761381?mt=8';
            }

            // 点击后先发送统计请求，然后回调函数中执行app下载
            $.get('/mobile/downcount', {
                source: 'wap',
                type: _type,
                r: (new Date).getTime()
            }, function(data) {
                if($this.hasClass('disable')){
                    return;
                }
                commonUtil.launchAPP(_url, 'list');
                //location.href = _url;
            });
        });

        $maskLayer.on('click', function() {
            $(this).hide();
        });

        // 页面触摸垂直滑动特效初始化
        pageSwiper.init();

        // 在微信环境下tab选中项为ipad版
        if (/MicroMessenger/i.test(navigator.userAgent) || getUrlQuery('curr') === 'ipad') {
            $tabItem.eq(1).trigger('click');
        }else{
            $tabItem.eq(0).trigger('click');
        }
    });
})();
