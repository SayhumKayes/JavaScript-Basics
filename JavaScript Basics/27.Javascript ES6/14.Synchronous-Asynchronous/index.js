// Synchronous programming

document.write(`Task1 <br>`);
document.write(`Task2 <br>`);
document.write(`Task3 <br>`);
document.write(`Task4 <br>`);
document.write(`Task5 <br>`);


// Asynchronous programming

const taskOne = () => {
    document.write(`Asynchronous Task1 <br>`);
}
const dataLoading = () => {
    document.write(`Asynchronous Task2 <br>`)
}
const taskTwo = () => {
    setTimeout(dataLoading, 1000);  // asychronous function
}
const taskThree = () => {
    document.write(`Asynchronous Task3 <br>`);
}
const taskFour = () => {
    document.write(`Asynchronous Task4 <br>`);
}
const taskFive = () => {
    document.write(`Asynchronous Task5`);
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();