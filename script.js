/* 1.  Create a container for the grid-squares

2.  Create a webpage with a 16x16 grid of square divs.
    Create the divs using JavaScript. Don’t try making
    them by hand with copy and pasting in your HTML file!
      - Flexbox to arrange grid?
      - Or learn CSS grid!

    newDiv = CREATE ELEMENT('DIV')
    
    For i<17
      For j<17
        Append the newDiv to the parent container
        Add class list to the variable (and to CSS)
        
        // Add Eventlisteners for "mouse-enter" (I think)
        to all the newDivs
        // (Maybe make this a separate function)

        When mouse enters newDiv target
          newDiv.style.backgroundColor = 'black'?

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


const sketchDevice = document.querySelector('.sketch-area-border');
const newDiv = document.createElement('div');
const newRow = document.createElement('div');
const newCol = document.createElement('div');

newDiv.className = 'grid-div';
newRow.className = 'row-div';
newCol.className = 'col-div';

//defaultGrid();
// Creates 16x16 grid
function defaultGrid() {
  for (let i = 0; i < 256; i++) {
    const grid = newDiv.cloneNode(true);
    sketchDevice.appendChild(grid);
  }
}

makeGrid(prompt("Grid size?"));
function makeGrid(num) {
  for (let i = 0; i < (num*num); i++) {
    const width = 500 / num;
    newDiv.style.width = width + "px";
    newDiv.style.height = width + "px";
    const grid = newDiv.cloneNode(true);
    sketchDevice.appendChild(grid);
    console.log(newDiv.width);
  }
}






// CREATE 1 ROW
// CREATE 16 ROWS
// CREATE 1 COLUMN
// CREATE 16 COLUMNS
// FILL ROWS WITH DIVS
// FILL COLUMNS WITH DIVS