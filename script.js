document.getElementById('validationForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    if (name.value.trim().length < 5) {
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }


    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }


    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value) || phone.value === '1234567890') {
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
    }


    if (
        password.value.length < 8 ||
        password.value.toLowerCase() === 'password' ||
        password.value.toLowerCase() === name.value.toLowerCase()
    ) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }


    if (isValid) {
        alert('Form Submitted Successfully!');
        this.reset();
    }
});
