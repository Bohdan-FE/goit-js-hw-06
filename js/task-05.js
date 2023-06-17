const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handler);
function handler(evt) {
    output.textContent = evt.currentTarget.value;
    if (!output.textContent) {
        output.textContent = "Anonymous";
    }
}
