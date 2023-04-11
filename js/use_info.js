$(document).ready(function(){


  
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnbBar").toggleClass("active");
  });


  $(".closePopUp").click(function(){
    $(".popUp").slideUp();
  });

$(".mainMenu div").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});
/* 종료버튼 눌렀을 시 done_list 생성 */

$(".subMenu div").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");


  let result = $(this).attr("data-alt");
  $(".list").removeClass("active");
  $("#"+$(this).attr("data-alt")).addClass("active");

});

/* 메인메뉴 */
$(".mainMenu div").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");


  let result = $(this).attr("data-alt");
  $(".M_Menu").removeClass("active");
  $("#"+$(this).attr("data-alt")).addClass("active");
});

/* 서브메뉴 */
$(".subMenu div").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");


  let result = $(this).attr("data-alt");
  $(".list").removeClass("active");
  $("#"+$(this).attr("data-alt")).addClass("active");
});
/* 쿠폰받기 제휴혜택 버튼 클릭시 list 끔 */
$(".event_Btn").click(function(){
  $(".ing_list").addClass("active");
  $(".ing_Btn").addClass("active");
  $(".done_Btn").removeClass("active");
  $(".win_Btn").removeClass("active");
});
$(".Coupon_Btn").click(function(){
  $(".list").removeClass("active");
});
$(".alliance_Btn").click(function(){
  $(".list").removeClass("active");
});
});