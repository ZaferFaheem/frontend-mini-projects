 $(document).ready(function() {
    // Create floating hearts on front
    createHearts('#hearts-front', 15);
    
    // Create floating hearts on back
    createHearts('#hearts-back', 15);
    
    // Surprise button click handler
    $('#surprise-btn').click(function() {
        createConfetti();
        $(this).text('You Are Amazing!').css({
            'background': 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
            'color': 'white'
        });
    });
    
    // Function to create floating hearts
    function createHearts(container, count) {
        for (let i = 0; i < count; i++) {
            const heart = $('<div>').addClass('heart').html('❤');
            $(container).append(heart);
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random animation duration and delay
            const duration = 3 + Math.random() * 3;
            const delay = Math.random() * 5;
            
            heart.css({
                'left': posX + '%',
                'top': posY + '%',
                'animation-duration': duration + 's',
                'animation-delay': delay + 's'
            });
        }
    }
    
    // Function to create confetti
    function createConfetti() {
        const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb', '#ffecd2', '#fcb69f'];
        const container = $('#confetti-container');
        
        for (let i = 0; i < 100; i++) {
            const confetti = $('<div>').addClass('confetti');
            container.append(confetti);
            
            // Random properties
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 5 + Math.random() * 10;
            const posX = Math.random() * 100;
            const rotation = Math.random() * 360;
            const animationDuration = 1 + Math.random() * 3;
            const animationDelay = Math.random() * 2;
            
            confetti.css({
                'background-color': color,
                'width': size + 'px',
                'height': size + 'px',
                'left': posX + '%',
                'transform': 'rotate(' + rotation + 'deg)',
                'border-radius': Math.random() > 0.5 ? '50%' : '0'
            });
            
            // Animate confetti
            confetti.animate({
                'top': '100%',
                'opacity': 0
            }, {
                duration: animationDuration * 1000,
                delay: animationDelay * 1000,
                easing: 'linear',
                complete: function() {
                    $(this).remove();
                }
            });
        }
    }
    
    // Click anywhere to flip on mobile
    $('.card').on('click touchstart', function() {
        $(this).toggleClass('flipped');
    });
});