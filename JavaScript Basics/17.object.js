// create an object
// print the value of an object
// adding a constructor
// add a function in the constructor to print the objects value

function Student (name, age, gpa) {
    this.name = name; 
    this.age = age; 
    this.gpa = gpa; 

    this.display = function(){
            document.write(this.name); 
            document.write(this.age); 
            document.write(this.gpa);
    }
}

var student1 = new Student("<h1>" + "Kamal ", "- 24 ", "- 4.50" + "</h1>");
var student2 = new Student("<h1>" + "Rahim ", "- 22 ", "- 5.00" + "</h1>");

student1.display();
student2.display();