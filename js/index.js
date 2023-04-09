$(document).ready(function(){

  $(".trigger").click(function(){
    $(this).toggleClass("active");
  });
  
  $(".closePopUp").click(function(){
    $(".popUp").slideUp();
  });


});