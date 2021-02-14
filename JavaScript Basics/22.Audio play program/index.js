var button = document.querySelectorAll(".myButton");
var len = document.querySelectorAll(".myButton").length;

for (i = 0; i < len; i++) {
    button[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);

        audioPlay(text);
    });
}

function audioPlay(text) {
    switch (text) {
        case "A":
            var audio = new Audio("sounds/A.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("sounds/B.mp3");
            audio.play();
            break;
        case "C":
            var audio = new Audio("sounds/C.mp3");
            audio.play();
            break;
    }
}