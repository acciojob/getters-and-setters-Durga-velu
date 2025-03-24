

//complete this code
class Person {
	constructor(name, age){
           this._name=name;
		this._age=age;
  }
		get fullname(){
			return `${this._name}`
		}
	set fullAge(value){
    this._age=value;
    	
		}
		
	}


class Student extends Person {
constructor(name,age){
	super();
 this._name=name;
 this._age=age;
}
study(){
  
  console.log( this._name +" is studying")
}
	
}

class Teacher extends Person {

	constructor(name,age){
	super();
  this._name=name;
 this._age=age;
}
	teach(){
 
			console.log(   this._name +" is teaching")
	}
}

const person = new Person("John", 25);
console.log(person.fullName);
person.fullAge = 30;
console.log(person.age);

const student = new Student("Alice", 22);
student.study(); 

const teacher = new Teacher("Bob", 40);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;