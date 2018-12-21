
var studLoc = "India";

console.log("*********************ES6*************************");


class Student {
    // x; = 20;   //ES^6 classes can only have functions

    //'this' keyword makes direct property of Student otherwise anything who doesnot contain this will be considered
    // as prototype property of Student.here firstName,lastName is the main property ,everyone else is prototype property

    constructor(firstName, lastName){

        this.firstName = firstName;  //'this' tells that firstName is the property of Student
        this.lastName = lastName;
    }

    getFirstName(){                    //It will be available in Student prototype property
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    static getStudLoc(){      //static method; this method only exists on the class and doesn't exist on child objects
        return studLoc;
    }
};

var stud = new Student('Raj','Kumar');

// An instance method;
// All Person objects will have this method
Student.prototype.getfullName = function(){// When userObj want to add an prototype property from outside this approach is useful.It will be available in Student prototype property
    return this.firstName+ " " + this.lastName;
}



console.log(stud.getFirstName());
console.log(Student.getStudLoc());
console.log(stud.getfullName());
console.log(stud);
console.log(stud.hasOwnProperty('firstName'));  //true
console.log(stud.hasOwnProperty('getFirstName'));  //false


//    using es5   //
console.log("*********************ES5*************************");
var Student1 = function (firstName, slastName){   //similar to constructor function of es6

    this.firstName = firstName ;
    this.lastName = slastName ;

    this.getFirstName =function () {   //this function is binded with 'this keyword'.so it is direct property of Student1 not a prototype property
        return firstName;
    }

    getLastName =function () {   //You cannot call getLastName() from outside bcz it is neither Student1 property nor prototype
        return lastName;
    }

    console.log(getLastName());

}
Student1('ram','rahim');
Student1.getstudLoc = function () {     //static[es6]  method is similar to this syntax .This method only exists on the class     // and doesn't exist on child objects
    return studLoc;
}

// An instance method;
// All Person objects will have this method
Student1.prototype.getfullName = function(){   // When userObj want to add an object property from outside this approach is useful
    return this.firstName+ " " + this.lastName;
}

var stud1 = new Student1('John', 'Sinha');
console.log(stud1.firstName);
// console.log(stud1.getStudLoc()); static variable can be only accessed directly with class name
console.log(Student1.getstudLoc());
// console.log(stud1.getLastName()); //not acessible bcz no this keyword
console.log(stud1.getfullName());
console.log(stud1);
console.log(stud1.hasOwnProperty('getFirstName')); //true bcz getFirstName is linked using 'this keyword',so it represents as property of STudent1
console.log(stud1.hasOwnProperty('getLastName')); //false
console.log(stud1.hasOwnProperty('getstudLoc'));  //false

