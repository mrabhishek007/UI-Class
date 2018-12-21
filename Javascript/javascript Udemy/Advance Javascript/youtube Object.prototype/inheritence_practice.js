
var Person = function (name,age,profession) {
    this.name =name;
    this.age =age;
    this.profession =profession;
}

var p1 = new Person('Raj',23,"Doctor");
console.log(p1.__proto__ === Person.prototype);  //true
console.log(p1.__proto__.__proto__ === Object.prototype ); //true
console.log(Person.prototype.__proto__=== Object.prototype ); //true

/*
Person.prototype.getInfo = function () {
    console.log(`This is ${this.name}. I am ${this.age} years old.I am a ${this.profession}`);
}*/

//valid bcz prototype of p1 and Person are same
p1.__proto__.getInfo = function () {
    console.log(`This is ${this.name}. I am ${this.age} years old.I am a ${this.profession}`);
}

p1.getInfo();
var p2 = new Person('Vikash',22,"se");
p2.getInfo();

Person.JobLocation ="Banglore";
console.log(Person.JobLocation); //banglore bcz it will acts as static which will be accessable using Class name only
console.log(p1.JobLocation); //undefined
console.log(p1.__proto__.constructor.JobLocation);//banglore(it can be acessed but not used anywhere)

var Actor = function (name,age,profession,movies) {

    /* this.name =name;
     this.age =age;
     this.profession =profession;
         OR
    */

    //Instead of assigning property like above we can directly initialize value to Parent object just like super keyword in java
    Person.call(this,name,age,profession);
    this.movies = movies;
}

Actor.prototype.getMovies = function () {
    console.log(this.movies.toString());
}

var actor1 = new Actor('Moru',25,'Actor',['terminator','transformers','jamesbond']);
actor1.getMovies();
console.log(actor1.__proto__ === Actor.prototype);  //true
console.log(actor1.__proto__.__proto__ === Object.prototype ); //true

//Now we want getInfo() of Person obj in Actor.

Actor.prototype.__proto__ =  Person.prototype ;  //changing the prototype of Actor to Person Prototype.So all the functionality of Person are acessible to actor now
 actor1.getInfo();



























