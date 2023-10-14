function convertToFar() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit";
}

function convertToCel() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result2").innerText = fahrenheit + " Fahrenheit is " + celsius.toFixed(2) + " Celsius";
}