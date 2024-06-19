function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').innerText = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert("Mohon masukkan nilai Celsius yang valid.");
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitReverse').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsiusReverse').value = celsius.toFixed(2);
        document.getElementById('reverseCalculation').innerText = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    } else {
        alert("Mohon masukkan nilai Fahrenheit yang valid.");
    }
}

function reverse() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit !== '') {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').innerText = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;
    }
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('fahrenheitReverse').value = '';
    document.getElementById('celsiusReverse').value = '';
    document.getElementById('calculation').innerText = '';
    document.getElementById('reverseCalculation').innerText = '';
}

function switchToFahrenheitToCelsius() {
    document.getElementById('celsiusToFahrenheit').style.display = 'none';
    document.getElementById('fahrenheitToCelsius').style.display = 'block';
}

function switchToCelsiusToFahrenheit() {
    document.getElementById('fahrenheitToCelsius').style.display = 'none';
    document.getElementById('celsiusToFahrenheit').style.display = 'block';
}
