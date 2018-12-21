//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));

let questionElement = document.querySelector('.text-section-div p');
let txtAreaElement = document.querySelector("#text-area");
let greetElement = document.querySelector("cong-section .p");

txtAreaElement.addEventListener('keyup', function () {
    let question = questionElement.textContent.trim();
    txtAreaElement.style.border = '10px solid orangered'
    console.log(question);

});