var heading = document.querySelector("h1");
var count = 0;

// --- click event --- //

heading.addEventListener("click", function () {
    if (count === 0) {
        heading.classList.add("my_style");
        count++;
    }
    else if (count === 1) {
        heading.classList.remove("my_style");
        count--;
    }
});

// --- mouseover and mouseout event --- //

// heading.addEventListener("mouseover", function () {
//     if (count == 0) {
//         heading.classList.add("my_style");
//         count++;
//     }
// });
// heading.addEventListener("mouseout", function(){
    
//     if (count == 1) {
//         heading.classList.remove("my_style");
//         count--;
//     }
// });

// --- simple mouseover and mouseout event --- //

// heading.addEventListener("mouseover", function () {
//     heading.classList.add("my_style");
// });

// heading.addEventListener("mouseout", function () {
//     heading.classList.remove("my_style");
// });