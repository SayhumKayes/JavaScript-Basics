// Letter grade program
document.write("<center><h1>Letter Grading (Logical operators)</h1></center>");

var marks = parseFloat(prompt("Enter your marks here : "));

if (marks > 100 || marks < 0)
    document.write("<h1>" + "Your marks is : " + marks + ", and it is an invalid mark." + "</h1>");
else if (marks >= 80 && marks <= 100)
    document.write("<h1>" + "Your marks is : " + marks + ", and you got A+." + "</h1>");
else if (marks >= 70 && marks <= 79)
    document.write("<h1>" + "Your marks is : " + marks + ", and you got A." + "</h1>");
else if (marks >= 60 && marks <= 69)
    document.write("<h1>" + "Your marks is : " + marks + ", and you got A-." + "</h1>");
else if (marks >= 50 && marks <= 59)
    document.write("<h1>" + "Your marks is : " + marks + ", and you got B." + "</h1>");
else if (marks >= 40 && marks <= 49)
    document.write("<h1>" + "Your marks is : " + marks + ", and you got C." + "</h1>");
else if (marks >= 33 && marks <= 39)
    document.write("<h1>" + "Your marks is : " + marks + ", and you got D." + "</h1>");
else
    document.write("<h1>" + "Your marks is : " + marks + ", and you are Fail" + "</h1>");


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