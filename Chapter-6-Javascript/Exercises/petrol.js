window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('change', calculate);
    });
}

function calculate() {
    const Petrol_Price = parseFloat(document.querySelector('#Petrol_Price').value);
    const liters = parseFloat(document.querySelector('#liters').value);

    if (!Petrol_Price || !liters) return;

    const totalamount = Petrol_Price * liters;
    document.querySelector('#totalamount').innerText = totalamount.toFixed(2);
}