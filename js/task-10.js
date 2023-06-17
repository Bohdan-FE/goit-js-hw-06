function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const el = {
  input: document.querySelector('#controls').firstElementChild,
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
} 

el.create.addEventListener('click', handlerCreate);
el.destroy.addEventListener('click', handlerDestroy);
let size = 30;
let arr = [];
function handlerCreate() {
  for (let i = 1; i <= Number(el.input.value); i += 1) {
  const div = document.createElement('div');
  div.style.backgroundColor = getRandomHexColor();
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  size += 10;
    arr.push(div);
  }
  el.boxes.append(...arr);
}
function handlerDestroy() {
  el.boxes.innerHTML = '';
  arr = [];
  size = 30;
}
