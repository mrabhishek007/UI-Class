class CalculatorApp {
    private static firstNumberElement:HTMLInputElement;
    private static secondNumberElement:HTMLInputElement;
    private static operatorElement:HTMLButtonElement;
    private static equalsButtonElement:HTMLButtonElement;
    private static resultButtonElement:HTMLButtonElement;
    private static plusButtonElement:HTMLButtonElement;
    private static minusButtonElement:HTMLButtonElement;
    private static mulButtonElement:HTMLButtonElement;
    private static divButtonElement:HTMLButtonElement;
    private static clearButtonElement:HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }

    public static initialize(){
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operatorElement = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.resultButtonElement = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.mulButtonElement = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.divButtonElement = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clearButtonElement = document.querySelector('#clear-button') as HTMLButtonElement;
    }

    public static addEventListeners(){
        CalculatorApp.equalsButtonElement.addEventListener('click',CalculatorApp.calculate);
        CalculatorApp.plusButtonElement.addEventListener('click',CalculatorApp.plusButton);
        CalculatorApp.minusButtonElement.addEventListener('click',CalculatorApp.minusButton);
        CalculatorApp.mulButtonElement.addEventListener('click',CalculatorApp.mulButton);
        CalculatorApp.divButtonElement.addEventListener('click',CalculatorApp.divButton);
        CalculatorApp.clearButtonElement.addEventListener('click',CalculatorApp.clearAll);
    }

    public static calculate(){
        let firstNumberString:string = CalculatorApp.firstNumberElement.value;
        let secondNumberString:string = CalculatorApp.secondNumberElement.value;
        let operator:string = CalculatorApp.operatorElement.textContent.trim();
        let results:number = 0;

        if(firstNumberString !== '' && secondNumberString !== ''){
            let firstNumber:number = Number(firstNumberString);
            let secondNumber:number = Number(secondNumberString);
            switch(operator){
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
        else{
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    }

    public static plusButton(){
        CalculatorApp.operatorElement.textContent = '+';
    }

    public static minusButton(){
        CalculatorApp.operatorElement.textContent = '-';
    }

    public static mulButton(){
        CalculatorApp.operatorElement.textContent = '*';
    }

    public static divButton(){
        CalculatorApp.operatorElement.textContent = '/';
    }

    public static clearAll(){
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorElement.textContent  = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    }
}

// Flow starts from here
let calculator = new CalculatorApp();