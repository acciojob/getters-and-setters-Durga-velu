

//complete this code
class Person {
	constructor(name, age){
        this._name=name;
		this._age=age;
  }
		get fullname(){
			return `${this._name}`
		}

	get fullAge(){
		return `${this._age}`
	}
	set fullAge(value){
    this._age=value;
    	
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
person.fullAge = 30;
console.log(person.fullAge);

const student = new Student("Alice", 22);
student.study(); 

const teacher = new Teacher("Bob", 40);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;