var ypos, image;
//this javascript allows pixel inejction so when hyou sroll it moves 4px at a time
//it gives the page more of a nice scroll effect
function parallex() {
    ypos = window.pageYOffset;
    //image of the background used
    image = document.getElementById('image');
    image.style.top = ypos * .4 + 'px';
}
//works when you scroll
window.addEventListener('scroll', parallex);




$(document).ready(function() {
    // Add smooth scrolling to .button which is for the deals button
    $(".button").on('click', function(event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling 
                window.location.hash = hash;
            });
        }
    });



    $('.hov').hover(function() {
        //this slides the image up when hovered
        $("#image1").slideUp(1000);
        //this stops the garage from reapearing after one use if page reload it will return
        $.doTimeout(300, function() {
            hideClosedSearchLink();
            showHomeSearch();
        });


        $(this).unbind('mouseenter mouseleave')

    });

});