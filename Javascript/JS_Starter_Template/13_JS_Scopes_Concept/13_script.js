// Block scoping for FOR loop
for(i=0 ;i<10; i++){
}
console.log(i); // 10

//Block scoping for if Block
var course = 'CSE';
if(course==='CSE'){
    var job = 'Software Engineer';
}
console.log(`Job : ${job}`); // Software Engineer
console.log(`Course : ${course}`); // CSE

// Function Scoping
function allocateJob() {
    if(course==='CSE'){
        var salary = 50000 ;  // scoped variable not accessible outside this function
    }
}
allocateJob();
// console.log(`Salary : ${salary}`); // Error : Salary is not defined bcz it is a child scoped data

// IIFE example
(function (greet) {
    console.log(greet);
})('Good Morning');

// Read and Write Operations for variables

// Implications of Read and Write Operations

var a = 100;
function myFun() {
    var b = a; // b is only accessible inside function

    c = 200; // accessible globally even outside this function
}
myFun();
console.log('The value of C is ' + c);


