// for...of and for...in


// for...of loop 
var names = ["s1","s2","s3"]  // loops through the values of an iterable object
for (let name of names) {
    console.log(name);
}

// for...in 
var students = {
    ID : 10029,
    Name : "Rahim",
    GPA : 4.50
}
for (let x in students){  // loops through the properties of an object
    document.write(`${x} : ${students[x]} <br />`);
}