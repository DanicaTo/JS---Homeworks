// Exercise part 1 -------------------------------------------------------------
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function() {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
  }
}

function Student(firstName, lastName, age, academyName, studentId) {
  Object.setPrototypeOf(this, new Person(firstName, lastName, age));
  this.academyName = academyName;
  this.studentId = studentId;
  this.study = function() {
    console.log(`The student ${this.firstName} is studying in the ${this.academyName}`);
  }
}

let student1 = new Student("Danica", "Tomic", 25, "Web Development", 102);
console.log(student1);

let student2 = new Student("Anne", "James", 30, "Web design", 103);
console.log(student2);

// Exercise part 2 -------------------------------------------------------------
function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
  Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
  this.isStudentOfTheMonth = true;
  this.attendAdobeExam = function() {
    console.log(`The student ${this.firstName} is doing an adobe exam!`);
  }
}
let desStud = new DesignStudent("Emma", "Willson", 20, "Design Academy", 345, true);
console.log(desStud);


function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
  Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
  this.hasIndividualProject = hasIndividualProject;
  this.hasGroupProject = hasGroupProject;
  this.doProject = function(type) {
    if (type === "Individual") {
      console.log(`The student ${this.firstName} has individual project.`)
    } else if (type === "Group") {
      console.log(`The student ${this.firstName} has individual project.`)
    }
  }
}

let codeStud = new CodeStudent("Maya", "Eagles", 25, "Code Academy", 223, false, true);
console.log(codeStud);


function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart) {
  Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
  this.academyPart = academyPart;
  this.attendCiscoExam = function() {
    console.log(`The student ${this.firstName} is doing cisco exam.`);
  }
}
let netStud = new NetworkStudent("Sam", "Marks", 30, "Network Academy", 567, 2);
console.log(netStud);