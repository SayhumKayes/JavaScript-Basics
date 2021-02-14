// variables
var images = ["img/1.png", "img/2.png", "img/3.png"];
var img_tag = document.querySelector("img");
var prev_btn = document.getElementById("btn1");
var next_btn = document.getElementById("btn2");
var count = 0;

// previous button
function prev() {
    count--;
    // if count is less than 0 it will start again from the 2nd index
    if (count < 0) {
        count = images.length - 1;
        img_tag.src = images[count];
    }
    else {
        img_tag.src = images[count];
    }
}

// next button
function next() {
    count++;
    // if count is greater than image length it will start again from the 0 index
    if (count >= images.length) {
        count = 0;
        img_tag.src = images[count];
    }
    else {
        img_tag.src = images[count];
    }
}