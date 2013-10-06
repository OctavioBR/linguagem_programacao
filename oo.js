function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHello = function() {
	     alert("My name is " + this.name + ", and i'm " + this.age + " years old");
	};
}

var henrique = new Person("Henrique", 65);
var octavio = new Person("Octavio", 57);

alert("This script was created by " + henrique.name + " - " + octavio.name);

henrique.sayHello();
octavio.sayHello();
