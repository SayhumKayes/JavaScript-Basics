// soft codings

// var heading = document.querySelector("h1");
// var button = document.querySelectorAll(".myButton");
// var len = document.querySelectorAll(".myButton").length;

// for (i = 0; i < len; i++) {
//     button[i].addEventListener("click", function () {
//         var text = this.innerHTML;  // to show the text of the element
//         heading.innerHTML = text + " is clicked";
//     });
// }


// without taking any variables

for (i = 0; i < document.querySelectorAll(".myButton").length; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;  // to show the text of the element
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}