var num1 = parseFloat(prompt("Enter first number : "));
var num2 = parseFloat(prompt("Enter second number : "));

document.write("<h1> Your entered first number is = " + num1 + "</h1>");
document.write("<h1> Your entered second number is = " + num2 + "</h1> <br />");

function addition(num1, num2) {
    var result = num1 + num2;
    document.write("<h1> The Addition is = " + result + "</h1>");
}
function subtraction(num1, num2) {
    var result = num1 - num2;
    document.write("<h1> The Subtraction is = " + result + "</h1>");
}
function multiplication(num1, num2) {
    var result = num1 * num2;
    document.write("<h1> The Multiplication is = " + result + "</h1>");
}
function division(num1, num2) {
    var result = num1 / num2;
    document.write("<h1> The Division is = " + result + "</h1>");
}

addition(num1, num2);
subtraction(num1, num2);
multiplication(num1, num2);
division(num1, num2);