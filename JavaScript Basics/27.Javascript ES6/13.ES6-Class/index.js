// ES6 class
class Student {
    // constructor
    constructor (ID, Name) {
        this.ID = ID;
        this.Name = Name;
    }
    // set
    set studentInfo(name){
        this.name = name;
    }
    // get
    get studentInfo1(){
        return this.ID + " " + this.Name;
    }
}

let student1 = new Student (101, "Rahim");
document.write(`${student1.ID} ${student1.Name} <br>`);

student1.studentInfo = "Habib";
document.write(`${student1.name} <br>`);

document.write(`${student1.ID} ${student1.Name}`);