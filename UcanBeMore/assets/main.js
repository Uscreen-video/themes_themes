$(function(){
  $("#condition").focus(function() {
    $("#searchSubmit").toggleClass("active");
  });

  $("#condition").focusout(function() {
    $("#searchSubmit").toggleClass("active");
  });

  $('#nav').click(function() {
    $(this).toggleClass('open');
  });

  $('.courses').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 988,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  });
});
