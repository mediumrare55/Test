$(".menu-order li a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 750,
      easing: "swing"
    });
    return false;
  });


