/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var array = [101, 'Raj', 'Doctor'];
var empNo = array[0];
var empName = array[1];
var empDesignation = array[2];
console.log(" I am " + empName + ". I am a " + empDesignation + " and my id no. is " + empNo);
empNo = array[0], empName = array[1], empDesignation = array[2]; // destructuring for array type
console.log(" I am " + empName + ". I am a " + empDesignation + " and my id no. is " + empNo);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1]; //exchanging using destructuring
console.log(a);
console.log(b);
// Usage of Destructing to assign each variable of an Object to other vars
var emp = {
    Name: 'raj',
    age: 55,
    designation: 'doctor'
};
var Name = emp.Name, designation = emp.designation; // destructuring for object type
console.log(Name, designation);
var _a;
// Best usage is to exchange the value btw a & b
