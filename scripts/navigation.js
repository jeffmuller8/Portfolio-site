$(document).ready(function() {
  var stickyNavTop = $('#hero').height();

  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    var hiddenActive = $('#hero').hasClass('hidden');
    var stickyNavActive = $('#navBar').hasClass('navBar-sticky');
    // console.log(foo);


    if ( scrollTop > stickyNavTop * .35 ) { //&& !hiddenActive
      $('#hero').addClass("hidden");
      $('#navBar').addClass("navBar-sticky-offPage");
    }

    if (scrollTop < stickyNavTop * .55) { //&& !hiddenActive
      $('#hero').removeClass("hidden");
    }

    if (scrollTop < stickyNavTop * .75) {
      $('#navBar').removeClass("navBar-sticky-offPage");
      $('#navBar').removeClass("navBar-sticky");
      $('#logo').removeClass("logo-sticky");
      $('#tagLine').removeClass("tagLine-sticky");
      $('#navigation').removeClass("navigation-sticky");
      $('.navButton').removeClass("navButton-sticky");
    }

    if (scrollTop > stickyNavTop + 300 ) { //&& !stickyNavActive
      $('#navBar').removeClass("navBar-sticky-offPage");
      $('#hero').removeClass("hidden");
      $('#navBar').addClass("navBar-sticky");
      $('#logo').addClass("logo-sticky");
      $('#tagLine').addClass("tagLine-sticky");
      $('#navigation').addClass("navigation-sticky");
      $('.navButton').addClass("navButton-sticky");
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
});
