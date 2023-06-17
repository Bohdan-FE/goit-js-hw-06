function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.widget');
button.addEventListener('click', handler);
function handler() {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = getRandomHexColor();
}

