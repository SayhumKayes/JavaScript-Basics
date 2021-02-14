// for loop
var num = [10, 20, 30, 40];
for (var x = 0; x < num.length; x++) {
    document.write(`${num[x]} <br>`);
}

document.write(`<hr>`);

// forEach loop
var numbers = [20,40,60,80,100];

// forEach function by creating a function
numbers.forEach(myFunction);
function myFunction(x){
    document.write(`${x} <br>`);
}

// forEach function with an anonymous function
numbers.forEach(function(x){
    document.write(`${x} <br>`);
});