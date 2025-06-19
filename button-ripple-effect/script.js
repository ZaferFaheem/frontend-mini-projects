$(document).ready(function() {
    $('.ripple-button').click(function (e) { 
       var $this = $(this);

       var circle = $('<span class="circle"></span>');
    
       var buttonOffset = $this.offset();
       var buttonWidth = $this.outerWidth();
       var buttonHeight = $this.outerHeight();

       var size = Math.max(buttonWidth, buttonHeight);

       var x = e.clientX - buttonOffset.left - size / 2;
       var y = e.clientY - buttonOffset.top - size / 2;
       
       circle.css({
        width: size,
        height: size,
        left: x,
        top: y,
       });

       $this.append(circle);

       circle.on('animationend', function(){
            circle.remove();
       });
    });
});
