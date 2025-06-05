$('.btn').click(function (e) { 
    e.preventDefault();
    $('.search-container').toggleClass('active');
    $('.input').focus();
});