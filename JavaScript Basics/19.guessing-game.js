// Guessing game
// Guess a number from 1 to 5. Take the number from users.
// Generate a number from 1 to 5.
// If the guess number matches the random number; then show won else lose.
// Run the game for 5 times.
// Show the number of won and lost.


var numOfWon = 0;
var numOfLost = 0;

document.write("<h1>Guessing Results - </h1>");

for (var i = 1; i <= 5; i++) {
    var guessNumber = parseFloat(prompt("Enter a number from 1 to 5 : "));

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber === randomNumber) {
        document.write("<h3>You have won.</h3>");
        numOfWon++;
    }
    else {
        document.write("<h3>You have lost. The random number was : " + randomNumber + "</h3>");
        numOfLost++;
    }
}

document.write("<br /><h1>Total - </h1>");
document.write("<h1>Number of Won : " + numOfWon + "</h1>");
document.write("<h1>Number of Lost : " + numOfLost + "</h1>");