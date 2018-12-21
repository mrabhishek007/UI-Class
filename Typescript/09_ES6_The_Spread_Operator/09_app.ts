/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

let array1 = [20, 50, 2, 1, 98];
console.log(Math.min(...array1));
let array2 = ['hello', 100, ...array1 , 'hi']; // new array will be created
console.log(array2);

// create new copy

let copiedArray = array1.slice(); //creates new copy
console.log(array1);
copiedArray = [...array1]; // valid
console.log(array1);

//Ex:

function Employee(){

    let values = [];
    for(let i=0; i<arguments.length;i++){
        values[i] = arguments[i];
    }
    return values;

    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}

