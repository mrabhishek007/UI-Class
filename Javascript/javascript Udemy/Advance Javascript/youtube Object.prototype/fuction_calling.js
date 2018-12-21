/*
//Ways of calling functions in Javascript

function objectfoo() {
    console.log("Hello");
    console.log(this);//when function called directly without new keyword 'this' represents global 'window' object{In case of broswer} | global(In node.js environment)
}
objectfoo(); //method 1

var obj = {'prop':'I am a object property'};
obj.objectfoo = function() {
    console.log("Hello");
    console.log(this);// when object called using method2 'this' refers to 'obj' object i.e. local object, not global like method 1
};
obj.objectfoo();  //method 2

function fun_obj() {
    console.log("Hello");
    console.log(this); //returns empty object
}

new fun_obj();//method 3

function foo2(){

}
new foo2.call( {} ); //method 4

*/

function Bicycle(name, speed, gear, tirePressure) {
    // var this = {};
    this.name = name;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function () {
      this.tirePressure += 3;
      console.log(this.tirePressure);
    };
    //return this;

}

var bicycle = new Bicycle('Honda',20, 5, 23);
bicycle.inflateTires();

function Mechanic(name) {
    this.name = name;
}

var mike = new Mechanic('mike');
mike.inflateTires = bicycle.inflateTires;
console.log(mike.inflateTires());
mike.inflateTires.call(bicycle);//It binds 'this' keyword of bicycle object                #4th way of calling function

