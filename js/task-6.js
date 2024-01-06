function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const desrtoyButton = document.querySelector('[data-destroy]');
const controlsBoxes = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
desrtoyButton.addEventListener('click', destroyBoxes);
function createBoxes() {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    return null;
  }
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    controlsBoxes.appendChild(box);
    size += 10;
  }
  input.value = '';
}

function destroyBoxes() {
  controlsBoxes.innerHTML = '';
}
