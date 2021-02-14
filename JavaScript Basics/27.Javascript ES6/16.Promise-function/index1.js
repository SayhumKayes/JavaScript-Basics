// ----- promise chaining ----- //
document.write(`Hello this is synchronous function <br>`);
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task 1 is completed <br>`)
    });
};
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task 2 is completed <br>`)
        }, 2000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject(`Task 3 is not completed <br>`)
    });
};
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task 4 is completed <br>`)
    });
};

taskOne()
    .then((response) => document.write(response))
    .then(taskTwo)
    .then((response) => document.write(response))
    .then(taskThree)
    .then((response) => document.write(response))
    .then(taskFour)
    .then((response) => document.write(response))
    .catch((error) => document.write(error));

document.write(`This is another synchronous function <br>`);