// for  nav bar
$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("#navBar").css("backdrop-filter", "blur(8px)");
    $("#navBar").css("border-bottom", "1px solid black");
  } else {
    $("#navBar").css("background-color", "none");
    $("#navBar").css("border-bottom", "none");
  }
});

//  artical
// function alert() {

// }
