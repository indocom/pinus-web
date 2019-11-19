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
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
    $(document).ready(function(){
      $('.modal').modal();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
