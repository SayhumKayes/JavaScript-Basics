// callback and higher order function

const taskOne = (callback) => {
    document.write(`Asynchronous Task1 <br>`);
    callback();
}
const taskTwo = (callback) => {
    setTimeout(() => {
        document.write(`Asynchronous Task2 <br>`)
        callback();
    }, 1000);
}
const taskThree = (callback) => {
    document.write(`Asynchronous Task3 <br>`);
    callback();
}
const taskFour = (callback) => {
    document.write(`Asynchronous Task4 <br>`);
    callback();
}
const taskFive = () => {
    document.write(`Asynchronous Task5 <br>`);
}

taskOne(function () {
    taskTwo(function () {
        taskThree(function () {
            taskFour(function () {
                taskFive();
            });
        });
    });
});

// another callback and higher order function

// const square = (x) => {
//     document.write(`Square of ${x} : ${x * x} <br>`);
// }

// square(4);

// const higherOrderFunction = (num, callback) => {
//     callback(num);
// }
// higherOrderFunction(6, square);