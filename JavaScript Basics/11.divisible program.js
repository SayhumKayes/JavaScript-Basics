// creating a program of the sum of all numbers that are divisible by 3 and 5 from 1-100

var x = 1;
var sum = 0;

while (x <= 100) {

    if (x % 3 == 0 && x % 5 == 0) {
        document.write(" " + x);
        sum = sum + x;
    }
    x = x + 1;
}

document.write("<h1>The sum : " + sum + "</h1>");