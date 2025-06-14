 $(document).ready(function() {
    const $hamburger = $('.hamburger');
    const $navLinks = $('.nav-links');
    
    // Toggle menu on hamburger click
    $hamburger.on('click', function() {
    const isExpanded = $(this).data('expanded') === true;
    $(this).data('expanded', !isExpanded);
    $navLinks.data('active', !isExpanded);
    
    // Update visual states
    $(this).attr('data-expanded', !isExpanded);
    $navLinks.attr('data-active', !isExpanded);
    });
    
    // Close menu when clicking on a link (mobile)
    $navLinks.on('click', '.nav-link', function() {
    $hamburger.data('expanded', false).attr('data-expanded', false);
    $navLinks.data('active', false).attr('data-active', false);
    });
});