// creation of arrays
var array = [10, 20, 30 , 40 , 50] ;

// Accessing an array and its properties
console.log(array);
console.log(array[1]);

// Access not existed property from an array
console.log(array[100]) ; // undefined

// adding properties to an array
array[5] = 60 ;

// Accessing length of an Array
console.log(`Length of array : ${array.length}`)

// reverse the array using reverse()
array = [10, 20, 30 ,40, 50];
console.log('Before Reverse : '+ array);
array.reverse();
console.log('After Reverse : '+ array);


// Remove the first value of the array: shift()
array = [10, 20, 30 ,40, 50];
console.log('Before Shift  : '+ array);
array.shift();
console.log('After Shift  : '+ array);

// Add value to front of the array: unshift()
array = [10, 20, 30 ,40, 50];
console.log('Before Un-Shift  : '+ array);
array.unshift(80);
console.log('After Un-Shift  : '+ array);

// Remove the last value of the array: pop()
array = [10, 20, 30 ,40, 50];
console.log('Before Popping  : '+ array);
array.pop();
console.log('After Popping  : '+ array);

// Add value the end of the array: push()
array = [10, 20, 30 ,40, 50];
console.log('Before Push  : '+ array);
array.push(100);
console.log('After Push  : '+ array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10, 20, 30 ,40, 50];
array.splice(2,1);  //removes 1 element from index 2
console.log(array);
array.splice(2,1,100);  //replacing 1 element at index 2 with 100
console.log(array);
array.splice(2) ; //removes all the element with after index 2
console.log(array);

// Create a copy of an array. Typically assigned to a new variable:slice();
array = [10, 20, 30 ,40, 50];
var newArray = array.slice(0,3);  // [10, 20, 30] // includes starting index and ignored end index no and copies between them values
// var newArray = array.slice() //copies all the element
console.log('New Copied array = ' , newArray);

// indexOf()
array = [10, 20, 30 ,40, 50];
if (array.indexOf(40)!== -1) console.log('Element  exists at index ', + array.indexOf(40) );  // return index of an element id exists otherwise returns -1
else console.log('Elelment doesn\'t exits');

// Join()
array = [10, 20, 30 ,40, 50];
var strArray = array.join('-');
console.log(strArray);

// Prove an array is an Object
 let inputField = document.querySelector('.txtMsg');
 let addBtn = document.querySelector('#addItem');
 let deleteBtn = document.querySelector('#deleteItem');
 let display = document.querySelector('#display');
 let list = [];

 addBtn.addEventListener('click', function () {
     let value = inputField.value;
     if(value==='') alert('Empty Value not allowed!')
     else{

      if(list.indexOf(value) !== -1){
       const cnfBox = confirm(`'${value}' is already added. Do u want to add it again ?`);
       if(cnfBox) list.push(value); display.innerHTML = list.toString(); inputField.value='';
      }
      else list.push(value); display.innerHTML = list.toString(); inputField.value='';
     }
 });

deleteBtn.addEventListener('click', function () {
 if(list.length){
     const cnfBox = confirm(`Are you sure to delete '${list[list.length-1]}' ? `);
     list.pop();
     display.innerHTML = list.toString();
 }else alert('No items available to delete.')

});

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
