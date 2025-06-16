$(document).ready(function () {
    if(localStorage.getItem('theme') === 'dark')
    {
        $('body').addClass('dark-mode');
        $('#toggle').prop('checked', true);
    }
    $('#toggle').change(function () {
        if ($(this).is(':checked')) {
            $('body').addClass('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            $('body').removeClass('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
