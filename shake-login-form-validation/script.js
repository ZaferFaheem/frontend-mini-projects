$(document).ready(function () {
    $('#loginForm').submit(function(e){
        e.preventDefault();

        let email = $('#email').val().trim();
        let password = $('#password').val().trim();

        if(email === "")
        {
            $('#email-group').addClass('shake');
        }

        if(password === "")
        {
            $('#password-group').addClass('shake');
        }

        setTimeout(() => {
            $('#email-group').removeClass('shake');
            $('#password-group').removeClass('shake');
        }, 300);

    });
});