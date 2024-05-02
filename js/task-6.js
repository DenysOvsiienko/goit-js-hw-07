'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const inputNumbers = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const defaultBoxSize = 30;
function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const newBoxSize = defaultBoxSize + i * 10;
    box.style.width = `${newBoxSize}px`;
    box.style.height = `${newBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
createBtn.addEventListener('click', () => {
  const amount = inputNumbers.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumbers.value = '';
  }
});
destroyBtn.addEventListener('click', destroyBoxes);
