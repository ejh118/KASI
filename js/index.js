$(document).ready(function(){

    //스크롤 수치
    $(window).on("scroll", function(){
      var scroll_top=$(this).scrollTop();
      $(".top").text(scroll_top);
    });
  
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnbBox").toggleClass("active");
  });


  $(".closePopUp").click(function(){
    $(".popUp").slideUp();
  });


  /* 스크롤 애니메이션 조작 */

  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 400){
      $(".article1_one h2").css({"top":"280px","opacity":"1"});
      $(".article1_two img").css({"top":"-170px","opacity":"1"});
      chek=false;
    }else{
      $(".article1_one h2").css({"top":"300px","opacity":"0"});
      $(".article1_two img").css({"top":"-190px","opacity":"0"});
    }
  });

  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 500){
      $(".article1_two p").css({"opacity":"1"});
      chek=false;
    }else{
      $(".article1_two p").css({"opacity":"0"});
    }
  });

  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 700){
      $(".article2_in h2").css({"opacity":"1"});
      chek=false;
    }else{
      $(".article2_in h2").css({"opacity":"0"});
    }
  });
  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 800){
      $(".article2_in p").css({"opacity":"1"});
      chek=false;
    }else{
      $(".article2_in p").css({"opacity":"0"});
    }
  });
  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 1300){
      $(".article3_one h2").css({"opacity":"1"});
      chek=false;
    }else{
      $(".article3_one h2").css({"opacity":"0"});
    }
  });

  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 1500){
      $(".article3_two img").css({"opacity":"1","top":"50px"});
      $(".article3_two_Text").css({"opacity":"1"})
      chek=false;
    }else{
      $(".article3_two img").css({"opacity":"0","top":"300px"});
      $(".article3_two_Text").css({"opacity":"0"})
    }
  });
  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 1700){
      $(".art4_1").css({"opacity":"1"});
      chek=false;
    }else{
      $(".art4_1").css({"opacity":"0.3"});
    }
  });
  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 2200){
      $(".art4_2").css({"opacity":"1"});
      chek=false;
    }else{
      $(".art4_2").css({"opacity":"0.3"});
    }
  });
  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 2500){
      $(".art4_3").css({"opacity":"1"});
      chek=false;
    }else{
      $(".art4_3").css({"opacity":"0.3"});
    }
  });
  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 2900){
      $(".art4_4").css({"opacity":"1"});
      chek=false;
    }else{
      $(".art4_4").css({"opacity":"0.3"});
    }
  });
  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    chek=true;
    if(scollpos > 3200){
      $(".art4_5").css({"opacity":"1"});
      chek=false;
    }else{
      $(".art4_5").css({"opacity":"0.3"});
    }
  });







});