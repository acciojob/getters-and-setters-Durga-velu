

//complete this code
class Person {
	constructor(name, age){
           this.name=name;
		this.age=age;
  }
		get fullname(){
			return `${this.name}`
		}
	set fullAge(value){
    this.age=value.age;
    	return `${this.age}`
		}
		
	}


class Student extends Person {
constructor(name,age){
	super();
 this.name=name;
 this.age=age;
}
study(){
  
  console.log( this.name +" is studying")
}
	
}

class Teacher extends Person {

	constructor(name,age){
	super();
  this.name=name;
 this.age=age;
}
	teach(){
 
			console.log(   this.name +" is teaching")
	}
}



const person = new Person("John", 25);
console.log(person.name);


Person.fullAge = 30;
console.log(Person.fullAge);

const student = new Student("Alice", 22);
student.study(); 

const teacher = new Teacher("Bob", 40);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;