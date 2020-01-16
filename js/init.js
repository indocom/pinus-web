(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.material-boxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
      disableWeekends: true
    });
    $('.tooltip').tooltip();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.querySelector('#landing_arrow').addEventListener("click", function(){document.querySelector('#landing_empty_div').click();});
