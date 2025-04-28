// Get the button element
const button = document.getElementById('colorButton');

// Function to change the background color
function changeBackgroundColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD733'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Add event listener to button
button.addEventListener('click', changeBackgroundColor);
