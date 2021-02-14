var count = 0;
document.querySelector("textarea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;
    var output = document.querySelector("h1").innerHTML = "You have pressed " + "'" + text + "'." + " and the word number is " + count;
    if (text) {
        output.toUpperCase();
    }
    else {
        output.toLowerCase();
    }

});