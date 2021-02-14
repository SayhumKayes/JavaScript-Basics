// for loop statement

for(var x = 1; x <= 10; x=x+1){
    document.write("<h1>" +  x + ". I am learning JavaScript" + "</h1>");
}


// 1 + 2 + 3 + ... + 10

sum = 0;
for(var x = 1; x <= 10; x = x+1){
    sum = sum + x;
}
document.write("<br />" + "<h1>1 + 2 + 3 + ... + 10 = " + sum + "</h1>");

// 2 + 4 + 6 + ... + 100

sum = 0;
for(var x = 2; x <= 100; x = x+2){
    sum = sum + x;
}
document.write("<br />" + "<h1>2 + 4 + 6 + ... + 100 = " + sum + "</h1>");