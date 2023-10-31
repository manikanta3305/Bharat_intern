function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit.";
}