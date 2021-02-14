var number = Number(prompt("Enter your number : "));

// if/else if/else operator

// if (number > 0)
//     document.write("<h1>" + "Your entered number is : '" + number + "' and it is 'Positive'" + "</h1> <br />");
// else if (number < 0)
//     document.write("<h1>" + "Your entered number is : '" + number + "' and it is 'Negative'" + "</h1> <br />");
// else
//     document.write("<h1>" + "Your entered number is : '" + number + "' and it is 'Zero'" + "</h1>");


// ternary perator

var result = number > 0 ? "<h1>" + "Your entered number is : '" + number + "' and it is 'Positive'" + "</h1> <br />" : number < 0 ? "<h1>" + "Your entered number is : '" + number + "' and it is 'Negative'" + "</h1> <br />" : "<h1>" + "Your entered number is : '" + number + "' and it is 'Zero'" + "</h1>";
document.write(result);