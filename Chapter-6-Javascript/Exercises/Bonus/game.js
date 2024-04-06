var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var options = document.getElementById("options");
var messageDisplay = document.getElementById("message");
var scoreDisplay = document.getElementById("score"); // Added for score display
var score = 0;

colorDisplay.textContent = pickedColor;

// Display options
colors.forEach(function(color) {
    var option = document.createElement("div");
    option.classList.add("option");
    option.style.backgroundColor = color;
    option.addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor; // Store the clicked color
        if (clickedColor === pickedColor) { // Compare the clicked color with pickedColor
            messageDisplay.textContent = "Correct!";
            score += 10;
            scoreDisplay.textContent = score; // Update score display
            generateNewGame();
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
    options.appendChild(option);
});

function generateNewGame() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    options.innerHTML = "";
    messageDisplay.textContent = "";
    colors.forEach(function(color) {
        var option = document.createElement("div");
        option.classList.add("option");
        option.style.backgroundColor = color;
        option.addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor; // Store the clicked color
            if (clickedColor === pickedColor) { // Compare the clicked color with pickedColor
                messageDisplay.textContent = "Correct!";
                score += 10;
                scoreDisplay.textContent = score; // Update score display
                generateNewGame();
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
        options.appendChild(option);
    });
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}