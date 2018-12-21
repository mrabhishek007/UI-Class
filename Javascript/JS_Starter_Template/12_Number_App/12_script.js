let inputElement =  document.querySelector('#number') ;

inputElement.addEventListener('keyup', displayString);

function displayString() {
    let temp = '' ;
    let display = document.querySelector('#text-number');
    const validation = [' ZERO ', ' ONE ', ' TWO ', ' THREE ', ' FOUR ', ' FIVE ', ' SIX ', ' SEVEN ' ,' ELIGHT ', ' NINE ' ] ;
    let string = inputElement.value.toString();

    for(i =0 ;i<string.length ;i++){
        temp += validation[ string.charAt(i) ];
    }
    display.textContent = temp  ;
}