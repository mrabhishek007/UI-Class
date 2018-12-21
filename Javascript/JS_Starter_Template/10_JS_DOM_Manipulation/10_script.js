//BOM Operations

// width of the browser
const width = window.innerWidth;
console.log('width : ' + width + 'px');

// height o the browser
const height = window.innerHeight;
console.log('hight : ' + height + 'px');

// Open a new Tab
function openNewTab(){
    window.open('http://www.google.com');
}

// print method
function printDoc() {
    window.print();
}

// DOM Properties to get body , title , URL
var body = document.body;
console.log(body);

var title = document.title;
console.log(title);

var URL = document.URL;
console.log(URL);

//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events
var h1Element = document.querySelector('#display');
h1Element.textContent = "Good Morning";
h1Element.style.color = 'white';

var h2Element = document.querySelector('h2');
h2Element.style.backgroundColor = 'forestgreen';
h2Element.style.color = 'white';
h2Element.style.boxShadow = '0 0 15px black';

/*****************************************************************************************************************/

let inputElement = document.querySelector('#txtUser');
let errorElement = document.querySelector('#user-error')

function getUser(){

    let userName =  inputElement.value ;
    // inputElement.value = '';

    if(userName === 'vikash'){
        inputElement.style.borderColor = 'Green' ;
        inputElement.style.backgroundColor = 'lightgreen' ;
        errorElement.textContent = "Valid UserName" ;
        errorElement.style.color = 'Green'
    }
    else{
        inputElement.style.borderColor = 'darkred' ;
        inputElement.style.backgroundColor = 'red' ;
        errorElement.textContent = "Invalid Username" ;
        errorElement.style.color = 'red'
    }

}

      // Javascript event listeners

// get the Element
let getUserButton = document.querySelector('#btn');

// add an event listener
getUserButton.addEventListener('click', getUser);


   // EventListener for text box element ('keyup')

inputElement.addEventListener('keyup', getUser)




