$(document).ready(function () {
    $("#open-popup").click(function (e) { 
        $('.popup').addClass('active'); 
    });
    $(".close").click(function (e) { 
        $('.popup').removeClass('active'); 
    });
    
});