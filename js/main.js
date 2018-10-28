jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 48
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse ").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
      $(".dropdown-toggle").on('click', function(){

        
      });

  });

    // Init Video Modal
   // $('.launch-modal').on('click', function(e){
     //   e.preventDefault();
       // $( '#' + $(this).data('modal-id') ).modal();
    //});

   

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function(ev){
  $('#custom_carousel').on('slide.bs.carousel', function (evt) {
    $('#custom_carousel .controls li.active').removeClass('active');
    $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
  })
});
 