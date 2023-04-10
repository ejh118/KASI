$(document).ready(function(){


  
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnbBar").toggleClass("active");
  });


  $(".closePopUp").click(function(){
    $(".popUp").slideUp();
  });

  $(".greenCar_Member").click(function(){ //로그인 메뉴 바꿀 시
    $(".login_Info_Text").text('* L.POINT 통합 아이디로 통합하신 기존 고객님께서는 L.POINT 통합회원에서 로그인 해주세요.');
    $(this).css({"background-color":"#00c88c","color":"#fff"});
    $(".L_Point_Member").css({"background-color":"#efefef","color":"#111"});
    $("#idform").attr("placeholder","그린카 ID 또는 메일주소 입력");
    $("#pwform").attr("placeholder","그린카 비밀번호 입력");
    $("#signup_Btn").text('그린카 회원가입');
  });
  $(".L_Point_Member").click(function(){ //로그인 메뉴 바꿀 시
    $(".login_Info_Text").text('*하나의 L.POINT 통합 아이디로 L.POINT 제휴사 이용이 가능합니다.');
    $(this).css({"background-color":"#00c88c","color":"#fff"});
    $(".greenCar_Member").css({"background-color":"#efefef","color":"#111"});
    $("#idform").attr("placeholder","L.POINT 통합 아이디 입력");
    $("#pwform").attr("placeholder","L.POINT 통합 비밀번호 입력");
    $("#signup_Btn").text('L.POINT 통합 회원가입');
  });




});