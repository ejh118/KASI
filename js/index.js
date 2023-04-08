$(document).ready(function(){


  //스크롤 수치
  $(window).on("scroll", function(){
    var scroll_top=$(this).scrollTop();
    $(".top").text(scroll_top);
  });


//트리거 클릭시 GNB toggle, 트리거 변경
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnbBox").toggleClass("active");
    $("#logo").toggleClass("active");
  });

  $(window).scroll(function(){

    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 800){
      $("header").css({"background-color":"#fff","border-bottom":"1px solid #eee"});
      $(".trigger span").css({"background-color":"#000"})
      $("#logo").attr("src","image/logo_black.png")
      chek=false;
    }else{
      $("header").css({"background-color":"transparent","border":"none"});
      $(".trigger span").css({"background-color":"#fff"});

      $("#logo").attr("src","image/logo.png")
    }

  });
});