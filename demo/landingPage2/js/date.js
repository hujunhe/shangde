$(function(){

    var time=new Date();
    var week=time.getDay();
    var times;
    if(week==0){
        $(".month").html((time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1));
        $(".day").html((time.getDate() < 10 ? '0'+time.getDate() : time.getDate()));
    }else if(week==1){
        times=new Date().getTime()+172800000;//2天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }else if(week==2){
        times=new Date().getTime()+86400000;//1天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }else if(week==3){
        $(".month").html((time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1));
        $(".day").html((time.getDate() < 10 ? '0'+time.getDate() : time.getDate()));
    }else if(week==4){
        times=new Date().getTime()+86400000;//1天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }else if(week==5){
        $(".month").html((time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1));
        $(".day").html((time.getDate() < 10 ? '0'+time.getDate() : time.getDate()));
    }else if(week==6){
        times=new Date().getTime()+86400000;//1天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }
});