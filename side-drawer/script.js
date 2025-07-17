jQuery(document).ready(function($) {
    // Open drawer when profile icon is clicked
    $('.profile-icon').click(function() {
        $('.side-drawer').addClass('open');
        $('.overlay').fadeIn();
    });
    
    // Close drawer when close button or overlay is clicked
    $('.close-btn, .overlay').click(function() {
        $('.side-drawer').removeClass('open');
        $('.overlay').fadeOut();
    });
    
    // Close drawer when clicking ESC key
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.side-drawer').removeClass('open');
            $('.overlay').fadeOut();
        }
    });
});