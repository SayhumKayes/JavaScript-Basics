// variables
var heading = document.querySelector("#h3_Id");
var font_color = document.querySelector("#font_color_options");
var font_family = document.querySelector("#font_family_options");
var font_style = document.querySelector("#font_style_options");
var count1 = 0;
var count2 = 0;
var count3 = 0;

// functions for options
// function for font color options
function Font_color() {
    if (count1 == 0) {// click to show
        font_color.style.display = "block";
        count1++;
    }
    else if (count1 == 1) {// click to hide
        font_color.style.display = "none";
        count1--;
    }
}
// function for font family options
function Font_family() {
    if (count2 == 0) {// click to show
        font_family.style.display = "block";
        count2++;
    }
    else if (count2 == 1) {// click to hide
        font_family.style.display = "none";
        count2--;
    }
}
// function for font style options
function Font_style() {
    if (count3 == 0) {// click to show
        font_style.style.display = "block";
        count3++;
    }
    else if (count3 == 1) {// click to hide
        font_style.style.display = "none";
        count3--;
    }
}

// style changing functions
// default color function
function Default() {
    heading.style.cssText = "color: black;";
    heading.innerHTML = "Change me from the default style!";
}
// red color function
function red() {
    heading.style.cssText = "color: red;";
    heading.innerHTML = "I am changed into red color.";
}
// green color function
function green() {
    heading.style.cssText = "color: green;";
    heading.innerHTML = "I am changed into green color.";
}
// blue color function
function blue() {
    heading.style.cssText = "color: blue;";
    heading.innerHTML = "I am changed into blue color.";
}
// arial font family function
function arial() {
    heading.style.cssText = "font-family: arial;";
    heading.innerHTML = "I am changed into Arial font.";
}
// monospace font family function
function monospace() {
    heading.style.cssText = "font-family: monospace;";
    heading.innerHTML = "I am changed into Monospace font.";
}
// cursive font family function
function cursive() {
    heading.style.cssText = "font-family: cursive;";
    heading.innerHTML = "I am changed into Cursive font.";
}
// normal font style function
function normal() {
    heading.style.cssText = "font-style: normal;";
    heading.innerHTML = "I am changed into normal font style.";
}
// italic font style function
function italic() {
    heading.style.cssText = "font-style: italic;";
    heading.innerHTML = "I am changed into italic font style.";
}
// oblique font style function
function oblique() {
    heading.style.cssText = "font-style: oblique;";
    heading.innerHTML = "I am changed into oblique font style.";
}