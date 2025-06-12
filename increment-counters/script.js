$(document).ready(function () {
    $('.counter').each(function () { 
         var counterElement = $(this);
         var targetNumber = Number(counterElement.data('target'));

         var interval = setInterval(function(){
            var currentValue = Number(counterElement.text()) + 1;
            counterElement.text(currentValue);
            if(currentValue >= targetNumber)
            {
                clearInterval(interval);
            }
        }, 30);

    });
});