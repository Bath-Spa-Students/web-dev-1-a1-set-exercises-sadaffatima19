// Execute the code when the window finishes loading
window.onload = () => {
    // Select all input elements
    const inputs = document.querySelectorAll("input");

    // Add change event listener to each input element
    inputs.forEach(input => {
        input.addEventListener('change', calculate);
    });
}

// Function to calculate the total amount based on petrol price and liters purchased
function calculate() {
    // Get the petrol price input value and convert it to a floating-point number
    const Petrol_Price = parseFloat(document.querySelector('#Petrol_Price').value);
    // Get the liters input value and convert it to a floating-point number
    const liters = parseFloat(document.querySelector('#liters').value);

    // If either petrol price or liters is not provided, exit the function
    if (!Petrol_Price || !liters) return;

    // Calculate the total amount by multiplying petrol price and liters
    const totalamount = Petrol_Price * liters;
    // Display the calculated total amount with two decimal places
    document.querySelector('#totalamount').innerText = totalamount.toFixed(2);
}