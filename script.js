/* 1.  Create a container for the grid-squares

2.  Create a webpage with a 16x16 grid of square divs.
    Create the divs using JavaScript. Don’t try making
    them by hand with copy and pasting in your HTML file!
      - Flexbox to arrange grid?
      - Or learn CSS grid!

3.  Add a button to the top of the screen that will send the 
  user a popup asking for the number of squares per side for 
  the new grid. Once entered, the existing grid should be 
  removed and a new grid should be generated in the same 
  total space as before (e.g. 960px wide) so that you’ve got 
  a new sketch pad. Tip: Set the limit for the user input to 
  a maximum of 100. A larger number of squares results in 
  more computer resources being used, potentially causing 
  delays, freezing, or crashing that we want to prevent.
    - Research button tags in HTML and how you can make a JavaScript
      function run when one is clicked.
    - Also check out prompts.
    - You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
 */

const sketchDevice = document.querySelector('.sketch-device');
const sketchProps = window.getComputedStyle(sketchDevice, null);
const sketchWidth = sketchProps.getPropertyValue('width').slice(0, -2);
const newDiv = document.createElement('div');
const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('#color-input');
const slider = document.querySelector('.slider');
const currentSliderVal = document.querySelector('.current-slider-val');
/* const rainbowBtn = document.querySelector('.rainbow'); */
let penColor = colorBtn.value;

newDiv.className = 'grid-div';
currentSliderVal.textContent += `${slider.value}x${slider.value}`;

// Creates 16x16 grid
function defaultGrid() {
  makeGrid(16);
}

makeGrid(slider.value);
// Make a grid based on an input amount
function makeGrid(num) {
  const lenHeight = sketchWidth / num;
  newDiv.style.width = lenHeight + "px";
  newDiv.style.height = lenHeight + "px";

  for (let i = 0; i < (num*num); i++) {
    const gridDivs = newDiv.cloneNode(true);
    sketchDevice.appendChild(gridDivs);
    gridDivs.addEventListener('mouseover', e => {
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
/* rainbowBtn.addEventListener('click', rainbowMode); */
slider.addEventListener('change', () => {
  currentSliderVal.textContent = 'Grid size: ';
  currentSliderVal.textContent += `${slider.value}x${slider.value}`;
  removeGrid();
  makeGrid(slider.value);
});

function clearGrid() {
  const grid = document.querySelectorAll('.grid-div');
  for (div of grid) {
    div.style.backgroundColor = '#ddd';
  }
}

/* function rainbowMode() {
} */