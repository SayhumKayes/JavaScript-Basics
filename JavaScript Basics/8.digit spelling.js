// digit spelling
document.write("<center><h1>Digit spelling program</h1></center>");

var digit = prompt("Enter any digit : ");

document.write("<h1>" + "Your digit is : " + digit  + "</h1>");

switch (digit) {
    case "0":
        document.write("<h1>" + "Your entered digit spelling is 'Zero'." + "</h1>");
        break;
    case "1":
        document.write("<h1>" + "Your entered digit spelling is 'One'." + "</h1>");
        break;
    case "2":
        document.write("<h1>" + "Your entered digit spelling is 'Two'." + "</h1>");
        break;
    case "3":
        document.write("<h1>" + "Your entered digit spelling is 'Three'." + "</h1>");
        break;
    case "4":
        document.write("<h1>" + "Your entered digit spelling is 'Four'." + "</h1>");
        break;
    case "5":
        document.write("<h1>" + "Your entered digit spelling is 'Five'." + "</h1>");
        break;
    case "6":
        document.write("<h1>" + "Your entered digit spelling is 'Six'." + "</h1>");
        break;
    case "7":
        document.write("<h1>" + "Your entered digit spelling is 'Seven'." + "</h1>");
        break;
    case "8":
        document.write("<h1>" + "Your entered digit spelling is 'Eight'." + "</h1>");
        break;
    case "9":
        document.write("<h1>" + "Your entered digit spelling is 'Nine'." + "</h1>");
        break;
    default:
        document.write("<h1>" + "Your entered digit is invalid because it's spelling is not on our database." + "</h1>");
}