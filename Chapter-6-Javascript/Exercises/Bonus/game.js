var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var options = document.getElementById("options");
var messageDisplay = document.getElementById("message");
var scoreDisplay = document.getElementById("score");
var score = 0;

updateDisplay();

options.addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        var clickedColor = event.target.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            score += 10;
            updateDisplay();
        } else {
            messageDisplay.textContent = "Try Again";
            event.target.style.backgroundColor = "#232323";
        }
    }
});

function updateDisplay() {
    colorDisplay.textContent = pickedColor;
    scoreDisplay.textContent = score;
    options.innerHTML = "";
    colors.forEach(function(color) {
        var option = document.createElement("div");
        option.classList.add("option");
        option.style.backgroundColor = color;
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