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

const headerimage = document.querySelector('#landing::after');
window.addEventListener('scroll', () => {
  headerimage.style.opacity = 1 - (window.pageYOffset - 300) / 550;
  console.log(headerimage);

})