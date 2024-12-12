$('.toggle').click(function() {
  $('.collapse-menu').toggleClass('show');
});

$('.toggle2').click(function() 
{
  $('.collapse-menu').toggleClass('show');
});


  $(document).ready(function() {
    $('.scroller-item').hide().first().show();

    var section = $('.processdevelopment-section');

    // Check if the section exists

    if (section.length > 0) 
      {
        $(window).on('scroll', function() 
        {
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var sectionTop = section.offset().top;
            var sectionBottom = sectionTop + section.outerHeight();

            console.log($(window).scrollTop(), scrollTop, windowHeight, sectionTop, sectionBottom, scrollTop - sectionTop);

            section.find('.progress-line').height(scrollTop - sectionTop - 10);

            if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
                section.find('.scroller-content').each(function(index) {
                    var $this = $(this);
                    var contentTop = $this.offset().top;
                    var contentBottom = contentTop + $this.outerHeight();

                    if (scrollTop + windowHeight > contentTop && scrollTop < contentBottom) {
                        showImage(index);
                    }
                });
            }
        });
     }

    function showImage(index) {
        $('.scroller-item').hide().eq(index).show();
    }
});

// slick slider black banner

$('.black-slider').slick({
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,          
    speed: 3000,               
    arrows: false,
    dots: false,               
    cssEase: 'linear',         
    infinite: true,
    draggable: true,
    responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
    ]
  });

  $('.awards-slider').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 6000,       
    speed: 2000,               
    arrows: false,
    dots: false,         
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 10,      
    responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
    ]
  });


$('.testimonial-slider').slick({
  dots: true,
  draggable: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  dots:false
});

$('.logos-slider').slick({
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 0,   
  autoplaySpeed: 6000,       
  speed: 2000,               
  arrows: false,
  dots: false,         
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 10,      
  responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
  ]
});

$('.speriorcontentmanagement-slider').slick({
  slidesToShow: 3,
  margin:25,
  autoplay: true,
  autoplaySpeed: 0,   
  autoplaySpeed: 6000,       
  speed: 2000,               
  arrows: false,
  dots: false,         
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 10,      
  responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
  ]
});

$('.ecslider').slick({
  slidesToShow: 3,
  margin:25,
  autoplay: true,
  autoplaySpeed: 0,   
  autoplaySpeed: 6000,       
  speed: 2000,               
  arrows: false,
  dots: false,         
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 10,      
  responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
  ]
});

$('.dropdown-menu1').click(function()
{
  $('.dropdown-menu1').toggleClass('active');
});

$('.dropdown-menu2').click(function()
{
  $('.dropdown-menu2').toggleClass('active');
});


// circluar progress bar

$('#circle-a').circleProgress({
  startAngle: -1.55,
  size: 200,
  value: 0.75, 
  fill: {
      color: '#ee0400'
  },
  emptyFill: '#ffffff',
  lineCap: 'round'
}).on('circle-animation-progress', function (event, progress, stepValue) {
  $(this).find('strong').text(Math.round(stepValue * 100) + '%');
});

$('#circle-b').circleProgress({
  startAngle: -1.55,
  size: 200,
  value: 0.19, 
  fill: {
      color: '#ee0400'
  },
  emptyFill: '#ffffff',
  lineCap: 'round'
}).on('circle-animation-progress', function (event, progress, stepValue) {
  $(this).find('strong').text(Math.round(stepValue * 100) + '%');
});

$('#circle-c').circleProgress({
  startAngle: -1.55,
  size: 200,
  value: 0.68, 
  fill: {
      color: '#ee0400'
  },
  emptyFill: '#ffffff',
  lineCap: 'round'
}).on('circle-animation-progress', function (event, progress, stepValue) {
  $(this).find('strong').text(Math.round(stepValue * 100) + '%');
});
