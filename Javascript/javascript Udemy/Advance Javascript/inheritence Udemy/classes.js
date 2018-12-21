/*
//ES5 Classes

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.age = function () {
    return (new Date().getFullYear() - this.yearOfBirth);
}

var vikash = new Person('Vikash', 1996, 'Software engineer');
console.log(vikash.age());


//ES6

class Person1{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    age(){
        return (new Date().getFullYear() - this.yearOfBirth);
    }

    static greeting(){    //static
        console.log('Hey there!');
    }
}

var raushan = new Person('Raushan', 2002, 'Software engineer');
console.log(raushan.age());
// raushan.greeting();//cannot call static with reference, can called only with Class Name
Person1.greeting();

*/

           /* CLASSES AND SUBCLASSES*/
//es5

var Person3 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person3.prototype.age = function () {
    console.log ( (new Date().getFullYear() - this.yearOfBirth) );
}

var Athlete = function (name, yearOfBirth, job, olympicGames, medals) {

    Person3.call(this, name, yearOfBirth, job);  //calling Person3 just like super keyword bcz we have to initialize Person3 first before doing any operation just like in java

    this.olympicGames = olympicGames;
    this.medals = medals;
}
//similar to extend keyword (Person3 is super class and Athlete is sub-class)

/* Athlete.prototype = Object.create(Person3.prototype)   /*assigning the prototype of Person3 to Athlete prototype, so that
     it can acesss all the prototype property of Person3   OR similar syntax */

Athlete.prototype.__proto__ = Person3.prototype;

Athlete.prototype.wonMdeal = function () {
    this.medals++;
    console.log(this.medals);
}

var athlete  = new Athlete('Sania', 1980, 'athlete', 55, 2);
athlete.age();
console.log(athlete.medals);
athlete.wonMdeal();

//es6

class Person4{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    age(){
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }

    static greeting(){    //static
        console.log('Hey there!');
    }
}

class Athlete2  extends Person4{

    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }

}

var athlete2  = new Athlete('Sania', 1980, 'athlete', 55, 2);
athlete2.age();
console.log(athlete2.medals);
athlete2.wonMdeal();
