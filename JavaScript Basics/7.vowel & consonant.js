// vowel and consonant marking if/else statement
document.write("<center><h1>Vowel and Consonant marking program</h1></center>");

// var letter = prompt("Enter your letter : ");

// document.write("<h1>" + "Your entered letter is : " + letter + "</h1>");

// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
//     document.write("<h1>" + " - It is 'Vowel'" + "</h1>");
// else if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U")
//     document.write("<h1>" + " - It is 'Vowel'" + "</h1>");
// else
//     document.write("<h1>" + " - It is 'Consonant'" + "</h1>");


//............................................................................//


// letter marking program using switch statement //

var digit = prompt("Enter your letter : ");

document.write("<h1>" + "Your digit is : " + digit + "</h1>");

switch (digit) { // using multiple case
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        document.write("<h1>" + " - It is 'Vowel'" + "</h1>");
        break;
    default:
        document.write("<h1>" + " - It is 'Consonant'" + "</h1>");
}