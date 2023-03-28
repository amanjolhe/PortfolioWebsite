// Get the width of the device screen
const screenWidth = window.innerWidth;

// Check if the screen width is less than or equal to 768 pixels (common breakpoint between desktop and mobile devices)
if (screenWidth <= 768) {
  // Hide the body of the website
  document.querySelector('body').style.display = 'none';
  alert("Please Open in Desktop mode")
} else {
  // Show the body of the website
  document.querySelector('body').style.display = 'block';
}
