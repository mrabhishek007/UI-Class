/*
 // Function constructor

 var student ={                  //Internally var student = new Object { data..... } is created
     name:'Vikash',
     age:22,
     job:'teacher',
     yearfBirth:1996
 }

 var Person = function (name, yearOfBirth, job) {
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 }

 Person.prototype.calculateAge = function () {
     return (2018 - this.yearOfBirth);
 };

 Person.prototype.lastName = 'Smith';


 /!*  'new' operator will simply create a new empty object and set 'this' variable to that empty object, not to global object.
     After that it sets property to the empty object       *!/
 var vikash = new Person('Vikash', 1996, 'engineer');
 var john = new Person('John', 1990, 'retired');

console.log(vikash.calculateAge());
console.log(john.calculateAge());
console.log(vikash.lastName);
console.log(john.lastName);

console.log(vikash instanceof Person);//true
console.log(Person.hasOwnProperty('name'));//true
console.log(Person.hasOwnProperty('calculateAge'));//false bcz calculateAge is a prototype property not its own property

*/

/*                     //Object.create

var personProto = {
    calculateAge: function () {
        console.log(2018- this.yearOfBirth);
    },
};

var vikash = Object.create(personProto); //an empty object is created where personProto is a prototype property
vikash.name = "Vikash";    //these are objects(vikash) own property not a prototype
vikash.job = 'enginner';
vikash.yearOfBirth = 1996;


var jane = Object.create(personProto,{         //similar to vikash object above
   name: {value: 'Jane'},
   job: {value: 'designer '},
   yearOfBirth: {value:1992}
});
*/
/*

                        //Passing function as a parameter

var years = [1960,2002,1999,1985,1990];

function calculate(array, func) {
    var ageResult = [];
    for(let i =0; i<array.length ;i++){
        ageResult.push( func(array[i]) );
    }
    return ageResult;
}

function calAge(dob) {
    return (2018- dob);
}

function isYoung(dob){
    if((2018-dob)>=18){
        return true
    }else return false;
}

console.log( calculate(years, calAge) );
console.log( calculate(years, isYoung) );

*/

         /**/











