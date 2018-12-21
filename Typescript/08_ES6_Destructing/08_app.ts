/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
    let array = [101, 'Raj', 'Doctor'];
    let empNo = array[0];
    let empName = array[1];
    let empDesignation = array[2];

    console.log(` I am ${empName}. I am a ${empDesignation} and my id no. is ${empNo}`);

    [empNo,empName,empDesignation] =  array;  // destructuring for array type

    console.log(` I am ${empName}. I am a ${empDesignation} and my id no. is ${empNo}`);

// Usage of Destructing to exchange the values of two vars

    let a = 10;
    let b = 20;
    [a,b] = [b,a]; //exchanging using destructuring
    console.log(a);
    console.log(b);

// Usage of Destructing to assign each variable of an Object to other vars
let emp = {
    Name: 'raj',
    age: 55,
    designation: 'doctor'
};
let {Name, designation} =emp;   // destructuring for object type
console.log(Name, designation);

// Best usage is to exchange the value btw a & b
