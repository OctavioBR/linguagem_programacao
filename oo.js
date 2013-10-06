function Person(name, age) {
	this.name = name;
	this.age = age;
}

var henrique = new Person("Henrique", 65);
var octavio = new Person("Octavio", 57);

alert("This script was created by " + henrique.name + " - " + octavio.name);

