// Get the unordered list element
const myList = document.querySelector('ul');

// Add an event listener to the unordered list element
myList.addEventListener('click', (event) => {
  // Check if the clicked element is a list item
  if (event.target.nodeName === 'LI') {
    // Perform some action on the clicked list item
    console.log('Clicked on list item:', event.target.textContent);
  }
});
