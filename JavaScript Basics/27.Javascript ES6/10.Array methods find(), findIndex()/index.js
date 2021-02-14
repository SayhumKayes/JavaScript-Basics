// find(callback, value)  returns the first value of first element that pass the certain condition

let numbers = [13, 5, 14, 55, 7]
let evenNumberValue = numbers.find(x => x % 2 === 0);
document.write(` The given numbers are : ${numbers} <br>`);
document.write(` The first Even number is : ${evenNumberValue} <br><br>`);

// find method with function declaration
let numbers1 = [13, 5, 14, 55, 7]

const evenNumber = (value, index, array) => {
    if (value % 2 == 0)
        return value;
}
let evenNumberValue1 = numbers1.find(evenNumber);
document.write(`${evenNumberValue1} <br><br>`);


// findIndex(callback, value)  returns the first index of first element that pass the certain condition

let numbers2 = [13, 8, 15, 43, 9]
let evenNumberValue2 = numbers2.findIndex(x => x % 2 === 0);
document.write(` The given numbers are : ${numbers2} <br>`);
document.write(` The first Even number index is : ${evenNumberValue2 + 1}<br><br>`);


// find() and findIndex() with objects

const students = [
    {
        id:101,
        gpa: 2.5
    },
    {
        id:102,
        gpa: 3.5
    },
    {
        id:103,
        gpa: 4.5
    },
    {
        id:104,
        gpa: 5
    }
]

let student = students.find(x => x.gpa>4);
document.write(`The first gpa point 4 is : ${student.gpa}`);