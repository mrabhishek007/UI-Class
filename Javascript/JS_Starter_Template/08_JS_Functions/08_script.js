//creation of a simple function with no args and execute a function
function  greet() {
    console.log('Good Morning..');
}
greet();

//creation of a simple function with args
function greetArgs(name) {
    console.log('Good Morning '+ name);
}
greetArgs('Vikash');

// executing a function with less number of params
function giveMeLessGifts(chocolates, biscuits) {
    console.log('Chocolates : '+ chocolates + ', Biscuits : '+ biscuits);
}
giveMeLessGifts(40);

//executing a function with more number of params
function giveMeMoreGifts(chocolates, biscuits) {
    console.log('Chocolates : '+ chocolates + ', Biscuits : '+ biscuits);
}
giveMeMoreGifts(40, 20, 'Gifts');


//function overloading is not possible here

/*
function giveMeMoreGifts(chocolates) {
    console.log('Chocolates : '+ chocolates + ', Biscuits : '+ biscuits);
}
giveMeMoreGifts(40);  //error
*/

// functions with return values

function iceCreamBox(money) {
    // return ice-cream
    const iceCream = 'IceCream Price : ' + money ;
    return iceCream;
}
var cone = iceCreamBox(20) ;
console.log(cone) ;

//function with empty return /no return
function iceCreamBox1(money , price) {
    const iceCream = 'You will not get IceCream '  ;
    console.log(iceCream);
}
var cone2 = iceCreamBox1(20,20) ;


// function Expressions with name and execution
var greetFun = function () {
    console.log('I am a function expression...');
}
greetFun();

// Anonymous Function Expression and execution


// Functions as arguments without args
function greet1() {
    console.log('I am greet 1');
}
function greet2() {
    console.log('I am greet 2');
}
function getGreet(greetFun) {
    return greetFun()
}
getGreet(greet2);

// Functions in Objects and Execution
var student = {
    firstName: 'Arjun',
    lastName: 'kr',
    fullName: function () {
        console.log(this.firstName + " " +  this.lastName);
    }
}

student.fullName();

// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */

var employee = {
    name: 'John Snow',
    address: 'Hyderabad',
    age: 40,
    desig: 'Manager',
    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    },
    isFromState: function (state) {
        return (state === this.address.state);
    },
    isFromCountry: country => employee.address.country === country
}
console.log('Is employee from Telangana ? => ' + employee.isFromState('Telangana')); //true
console.log('Is employee from China ? => ' + employee.isFromCountry('China')); //false
console.log('Is employee from India ? => ' + employee.isFromCountry('India')); //true

// Default Function Arguments (arguments)

function defaultArgs() {
    console.log(arguments) ;
}
defaultArgs('Ram', 'Rohan', 'Sita', 'Geeta');
