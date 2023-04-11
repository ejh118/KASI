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
  $(".M_All").removeClass("active");
  $("#"+$(this).attr("data-alt")).addClass("active");
});

/* 서브메뉴 */
$(".subMenu div").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");


  let result = $(this).attr("data-alt");
  $(".dpAll").removeClass("active");
  $("#"+$(this).attr("data-alt")).addClass("active");
});

$(".pay_Btn").click(function(){
  $(".dis_Btn").addClass("active");
  $(".pay_All").addClass("active");
  $(".drivePay_Btn").removeClass("active");
  $(".drivePay_All").removeClass("active");
});


});