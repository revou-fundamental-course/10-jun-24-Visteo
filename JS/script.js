function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius !== '') {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').innerText = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    }
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').innerText = '';
}

function reverse() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit !== '') {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').innerText = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;
    }
}

function showReverseCalculation() {
    document.getElementById('reverse-link').innerText = "Celsius ke Fahrenheit";
    document.getElementById('reverse-link').onclick = function() {
        location.reload();
    };
    document.getElementById('calculation').innerText = '';
    reset();
}
