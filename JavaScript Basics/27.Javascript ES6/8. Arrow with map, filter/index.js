// arrow with map and filter 

var studentInfo = [
    {
        Id: 13723,
        Name: "Rahim",
        GPA: 4.50
    },
    {
        Id: 34769,
        Name: "Kamal",
        GPA: 4.36
    },
    {
        Id: 47839,
        Name: "Karim",
        GPA: 5.00
    },
    {
        Id: 64353,
        Name: "Bijoy",
        GPA: 4.00
    }
]

// normal function //

// function studentInformation() {
//     return studentInfo.filter(function(x){
//         return x.GPA > 4.00;
//     }).map(function(y){
//         return y.Name;
//     });
// }

// ES6 function //

// const studentInformation = () => {
//     return studentInfo.filter((x) => { return x.GPA > 4.00}).map((y) => { return y.Name});
// }

// ES6 function with more simplify //

const studentInformation = () => {
    return studentInfo.filter((x) => x.GPA > 4.00).map((y) => y.Name);
}
document.write(studentInformation());