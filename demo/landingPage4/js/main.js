$(function () {
    // 第二页点击事件
    $(".page2").swipe({
        tap: function () {
            //this.parents(".page").fadeOut('normal', function () {
            $(this).fadeOut('normal', function () {
                (function () {
                    $(".page3").show();
                })()
            });
        }
    });
    $(".closemodal").click(function () {
        $(".modal").css('display', 'none');
        $("#modal_overlay").css('display','none');

    });

});



