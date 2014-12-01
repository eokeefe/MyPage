fullscreen = function() {
  var fullscreen = {version: "0.3"};

  fullscreen.setup = function () {
    /* detect touch */
    if("ontouchstart" in window) {
      document.documentElement.className = document.documentElement.className + " touch";
    }

    $(window).resize(fullscreen.resize);
    $(window).focus(fullscreen.resize);

    if(!$("html").hasClass("touch")){
      $(".parallax").css("background-attachment", "fixed");
      $(window).resize(fullscreen.parallax);
      //$(window).focus(fullscreen.parallax);
      $(window).scroll(fullscreen.parallax);
      fullscreen.parallax();
    }

    fullscreen.resize();
  };

  /* resize background images */
  // backgroundResize = function (){
  fullscreen.resize = function () {
    var windowH = $(window).height();
    $(".background").each(function(i){
      var path = $(this);
      // variables
      var contW = path.width();
      var contH = path.height();
      var imgW = path.attr("data-img-width");
      var imgH = path.attr("data-img-height");
      var ratio = imgW / imgH;
      // overflowing difference
      var diff = parseFloat(path.attr("data-diff"));
      diff = diff ? diff : 0;
      // remaining height to have fullscreen image only on parallax
      var remainingH = 0;
      if(path.hasClass("parallax") && !$("html").hasClass("touch")){
        var maxH = contH > windowH ? contH : windowH;
        remainingH = windowH - contH;
      }
      // set img values depending on cont
      imgH = contH + remainingH + diff;
      imgW = imgH * ratio;
      // fix when too large
      if(contW > imgW){
        imgW = contW;
        imgH = imgW / ratio;
      }
      //
      path.data("resized-imgW", imgW);
      path.data("resized-imgH", imgH);
      path.css("background-size", imgW + "px " + imgH + "px");
    });
  }

  /* set parallax background-position */
  fullscreen.parallax  = function (e) {
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i){
      var path = $(this);
      var height = path.height();
      var top = path.offset().top;
      var bottom = top + height;
      // only when in range
      if(bottomWindow > top && topWindow < bottom){
        var imgW = path.data("resized-imgW");
        var imgH = path.data("resized-imgH");
        // min when image touch top of window
        var min = 0;
        // max when image touch bottom of window
        var max = - imgH + heightWindow;
        // overflow changes parallax
        var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
        top = top - overflowH;
        bottom = bottom + overflowH;
        // value with linear interpolation
        var value = min + (max - min) * (currentWindow - top) / (bottom - top);
        // set background-position
        var orizontalPosition = path.attr("data-oriz-pos");
        orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
        $(this).css("background-position", orizontalPosition + " " + value + "px");
      }
    });
  }

  return fullscreen;
}();
