const form = document.querySelector('.login-form');
form.addEventListener('submit', handler);
function handler(evt) {
    evt.preventDefault();
    const { elements: { email, password } } = evt.currentTarget;
     if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }
    const result = {
        email: email.value,
        password: password.value,
    }
    console.log(result);
    evt.currentTarget.reset();
}


