// Get the div element with the class "myDiv"
const myDiv = document.querySelector('.myDiv');

// Set the initial background color to red
let isRed = true;
myDiv.style.backgroundColor = 'red';

// Add an event listener to the div element
myDiv.addEventListener('click', () => {
  // Toggle the background color between red and blue
  if (isRed) {
    myDiv.style.backgroundColor = 'blue';
    isRed = false;
  } else {
    myDiv.style.backgroundColor = 'red';
    isRed = true;
  }
});
