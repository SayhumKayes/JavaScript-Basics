// addition, subtraction, multiplication, division

var num1 = parseFloat(prompt("Enter First number : "));
var num2 = parseFloat(prompt("Enter Second number : "));

var sum1 = (num1 + num2);
var sum2 = (num1 - num2);
var sum3 = (num1 * num2);
var sum4 = (num1 / num2);
var sum5 = (num1 ** num2);

document.write("<h1> - Addition</h1>");
document.write("<h1>First number : " + num1 + "</h1>");
document.write("<h1>Second number : " + num2 + "</h1>");
document.write("<h1>First + Second = " + sum1 + "</h1>" + "<br />");

document.write("<h1> - Subtraction</h1>");
document.write("<h1>First number : " + num1 + "</h1>");
document.write("<h1>Second number : " + num2 + "</h1>");
document.write("<h1>First - Second = " + sum2 + "</h1>" + "<br />");

document.write("<h1> - Multiplication</h1>");
document.write("<h1>First number : " + num1 + "</h1>");
document.write("<h1>Second number : " + num2 + "</h1>");
document.write("<h1>First * Second = " + sum3 + "</h1>" + "<br />");

document.write("<h1> - Division</h1>");
document.write("<h1>First number : " + num1 + "</h1>");
document.write("<h1>Second number : " + num2 + "</h1>");
document.write("<h1>First / Second = " + sum4 + "</h1>" + "<br />");

document.write("<h1> - To the power </h1>");
document.write("<h1>First number : " + num1 + "</h1>");
document.write("<h1>power number : " + num2 + "</h1>");
document.write("<h1>First<sup>(power)</sup> = " + sum5 + "</h1>");