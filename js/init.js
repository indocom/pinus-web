(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".material-boxed").materialbox();
    $(".parallax").parallax();
    $(".tabs").tabs();
    $(".datepicker").datepicker({
      disableWeekends: true
    });
    $(".tooltip").tooltip();
    $(".scrollspy").scrollSpy();
    $(".carousel").carousel();
    $(document).ready(function() {
      $(".collapsible").collapsible();
    });
    $(document).ready(function() {
      $(".modal").modal();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.querySelector("#landing_arrow").addEventListener("click", function() {
  document.querySelector("#landing_empty_div").click();
});

var nav = document.querySelector('.nav-container');
var stickyPosition = nav.offsetTop;

var stickyNav = document.getElementById('sticky-navbar');
stickyNav.innerHTML = nav.innerHTML;
stickyNav.style = "display: none; padding: .7em; background: #222;"
stickyNav.classList.add('sticky-nav');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > stickyPosition) {
    nav.style.display = 'none';
    stickyNav.style.display = 'block';
  } else {
    nav.style.display = 'block';
    stickyNav.style.display = 'none';
  }
});
