var ypos,image;
  function parallex () {
    ypos = window.pageYOffset;
    image = document.getElementById('image');
    image.style.top = ypos * .4 +'px';
  }
  window.addEventListener('scroll',parallex);




$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".button").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("image1").on('click', function(event) {

 // End if
  });
});


  
$('.myCarousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });