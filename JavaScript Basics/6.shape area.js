document.write("<center><h1>Shape area</h1></center>")

var base = parseFloat(prompt("Enter your Base : "));
var height = parseFloat(prompt("Enter your Height : "));
var a = parseFloat(prompt("Enter your 'a' value of Trapezium : "));
var b = parseFloat(prompt("Enter your 'b' value of Trapezium : "));

var square = base * height;
var rectangle = base * height;
var triangle = (base * height)/2;
var parallalogram = base * height;
var trapezium = ((a+b)*height)/2;

document.write("<h1>" + "Square Area : " + square + "</h1>");
document.write("<h1>" + "Rectangle Area : " + rectangle + "</h1>");
document.write("<h1>" + "Triangle Area : " + triangle + "</h1>");
document.write("<h1>" + "Parallalogram Area : " + parallalogram + "</h1>");
document.write("<h1>" + "Trapezium Area : " + trapezium + "</h1>");