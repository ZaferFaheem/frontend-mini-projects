$(document).ready(function() {
    // Create stars for background
    createStars();
    
    // Floating animation for astronaut
    $('.astronaut-img').hover(
        function() {
            $(this).css('animation', 'float 3s ease-in-out infinite');
        },
        function() {
            $(this).css('animation', 'float 6s ease-in-out infinite');
        }
    );
    
    // Glitch effect on error code
    setInterval(function() {
        $('.error-code').toggleClass('glitch');
    }, 2000);
    
    // Button hover effects
    $('.btn').hover(
        function() {
            $(this).css('transform', 'translateY(-3px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
    
    // Create twinkling stars
    function createStars() {
        const stars = $('<div class="stars"></div>');
        $('body').prepend(stars);
        
        for (let i = 0; i < 100; i++) {
            const star = $('<div class="star"></div>');
            star.css({
                'position': 'absolute',
                'width': Math.random() * 3 + 'px',
                'height': Math.random() * 3 + 'px',
                'background': '#fff',
                'border-radius': '50%',
                'top': Math.random() * 100 + '%',
                'left': Math.random() * 100 + '%',
                'opacity': Math.random(),
                'animation': `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            });
            stars.append(star);
        }
    }
});
