// variables
var button = document.querySelectorAll(".myButton");
var len = document.querySelectorAll(".myButton").length;

// main controller of the function
for (i = 0; i < len; i++) {
    button[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);
    });
}

// keypress listener function
document.addEventListener("keypress",function(event){
    var text = event.key.toLowerCase();
    audioPlay(text);
    playAnimation(text);
});

// audio play function
function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio("sounds/A.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/B.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("sounds/C.mp3");
            audio.play();
            break;
    }
}

// animation function
function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("animation");

    setTimeout(function () {
        selectedButton.classList.remove("animation");
    }, 500);
}