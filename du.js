$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 10,
      loop: true,
      nav: true,
      autoplay:true,
      autoplayTimeout: 5000,
      responsive: {
        0: { 
          items: 1
        },
        700: {
          items: 2
        },
        1000: {
            items: 3
        }

      }
    });
  });

  