// variables
var button = document.querySelectorAll(".myButton");
var len = document.querySelectorAll(".myButton").length;

// main controller of the function
for (i = 0; i < len; i++) {
    button[i].addEventListener("click", function () {
        var text = this.innerHTML;
        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
        document.querySelector("textarea").innerHTML = `${text}`;
        keyPlay(text);
        playAnimation(text);
    });
}

// keypress listener function
document.addEventListener("keypress", function (event) {
    var text = event.key.toLowerCase();
    keyPlay(text);
    playAnimation(text);
});

// show output
var count = 0;
document.querySelector("textarea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;
    if (text) {
        output.toUpperCase();
    }
    else {
        output.toLowerCase();
    }

});

// key play function
function keyPlay(text) {
    switch (text) {
        case "a":
            break;
        case "b":
            break;
        case "c":
            break;
        case "d":
            break;
        case "e":
            break;
        case "f":
            break;
        case "g":
            break;
        case "h":
            break;
        case "i":
            break;
        case "j":
            break;
        case "k":
            break;
        case "l":
            break;
        case "m":
            break;
        case "n":
            break;
        case "o":
            break;
        case "p":
            break;
        case "q":
            break;
        case "r":
            break;
        case "s":
            break;
        case "t":
            break;
        case "u":
            break;
        case "v":
            break;
        case "w":
            break;
        case "x":
            break;
        case "y":
            break;
        case "z":
            break;
    }
}

// animation function
function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("animation");

    setTimeout(function () {
        selectedButton.classList.remove("animation");
    }, 200);
}