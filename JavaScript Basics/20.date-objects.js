// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)


var date = new Date("February 2, 2021 9:31:00");
document.write(date + "<br>");

var y = date.getFullYear();
document.write("Year : " + y + "<br>");

var m = date.getMonth() + 1;
document.write("Month : " + m + "<br>");

var d = date.getDate();
document.write("Date : " + d + "<br>");

var day = date.getDay();
document.write("Day : " + day + "<br>");

var hour = date.getHours();
document.write("Hour : " + hour + "<br>");

var min = date.getMinutes();
document.write("Minutes : " + min + "<br>");

var sec = date.getSeconds();
document.write("Seconds : " + sec + "<br>");