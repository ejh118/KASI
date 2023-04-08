$(document).ready(function(){


//트리거 클릭시 GNB toggle, 트리거 변경
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnbBox").toggleClass("active");
  });
});