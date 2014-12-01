Meteor.startup(function () {
  /* detect touch */
  if("ontouchstart" in window) {
    document.documentElement.className = document.documentElement.className + " touch";
  }

  $(window).resize(fullscreen.resize);
  $(window).focus(fullscreen.resize);
});


Meteor.methods({
  fullscreen: function () {
    if(!$("html").hasClass("touch")){
      $(".parallax").css("background-attachment", "fixed");
      $(window).resize(fullscreen.parallax);
      //$(window).focus(fullscreen.parallax);
      $(window).scroll(fullscreen.parallax);
      fullscreen.parallax();
    }

    fullscreen.resize();
  }
});
