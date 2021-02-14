var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "green"; // Sets or returns the color, gradient, or pattern used to fill the drawing
ctx.fillRect(12, 12, 376, 276); // Draws a "filled" rectangle

ctx.lineWidth = 2; // 	Sets or returns the current line width
ctx.strokeStyle = "black"; // Sets or returns the color, gradient, or pattern used for strokes
ctx.strokeRect(10, 10, 380, 280); // Draws a rectangle (no fill)

var centerX = c.width / 2; // returns the value of the center of the field horizontally
var centerY = c.height / 2; // returns the value of the center of the field vertically

ctx.beginPath(); // Begins a path, or resets the current path
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false); // Creates an arc/curve (used to create circles, or parts of circles)
ctx.fillStyle = "red";
ctx.fill(); // 	Fills the current drawing (path)
ctx.stroke(); // Actually draws the path you have defined