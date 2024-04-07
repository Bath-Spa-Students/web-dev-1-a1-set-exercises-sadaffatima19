// Generate an array of random colors
var colors = generateRandomColors(6);
// Pick a color to be guessed by the player
var pickedColor = pickColor();
// Get the element to display the RGB color code
var colorDisplay = document.getElementById("colorDisplay");
// Get the element to display color options
var options = document.getElementById("options");
// Get the element to display messages (e.g., correct or incorrect)
var messageDisplay = document.getElementById("message");
// Get the element to display the score
var scoreDisplay = document.getElementById("score");
// Initialize the score
var score = 0;

// Update the display with the initial state
updateDisplay();

// Add event listener to the options container
options.addEventListener("click", function(event) {
    // Check if the clicked element is a color option
    if (event.target.classList.contains("option")) {
        // Get the color of the clicked option
        var clickedColor = event.target.style.backgroundColor;
        // Check if the clicked color is the correct color
        if (clickedColor === pickedColor) {
            // Display "Correct!" message and update the score
            messageDisplay.textContent = "Correct!";
            score += 10;
            updateDisplay();
        } else {
            // Display "Try Again" message and reset the color of the clicked option
            messageDisplay.textContent = "Try Again";
            event.target.style.backgroundColor = "#232323";
        }
    }
});

// Function to update the display with the current state
function updateDisplay() {
    // Display the picked color
    colorDisplay.textContent = pickedColor;
    // Display the score
    scoreDisplay.textContent = score;
    // Clear the options container
    options.innerHTML = "";
    // Add color options to the container
    colors.forEach(function(color) {
        var option = document.createElement("div");
        option.classList.add("option");
        option.style.backgroundColor = color;
        options.appendChild(option);
    });
}

// Function to pick a random color from the colors array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Function to generate an array of random colors
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Function to generate a random RGB color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}