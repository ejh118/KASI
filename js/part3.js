$(document).ready(function(){

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnbBox").slideToggle();
  });

  $(".foreBtn").click(function(){
    $(this).addClass("active");
    $(".domeBtn").removeClass("active");
    $(".domestic").slideUp();
    $(".foregin").slideDown();
  });
  $(".domeBtn").click(function(){
    $(this).addClass("active");
    $(".foreBtn").removeClass("active");
    $(".foregin").slideUp();
    $(".domestic").slideDown();
  });


});