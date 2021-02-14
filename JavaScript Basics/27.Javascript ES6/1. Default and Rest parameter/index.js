// Default parameter
let message = (text = "Hello I am learning js") => {
    document.write(`${text} <br />`);
}
message();


// Rest parameter
let numbers = (x, y, ...z) => {
    document.write(` <br /> X is : ${x} , Y is : ${y} and Z is : ${z}`);
}
numbers(10, 20, 30, 40, 50);