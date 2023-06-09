$(document).ready(function(){

    // Show a listing based on clicking any card. Hide location select screen.

    $(".card").click(function(){
      $("#selection").slideUp();
      $("#location-1").slideDown();
      $(window).scrollTop(0);
    });

    // Return from specific location to location select screen when back arrow button clicked
    
    $(".back-btn").click(function(){
      $("#selection").slideDown();
      $("#location-1").slideUp();
    });

    // Hide home screen and show location select screen when main CTA clicked
    
    $(".hero-btn").click(function(){
      $("#selection").slideDown();
      $("#home").slideUp();
      $('#sign-in').hide();
    });

    // Hide specific location and show booking form when "book now" button clicked

    $(".book").click(function(){
      $("#location-1").slideUp();
      $("#form").slideDown();
    });

    // Disable form action. Hide booking form and show booking confirmation screen. Activate confetti

    $(".form-submit").click(function(){
      event.preventDefault()
      $("#form").slideUp();
      $("#confirm").slideDown();

      var confettiSettings = { target: 'my-canvas' };
      var confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      $('#my-canvas').height($('#canvas').width() / 2.031);
    });

    // Clicking home nav button hides all non home IDs. Shows home page.

    $(".home").click(function(){
      $("section").not("#home").hide(300, "swing");
      $("#home").show(100, "swing")
    });

    // Clicking search nav button hides all non selection IDs. Shows location selection page.

    $(".select").click(function(){
      $("section").not("#selection").hide(300, "swing");
      $("#selection").show(100, "swing")
    });

  });