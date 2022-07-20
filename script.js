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
const sketchWidthPX = sketchProps.getPropertyValue('width');
const sketchWidth = sketchWidthPX.slice(0, -2);
const newDiv = document.createElement('div');
const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('#color-input');
let penColor = colorBtn.value;

colorBtn.addEventListener('change', changeBgColor);

function changeBgColor(e) {
  const grid = document.querySelectorAll('.grid-div');
  for (let i = 0; i < grid.length; i++) {
    penColor = e.target.value;
  }
}

clearBtn.addEventListener('click', () => {
  const grid = document.querySelectorAll('.grid-div');
  for (let i = 0; i < grid.length; i++) {
    grid[i].style.backgroundColor = '#ddd';
  }
});

newDiv.className = 'grid-div';


// defaultGrid();
// Creates 16x16 grid
function defaultGrid() {
  makeGrid(16);
}


makeGrid(prompt("Grid size?"));

// Make a grid based on an input amount
function makeGrid(num) {
  const lenHeight = sketchWidth / num;
  newDiv.style.width = lenHeight + "px";
  newDiv.style.height = lenHeight + "px";

  for (let i = 0; i < (num*num); i++) {
    const grid = newDiv.cloneNode(true);
    sketchDevice.appendChild(grid);
    grid.addEventListener('mouseover', e => {
      grid.style.backgroundColor = penColor;
    });
  }
}
