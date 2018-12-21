/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/

// Normal No-args function , same Arrow Function
   let greetNormal = function(){
       console.log('Hello !');
   };
   greetNormal();

   let greetArrow = () => {
       console.log('Hey !');
   };
   greetArrow();

// Normal function with Args and Arrow Function

    let dayNormal = function(day){
        console.log(`Hey its ${day}`);
    };
    dayNormal('Sunday');

    let dayArrow = (day) => {
        console.log(`Hey today is ${day}`);
    };
    dayArrow('Sunday');


// Normal function to find the sum of two numbers with Arrow Function

let sumNormal = function(a,b){
    console.log(`${a} + ${b} = ${a+b}`);
};
let sumArrow = (a, b) => {
    console.log(`${a} + ${b} = ${a+b}`);
} ;
sumNormal(10,20);
sumArrow(20,40);

// Normal function to find the length of an array with Arrow Function

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let lenNormal = function(movies){
    return movies.length;
};

let lenArrow =  movies => movies.length;

console.log(`Movie length : ${lenNormal(movies)}`);
console.log(`Movie length : ${lenArrow(movies)}`);


// Create an array with the length of each element of an array

movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);


// Arrow Function for the above example

let movieLengthArrow = movies.map( movies => movies.length );
console.log(movieLengthArrow);
