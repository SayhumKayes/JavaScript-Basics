// large number selector program
document.write("<center><h1>Large number selector</h1></center>");

var num1 = parseFloat(prompt("Enter First number"));
var num2 = parseFloat(prompt("Enter Second number"));
var num3 = parseFloat(prompt("Enter Third number"));

document.write("<h1>" + "First number : " + num1 + "</h1>");
document.write("<h1>" + "Second number : " + num2 + "</h1>");
document.write("<h1>" + "Third number : " + num3 + "</h1>");

if (num1 > num2 && num1 > num3)
    document.write("<h1>" + "First number is the largest number and it is = " + num1 + "</h1>");
else if (num2 > num1 && num2 > num3)
    document.write("<h1>" + "Second number is the largest number and it is = " + num2 + "</h1>");
else
    document.write("<h1>" + "Third number is the largest number and it is = " + num3 + "</h1>");