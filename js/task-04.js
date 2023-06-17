const el = {
    decrement: document.querySelector("[data-action = decrement]"),
    increment: document.querySelector("[data-action = increment]"),
    value: document.querySelector("#value"),
};
el.decrement.addEventListener('click', onClick);
el.increment.addEventListener('click', onClick);
 let counterValue = 0;
function onClick(evt) {
    if (el.decrement === evt.currentTarget) {
        counterValue -= 1;
    }  else if  (el.increment === evt.currentTarget) {
        counterValue += 1;
    }
    el.value.textContent = counterValue;
}
