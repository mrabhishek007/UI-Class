var string1 = "Hello Js";
var string2 = new String('Hello Js2');
console.log(typeof string1);  //string (It is literal in javascript)
console.log(string1.__proto__ === string2.__proto__); //true bcz internally it has same prototype(so basically same properties )

var undefined_var ;
console.log(typeof undefined_var);  //undefined

var null_var = null;
console.log(typeof null_var); //object (It gives object back instead of null. It's a bug in javascript,technically it's a null)

//Similarly some of the literals are boolean,array,objects,null,symbol etc

    //NaN (Not a number)
var num = 12;
var res = (num -'Hello') ;
console.log(res); //NaN

var obj1 = {
    name:"Vikash",
    age:22,
    occupation:"student",
    1:"one"
}
console.log(obj1.name);
console.log(obj1['age']);  //valid
console.log(obj1['1']);

   //  === operator //
console.log(25=="25"); //true  (Checks similarity but avoid data types)
console.log(25==="25"); //false  (checks with their respective datatype)

var obj2 = {
    prop:"Obj_property"
}
var obj3;
obj3 = obj2;
if(obj3 == obj2){
    console.log("Property are same...")
}

//  arguments //

function argsFun(a,b) {
 console.log(a);
 if(b===undefined){  //when less args values are supplied then the remaining args are treated as  undefined
     b=100;
 }
 console.log(b);
}
argsFun(12);

//The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length

function argFun2() {
   console.log(arguments.length);  //It is a predefined object in js. This object contains an entry for each argument passed to the function
    for(var c=0;c<arguments.length;c++){
        console.log(arguments[c]);
    }

    //converting arguments to array
    var args = Array.from(arguments);
    console.log(args.toString());
    var args1 = [...arguments];  // Spread Syntax with Arguments
    console.log(args1.toString());

}
argFun2(22,'Vikash','data','Hyd');


// this keyword  (Array function doesn't have this operator...)

var person = {
    "firstName": "Sonu",
    "lastName": "Kumar",
    "getFullName": function () {
        return this.firstName + " " + this.lastName ;
    },
    "address":{
        "city":"Patna",
        "state":"Bihar",
        "street":"135th street"
    },
    "isFromState":function (state) {
        if(state === this.address.state){
            return true;
        }
        return false;
    }
}

console.log(`${person.getFullName()} is from ${person.address.city} which is capital of ${person.address.state}`);
console.log(person.isFromState("Bihar"));


//Array forEach() Syntax ==> myArray.forEach(function(index, item, array){   });

var myArray =  ['Johan','Astronot',{"city":"Berlin"},23];

myArray.forEach(fnarray);

function fnarray(item, index, array) {
    console.log(`At position ${index} the item is ${item} `);
    console.log("arraylength = "+array.length);
}

    //                      //
var val1 = 25;
if(val1){        //treated as true
    console.log(true);
}

var val2;
if(val2){   //for undefined it is treated as false
    console.log('I am true');
}else{
    console.log('I am false');
}

var val3=0;     // For non zero number the result is always true
if(val3){
    console.log('I am true');
}else{
    console.log('I am false');
}













