// ----- array destructure ----- //

// let numbers = [10,20,30,40,50];
// let [num1, num2, num3, num4, num5] = numbers;
// document.write(`${num4} `);
// document.write(`${num2}`);


// ----- swap destructure ----- //

// let a = 10;
// let b = 30;
// [a, b] = [b, a];
// document.write(`${b} `);
// document.write(`${a} `);


// ----- object destructure ----- //

// let studentInfo = {
//     ID : 38573,
//     Name : "Rahim",
//     Age : 26
// }
// const {ID, Name, Age} = studentInfo;
// document.write(`${ID} | ${Name} | ${Age}`);


// ----- nested object destructure ------//

// let studentinfo = {
//     student1 : {
//         ID : 43856,
//         Name : "Rahim",
//         GPA : 4.50
//     },
//     languages: {
//         native : 'Bangla',
//         beginner : 'English'
//     }
// }
// const {student1, languages} = studentinfo;
// document.write(student1.Name, student1.GPA);
// document.write(languages.native);
// console.log(languages.native);


// ----- destructuring functions parameters ------ //

// const studentInfo = ({id, name}) => {
//     document.write(`${id} , ${name}`);
// }
// const student = {
//     id : 120,
//     name : "kamal"
// }
// studentInfo(student);


// ----- array in function ----- //

const studentinfo = {
    student1: {
        ID: prompt("Enter your ID : "),
        Name: prompt("Enter your Name : "),
        GPA: prompt("Enter your GPA : ")
    },
    student2: {
        ID: 84873,
        Name: "Karim",
        GPA: 3.90
    },
    student3: {
        ID: 47360,
        Name: "Jamal",
        GPA: 3.80
    }
}
function st1({ student1: { ID }, student1: { Name }, student1: { GPA } }) {
    return `ID : ${ID} <br> Name : ${Name} <br> GPA : ${GPA}`;
}
function st2({ student2: { ID }, student2: { Name }, student2: { GPA } }) {
    return `<br /><br />  ID : ${ID} <br> Name : ${Name} <br> GPA : ${GPA}`;
}
document.write(st1(studentinfo));
document.write(st2(studentinfo));