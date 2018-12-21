var CalculatorApp = /** @class */ (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber');
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber');
        CalculatorApp.operatorElement = document.querySelector('#operator');
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button');
        CalculatorApp.resultButtonElement = document.querySelector('#result-button');
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button');
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button');
        CalculatorApp.mulButtonElement = document.querySelector('#divide-button');
        CalculatorApp.divButtonElement = document.querySelector('#multiply-button');
        CalculatorApp.clearButtonElement = document.querySelector('#clear-button');
    };
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.equalsButtonElement.addEventListener('click', CalculatorApp.calculate);
        CalculatorApp.plusButtonElement.addEventListener('click', CalculatorApp.plusButton);
        CalculatorApp.minusButtonElement.addEventListener('click', CalculatorApp.minusButton);
        CalculatorApp.mulButtonElement.addEventListener('click', CalculatorApp.mulButton);
        CalculatorApp.divButtonElement.addEventListener('click', CalculatorApp.divButton);
        CalculatorApp.clearButtonElement.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.calculate = function () {
        var firstNumberString = CalculatorApp.firstNumberElement.value;
        var secondNumberString = CalculatorApp.secondNumberElement.value;
        var operator = CalculatorApp.operatorElement.textContent.trim();
        var results = 0;
        if (firstNumberString !== '' && secondNumberString !== '') {
            var firstNumber = Number(firstNumberString);
            var secondNumber = Number(secondNumberString);
            switch (operator) {
                case '+':
                    results = firstNumber + secondNumber;
                    break;
                case '-':
                    results = firstNumber - secondNumber;
                    break;
                case '*':
                    results = firstNumber * secondNumber;
                    break;
                case '/':
                    results = firstNumber / secondNumber;
                    break;
                default:
                    results = 0;
                    break;
            }
            CalculatorApp.resultButtonElement.textContent = results.toString();
        }
        else {
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    };
    CalculatorApp.plusButton = function () {
        CalculatorApp.operatorElement.textContent = '+';
    };
    CalculatorApp.minusButton = function () {
        CalculatorApp.operatorElement.textContent = '-';
    };
    CalculatorApp.mulButton = function () {
        CalculatorApp.operatorElement.textContent = '*';
    };
    CalculatorApp.divButton = function () {
        CalculatorApp.operatorElement.textContent = '/';
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorElement.textContent = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    };
    return CalculatorApp;
}());
// Flow starts from here
var calculator = new CalculatorApp();
