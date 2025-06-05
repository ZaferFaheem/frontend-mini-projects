  $(document).ready(function() {
            // Toggle between forms
            $("#show-signup").click(function() {
                $(".login-form").animate({left: "-500px"}, 300);
                $(".signup-form").animate({left: "40px"}, 300);
            });
            
            $("#show-login").click(function() {
                $(".signup-form").animate({left: "500px"}, 300);
                $(".login-form").animate({left: "40px"}, 300);
            });
            
        });