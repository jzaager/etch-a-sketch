const sketchDevice = document.querySelector('.sketch-device');
const sketchProps = window.getComputedStyle(sketchDevice, null);
const sketchWidth = sketchProps.getPropertyValue('width').slice(0, -2);
const newDiv = document.createElement('div');
const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('#color-input');
const slider = document.querySelector('.slider');
const currentSliderVal = document.querySelector('.current-slider-val');
const rainbowBtn = document.querySelector('.rainbow');
let penColor = colorBtn.value;

newDiv.className = 'grid-div';
currentSliderVal.textContent += `${slider.value}x${slider.value}`;

makeGrid(slider.value);
// Make a grid based on an input amount
function makeGrid(num) {
  const lenHeight = sketchWidth / num;
  newDiv.style.width = lenHeight + "px";
  newDiv.style.height = lenHeight + "px";

  for (let i = 0; i < (num*num); i++) {
    const gridDivs = newDiv.cloneNode(true);
    sketchDevice.appendChild(gridDivs);
    gridDivs.addEventListener('mouseover', () => {
      gridDivs.style.backgroundColor = penColor;
    });
  }
}

function removeGrid() {
  const grid = document.querySelectorAll('.grid-div');
  for(div of grid) {
    div.remove();
  }
}

colorBtn.addEventListener('change', e => penColor = e.target.value);
clearBtn.addEventListener('click', clearGrid);
rainbowBtn.addEventListener('click', rainbowMode);
slider.addEventListener('change', changeGridSize);

function changeGridSize() {
  currentSliderVal.textContent = 'Grid size: ';
  currentSliderVal.textContent += `${slider.value}x${slider.value}`;
  removeGrid();
  makeGrid(slider.value);
}

function clearGrid() {
  const grid = document.querySelectorAll('.grid-div');
  for (div of grid) {
    div.style.backgroundColor = '#ddd';
  }
}

function rainbowMode() {
  const grid = document.querySelectorAll('.grid-div');
  const n = Math.floor((Math.random() * 255) + 1)
  for (let i = 0; i < grid.length; i++) {
      grid[i].addEventListener('mouseover', () => {
      grid[i].style.backgroundColor = `rgb(${getRandColor()}, ${getRandColor()}, ${getRandColor()})`;
    });
  }
}

function getRandColor() {
  return Math.floor((Math.random() * 255) + 1);
}