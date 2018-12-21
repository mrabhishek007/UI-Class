/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var pi = Math.PI;
console.log('PI value : ' + pi);

// Math sqrt
var sqrt = Math.sqrt(25);
console.log(`Square root of 25 is ${sqrt}`);

// find the min of 4 numbers
var min = Math.min(22,55,485,1,0.5,-5);
console.log('Min value : ' + min);

// find the Max of 4 numbers
var max = Math.max(22,55,45,1,0.5,-5);
console.log('Maximum value : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,3);
console.log('2^3 is : ' + pow);

// generate the random numbers from 0 to 100
var randomNo = Math.round(Math.random()*10000000).toString();
console.log(randomNo);
document.querySelector('#display').textContent = randomNo ;

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);

// Get proper date

function getProperMonth( months ){
    var month = (months + 1) ;
    if(month< 10) month = "0" + month ;
    return month;
}
var date = today.getDay() + '-' + getProperMonth( today.getMonth() ) + '-' + today.getFullYear() ;
console.log('Date : ' + date);

// get full day of the week using switch statement
var day = today.getDay();  //provides day of week in integer
var str = '' ;
switch (day) {
    case 0:
        str = 'Sunday';
        break;
    case 1:
        str = "Monday";
        break;
    case 2:
        str = "Tuesday";
        break;
    case 4:
        str = 'Wednesday';
        break;
    case 5:
        str = "Thursday";
        break;
    case 6:
        str = "Friday";
        break;
    case 7:
        str = "Saturday";
        break;
    default:
        str = "";
        break;
}
console.log(`Today is ${str}`) ;


// Display a Digital Clock on the web page
function localTime() {
    var today = new Date();
    var timeZone = {timeZone: 'Asia/Kolkata'};
    var time = today.toLocaleTimeString('en-US', timeZone);
    document.querySelector('#clock').textContent = time;
}
setInterval( localTime, 1000 );


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */

var num1 = 123;
console.log('value: '+ num1 + ', type : ' + typeof num1);

//convert number to string
var strNumber = num1.toString();
console.log('value: '+ strNumber + ', type : ' + typeof strNumber);

//convert string to number
var num2 = parseInt( strNumber )
console.log('value: '+ num2 + ', type : ' + typeof num2);

//display currency values
var num3 = 100;
var currency  =  num3.toFixed(2);
console.log('Currency $ : ' + currency );

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

var greet = 'Good  Morning' ;

// to lowercase
console.log(greet.toLowerCase()) ;

// to Uppercase
console.log(greet.toUpperCase()) ;

//count the number of 'o'
var string = 'Good Morning';
function countO(string) {
    let count = 0;
    for( i=0 ;i<string.length; i++ ){
        if( string.charAt(i)=== 'o' ) count++
    }
    return count;
}
let counting = countO(string);
console.log('Numbers of "o" : ' + counting);

// Reverse of a string
function reverseString(string) {
    let emptystr = '' ;
    for( i=string.length-1; i>=0; i-- ){
        emptystr += string.charAt(i) ;
    }
    return emptystr;
}
console.log( 'Reverse : ' + reverseString(string) ) ;

// string of a number

function strNumbers(num) {
    let stringNum =  '' ;
    while(num!==0){
        const rem = num%10;
        num = parseInt(num/10);
        switch (rem) {
            case 1:
                stringNum += ' ONE ';
                break;
            case 2:
                stringNum += ' TWO ';
                break;
            case 3:
                stringNum += ' THREE ';
                break;
            case 4:
                stringNum += ' FOUR ';
                break;
            case 5:
                stringNum += ' FIVE ';
                break;
            case 6:
                stringNum += ' SIX ';
                break;
            case 7:
                stringNum += ' SEVEN ';
                break;
            case 8:
                stringNum += ' EIGHT ';
                break;
            case 9:
                stringNum += ' NINE ';
                break;
            case 0:
                stringNum += ' ZERO ';
                break;
        }
    }
    return stringNum.split(' ').reverse().join(' ')
}
console.log(strNumbers(982365));