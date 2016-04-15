$(document).ready(function() {
  var stickyNavTop = $('#navBar').offset().top;

  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();


    if (scrollTop - 200 > stickyNavTop) {
      $('#hero').addClass("sticky");
      $('#navBar').addClass("minified");
    } else {
      $('#hero').removeClass("sticky");
      $('#navBar').removeClass("sticky");
      $('#navBar').removeClass("minified");
    }
    if (scrollTop - 400 > stickyNavTop) {
      $('#navBar').addClass("sticky");
      $('#logo').addClass("sticky");
      $('#tagLine').addClass("sticky");
      $('#navigation').addClass("sticky");
      $('.navButton').addClass("sticky");
      $('#navBar').removeClass("minified");
    } else if (scrollTop - 200 > stickyNavTop && scrollTop - 400 < stickyNavTop) {
      $('#navBar').addClass("minified");
      // $('#navBar').removeClass("sticky");
      console.log('in between 200 and 400')
      // $('#navBar').removeClass("sticky");
    }
    else {
      $('#navBar').removeClass("sticky");
      $('#logo').removeClass("sticky");
      $('#tagLine').removeClass("sticky");
      $('#navigation').removeClass("sticky");
      $('.navButton').removeClass("sticky");
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
});
