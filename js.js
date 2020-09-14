
ScrollReveal().reveal('.contenedor');
ScrollReveal().reveal('.acerca-de', { delay: 500 });
ScrollReveal().reveal('.trabajo', { delay: 500 });
ScrollReveal().reveal('.descripcion', { delay: 500 });
ScrollReveal().reveal('.contacto', { delay: 500, origin: 'bottom', });
ScrollReveal().reveal('.bannersecu', { delay: 500, origin: 'top', });
ScrollReveal().reveal('.imagen', { delay: 500, origin: 'top', })
ScrollReveal().reveal('.info-right', { delay: 500, origin: 'top', })

$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
  });
  
