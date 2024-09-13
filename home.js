// for nav-bar scrolling effect 
$(window).scroll(function () {
    if($(window).scrollTop()){
      $("#navBar").css("backdrop-filter", "blur(8px)")
    }else{
      $("#navBar").css("background-color", "none")
    }
  });