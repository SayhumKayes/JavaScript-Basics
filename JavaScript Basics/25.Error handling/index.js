var btn = document.querySelector("#checkButton");
var input = document.querySelector("#numberText");

btn.addEventListener("click", function () {
    var num = input.value;
    try {
        if (num < 5) {
            throw "The input value is too low. Please enter value from 5 - 10.";
        }
        else if (num > 10) {
            throw "The input value is too high. Please enter value from 5 - 10.";
        }
        else{
            throw "The input value is valuable.";
        }
    } catch (error) {
        document.querySelector("#message").innerHTML = error;
    }
});