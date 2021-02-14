// Square numbers program
var numbers = [2, 4, 6, 8];
var squareNumber = [];
numbers.forEach(function (x) {
    squareNumber.push(x * x);
});
document.write(`${squareNumber} <br />`);


// add 5 with all the array index program
var numbers = [10, 20, 30, 40];
document.write(`Numbers : ${numbers} <br />`)
numbers.forEach(function (x, index, array) {
    array[index] = x + 5; // to take adding number from user: parseFloat(prompt("Enter addition number :"))
});
document.write(`Adding 5 with all numbers : ${numbers}`);
