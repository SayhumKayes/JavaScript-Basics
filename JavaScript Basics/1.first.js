    // var text1 = prompt("Write your name : ");
    // var len = text1.length;
    // document.write("Number of character" + len);

    // var text2 = "Bangladesh"
    // text2 = text2.charAt(3);
    // document.write(text2);

    // var text3 = "Bangladesh"
    // text3 = text3.toUpperCase(3);
    // document.write(text3);

    // var text4 = "Bangladesh";
    // var text5 = "is a beautiful country";
    // var text = text4.concat(text5);
    // document.write(text);

    // var one = "Bangladesh";
    // var one1 = one.slice(3, 8);
    // document.write(one1);

    var text1 = prompt("Enter your FirstName : ");
    var text2 = prompt("Enter your LastName : ");

    var text = text1 + " " .concat(text2);
    var cut = text.slice(0, 3);

    document.write("<h3>" + "Number of name's charactar is : " + text.length + "</h3>");
    document.write("<h3>" + "Your Full name is : " + text + "</h3>");
    document.write("<h3>" + "The Full name in Uppercase is : " + text.toUpperCase() + "</h3>");
    document.write("<h3>" + "The first 3 letters of your name is : " + cut.toUpperCase() + "</h3>");