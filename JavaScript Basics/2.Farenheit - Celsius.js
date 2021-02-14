document.write("<center><h1>Farenheit - Celsius</h1></center>");

var F = parseFloat(prompt("Enter Temperature of Farenheit : "));
var C = parseFloat(prompt("Enter Temperature of Celsius : "));

var farenheit_value = F;
var celsius = (F-32)*(5/9);
var celsius_value = C;
var farenheit = (C*(9/5)+32);

document.write("<h1>" + "Entered Farenheit value : " + farenheit_value + "</h1>");
document.write("<h1>" + "The Temperature in Celsius : " + celsius + "</h1>" + "<br />");
document.write("<h1>" + "Entered Celsius value : " + celsius_value + "</h1>");
document.write("<h1>" + "The Temperature in Farenheit : " + farenheit + "</h1>");