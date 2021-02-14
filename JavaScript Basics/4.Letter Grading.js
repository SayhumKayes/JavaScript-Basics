document.write("<center><h1>Letter Grading</h1></center>");

var marks = parseFloat(prompt("Enter your marks here : "));

if (marks >= 80)
    document.write("<h1>" + "Your marks is - " + marks + " and you got A+." + "</h1>");
else if (marks >= 70)
    document.write("<h1>" + "Your marks is - " + marks + " and you got A." + "</h1>");
else if (marks >= 60)
    document.write("<h1>" + "Your marks is - " + marks + " and you got A-." + "</h1>");
else if (marks >= 50)
    document.write("<h1>" + "Your marks is - " + marks + " and you got B." + "</h1>");
else if (marks >= 40)
    document.write("<h1>" + "Your marks is - " + marks + " and you got C." + "</h1>");
else if (marks < 33)
    document.write("<h1>" + "Your marks is - " + marks + " and you got D." + "</h1>");
else
    document.write("<h1>" + "Your marks is - " + marks + " and you are Fail" + "</h1>");