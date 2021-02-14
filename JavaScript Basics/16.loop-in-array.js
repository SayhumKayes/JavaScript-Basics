// users number addition program using loop in array

var num = new Array();

for (i = 0; i <= 4; i++) {
    num[i] = parseFloat(prompt("Enter a number : "));
}

var sum = 0;

for (var i = 0; i <= 4; i++) {
    document.write(" " + num[i] + "<br />");
    sum = sum + num[i];
}

document.write("Sum = " + sum);


