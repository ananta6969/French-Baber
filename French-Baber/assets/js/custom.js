window.onscroll = function () {
  var header = document.querySelector(".header");
  if (window.pageYOffset > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

$('.toggle-btn').click(function() {
  $(this).toggleClass('active');
  $('.menu-bar').toggleClass('show');
  $('.banner-bg-sm, .banner-content').toggleClass('active');

  if($(this).hasClass('active')) {
		$(this).text('close');
	}
  
	else{
		$(this).text('Menu');
	}
})




$(function() {
  $('.product-wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    centerMode: false,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
        {
          breakpoint: 767,
          settings: 'unslick'
        }
      ]
  });

  $(window).on('resize', function() {
      $('.prices-wrapper').slick('resize');
  });
});


$('.prices-wrapper')
.on('afterChange init', function(event, slick, direction){
    console.log('afterChange/init', event, slick, slick.$slides);
    // remove all prev/next
    slick.$slides.removeClass('prev-slide').removeClass('next-slide');

    // find current slide
    for (var i = 0; i < slick.$slides.length; i++)
    {
        var $slide = $(slick.$slides[i]);
        if ($slide.hasClass('slick-current')) {
            // update DOM siblings
            $slide.prev().addClass('prev-slide');
            $slide.next().addClass('next-slide');
            break;
        }
    }
  }
)
.on('beforeChange', function(event, slick) {
    // optional, but cleaner maybe
    // remove all prev/next
    slick.$slides.removeClass('prev-slide').removeClass('next-slide');
})
.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  centerMode: false,
  arrows: false,
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: 'unslick'
    }
  ]
});

$(window).on('resize', function() {
  $('.prices-wrapper').slick('resize');
});


$('.footer-col h5 a').on('click', function(){
  $(this).parent().toggleClass('active').siblings().removeClass('active');
  $(this).parent().siblings('ul').slideToggle(200);
});

$('.footer-col h5 a').focusout(function() {
  $(this).parent().removeClass('active');
  $(this).parent().siblings('ul').slideUp(200);
})