const input = document.querySelector('#validation-input');
input.addEventListener("blur", handler);
function handler(evt) {
    if (evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)) {
        if (evt.currentTarget.classList.contains('invalid')) {
            evt.currentTarget.classList.remove('invalid')
        }
        evt.currentTarget.classList.add('valid');
    }
    else {
        if (evt.currentTarget.classList.contains('valid')) {
            evt.currentTarget.classList.remove('valid')
        }
        evt.currentTarget.classList.add('invalid')
    }
}