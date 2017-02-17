$("document").ready(function() {
  //Add interaction to navbar when mouse hover it's elements.
  $(".nav").on({
    mouseover: function () {
      $("li:hover").addClass("active");
    },
    mouseout: function () {
      $("li").removeClass("active");
    }
  });

  //Smooth scroll
  $(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

    // Prevent default anchor click behavior
    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Animation
    $("html, body").animate({
       scrollTop: $(this.hash).offset().top -50
    }, 400, function(){

        // When done, add hash to url
        // (default click behavior)
        window.location.hash = hash;
    });
  });

  //Adds Smooth Scrool to Back to Top button
  $("#arrow a[href^='#']").on('click', function(e) {

    // Prevent default anchor click behavior
    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Animation
    $("html, body").animate({
       scrollTop: $(this.hash).offset().top -50
    }, 400, function(){

        // When done, add hash to url
        // (default click behavior)
        window.location.hash = hash;
    });
  });

  //Adds Smooth Scrool to Back to Top button
  $("footer #btt a[href^='#']").on('click', function(e) {

    // Prevent default anchor click behavior
    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Animation
    $("html, body").animate({
       scrollTop: $(this.hash).offset().top -50
    }, 400, function(){

        // When done, add hash to url
        // (default click behavior)
        window.location.hash = hash;
    });
  });

});
