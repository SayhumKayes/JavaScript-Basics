// map function

var numbers = [10, 20, 30, 40];
var newNumbers = numbers.map(myFunction) // we can use anonymous function here
function myFunction(x) {
    return x * x;
}
document.write(newNumbers);


// filter function //

// var num = [10,20,30,40,15,45]
// var newNumber = num.filter(myFunction)
// function myFunction(x){
//         return x>20;
// }
// document.write(newNumber);