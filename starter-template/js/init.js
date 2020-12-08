(function($){
  $(function(){
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    })
    $('.sidenav').sidenav();
$('.tooltipped').tooltip();
$('.scrollspy').scrollSpy();
  }); // end of document ready
})(jQuery); // end of jQuery name space
