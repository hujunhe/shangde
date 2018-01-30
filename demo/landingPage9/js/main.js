$(function() {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    loop: true
  });
  var swiper = new Swiper('.swiper_pic', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
  var doms = $(".js_xiaoneng");
  for (var i = 0; i < doms.length; i++) {
    doms[i].addEventListener("touchstart", function() {
      console.log(this.innerText);
      interactive.openNtkf('0',this.innerHTML)
    }, false)
  }
  $(".sendPhoneNum").click(function(e){
    var cell = $.trim($(".cellPhone").val());
    console.log(cell);
    if(cell === "" || cell.length !== 11){
      alert("请输入正确手机号噢")
      return false
    }
    interactive.submitMsg(e,'stPhone',cell,"",cb)
  })
});
interactive.init('xiaoneng');
function cb(data){
  alert(data.message)
}
