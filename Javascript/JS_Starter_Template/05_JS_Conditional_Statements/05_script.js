// If Else condition Example


// For loop Example to display from 1 - 10 values


// While loop Example to display from 1 - 10 values


// Do while loop Example to display from 1 - 10 values


// Switch Statement Example

var today = new Date().getDay();  //provides day of week in integer
var str = '' ;
switch (today) {

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
