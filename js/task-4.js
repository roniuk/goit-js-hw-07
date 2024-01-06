let LoginForm = document.querySelector('.login-form');
LoginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let emailInput = this.querySelector('input[name="email"]');
    let passwordInput = this.querySelector('input[name="password"]');

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
}
    
  let formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
};

console.log(formData);
this.reset();
});
