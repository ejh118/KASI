$(document).ready(function(){


  
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnbBar").toggleClass("active");
  });


  $(".closePopUp").click(function(){
    $(".popUp").slideUp();
  });

  $(".book_list").click(function(){ //로그인 메뉴 바꿀 시
    $(this).css({"background-color":"#00c88c","color":"#fff"});
    $(".history_list").css({"background-color":"#efefef","color":"#111"});
    $(".history_list_infoText").text("");
    $(".banner").css({"display":"block"});
  });
  $(".history_list").click(function(){ //로그인 메뉴 바꿀 시
    $(this).css({"background-color":"#00c88c","color":"#fff"});
    $(".book_list").css({"background-color":"#efefef","color":"#111"});
    $(".history_list_infoText").text("*최근 6개월 대여, 예약취소내역(수수료발생건)만 제공됩니다.");
    $(".banner").css({"display":"none"});
  });

  /* 광고배너 */

  $(".cancelBtn").click(function(){
    $(".banner").css({"display":"none"});
  });


});