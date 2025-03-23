class Person {
	constructor(name, age){
           this.name=name;
		this.age=age;
  }
		get fullName(){
			return `${this.name}`
		}
	set fullAge(value){
			let values=value.split(" ")
		console.log(values)
		}
		
	}


class Student extends Person {
constructor(name,age){
	super();
}
	study(){
		return `${this.name} is studying`
	}
	
}

class Teacher extends Person {

	constructor(name,age){
	super();
}
	teach(){
			return `${this.name}  is teaching`
	}
}



const person = new Person("John", 25);
console.log(person.name);


person.fullAge = 30;
console.log(person.FullAge);

const student = new Student("Alice", 22);
student.study(); 

const teacher = new Teacher("Bob", 40);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;