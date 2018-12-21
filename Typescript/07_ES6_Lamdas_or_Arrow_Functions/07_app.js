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
var greetNormal = function () {
    console.log('Hello !');
};
greetNormal();
var greetArrow = function () {
    console.log('Hey !');
};
greetArrow();
// Normal function with Args and Arrow Function
var dayNormal = function (day) {
    console.log("Hey its " + day);
};
dayNormal('Sunday');
var dayArrow = function (day) {
    console.log("Hey today is " + day);
};
dayArrow('Sunday');
// Normal function to find the sum of two numbers with Arrow Function
var sumNormal = function (a, b) {
    console.log(a + " + " + b + " = " + (a + b));
};
var sumArrow = function (a, b) {
    console.log(a + " + " + b + " = " + (a + b));
};
sumNormal(10, 20);
sumArrow(20, 40);
// Normal function to find the length of an array with Arrow Function
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var lenNormal = function (movies) {
    return movies.length;
};
var lenArrow = function (movies) { return movies.length; };
console.log("Movie length : " + lenNormal(movies));
console.log("Movie length : " + lenArrow(movies));
// Create an array with the length of each element of an array
movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
// Arrow Function for the above example
var movieLengthArrow = movies.map(function (movies) { return movies.length; });
console.log(movieLengthArrow);
