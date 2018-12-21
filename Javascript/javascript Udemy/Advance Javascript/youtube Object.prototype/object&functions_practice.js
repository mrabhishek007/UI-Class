var objectfoo = {                     // Internally var objectfoo = new Object() is created
    name:"Angelina",
    birth:"Spain"
}

objectfoo.age = 25;  // a new property age is added to objectfoo
// objectfoo doesn't contain an additional prototype property just like constructor function.objectfoo prototype is always set directly to Object prototype
console.log(objectfoo);
console.log(objectfoo.__proto__ === Object.prototype); //true

var FunctionFoo =  function () {
}
var fun_obj = new FunctionFoo();
fun_obj.name="Katrina";
fun_obj.birth="london";

console.log(fun_obj);
console.log(FunctionFoo.prototype === fun_obj.__proto__); //true
console.log(FunctionFoo.prototype === objectfoo.__proto__); //false bcz function constructer contain on additional __proto__ property
console.log(FunctionFoo.prototype.__proto__ === Object.prototype ); //true
console.log(fun_obj.__proto__.__proto__ === objectfoo.__proto__ ); //true


function behaviour(data) { //It is very different from constructor function.here 'this' is pointing to global reference unlike constructor function
    var myArray= [];
    myArray.push(22);
    myArray.push('raj');
    console.log(data)
    console.log(myArray.toString());
    console.log(this); //window object
    console.log(this.hasOwnProperty('FunctionFoo')); //true bcz FunctionFoo() is defined in window object
    console.log(this.hasOwnProperty('alert')); //true bcz alert() is a predefined function which is directly defined in window object
    this.newGlobalProperty = "I am defined at global"; //we are creating a property on window object
};
behaviour('rahul');
console.log(behaviour.prototype);
console.log(window.hasOwnProperty('newGlobalProperty')) //true bcz above 'newGlobalProperty' is created on window object
console.log(this.hasOwnProperty('newGlobalProperty')) //true bcz here 'this' refers to window object
console.log(newGlobalProperty); // valid bcz property of window object can be called directly without window.propertyName
console.log(this.newGlobalProperty); // valid
console.log(window.newGlobalProperty); // valid

