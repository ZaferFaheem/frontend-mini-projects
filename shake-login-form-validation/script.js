$(document).ready(function () {
  const emailGroup = $('#email-group');
  const emailInput = $('#email');
  const emailError = $('#email-error');
  const passwordGroup = $('#password-group');
  const passwordInput = $('#password');
  const passwordError = $('#password-error');

  // Real-time validation for email
  emailInput.on('keyup', function () {
    checkEmail();
  });

  // Real-time validation for password
  passwordInput.on('keyup', function () {
    checkPassword();
  });

  // Email validation function
  function checkEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const email = emailInput.val().trim();
    if (email === '') {
      emailGroup.addClass('error shake').removeClass('valid');
      emailError.text("Email can't be blank");
    } else if (!email.match(pattern)) {
      emailGroup.addClass('error shake').removeClass('valid');
      emailError.text('Enter a valid email address');
    } else {
      emailGroup.removeClass('error shake').addClass('valid');
    }
    setTimeout(() => emailGroup.removeClass('shake'), 300);
  }

  // Password validation function
  function checkPassword() {
    const password = passwordInput.val().trim();
    if (password === '') {
      passwordGroup.addClass('error shake').removeClass('valid');
      passwordError.text("Password can't be blank");
    } else {
      passwordGroup.removeClass('error shake').addClass('valid');
    }
    setTimeout(() => passwordGroup.removeClass('shake'), 300);
  }

  // Form submission
  $('#loginForm').submit(function (e) {
    e.preventDefault();

    // Reset previous states
    emailGroup.removeClass('error shake valid');
    passwordGroup.removeClass('error shake valid');

    // Validate email and password
    checkEmail();
    checkPassword();

    // Check if there are any errors
    if (!emailGroup.hasClass('error') && !passwordGroup.hasClass('error')) {
      // Show success message
      alert('Login successful');

      // Clear the form fields after success
      emailInput.val('');
      passwordInput.val('');

      // Optionally, redirect to another page (commented out to avoid breaking demo)
      // window.location.href = 'dashboard.html';
    } else {
      console.log('Form has errors, shaking invalid fields');
    }
  });
});