let a = 0;
let result = NaN;
let operation='';

function clickButtonValue(element){
    let buttonValue = element.dataset.value;
    if(isNaN(a)){
        a = 0
    }
    let currentNumber = Number(a + buttonValue);
    console.log(currentNumber);
    if (!isNaN(currentNumber)){
        a = currentNumber;
        printToScreen(currentNumber);
    }
}

function printToScreen(value){
    let screen = document.getElementsByClassName("calc-operation")[0];
    screen.innerHTML = value;   
};

function clearScreen(){
    result = NaN;
    a = NaN;
    operation ='';
    printToScreen('0')
};

function onOperationClick(element){
    let operationValue = element.dataset.value;
    console.log(operationValue);
    
    if (operationValue !=='equal'){
        operation = operationValue;
        result = a;
        a = 0;
        return;
    }
    switch(operation){
        case "equal":
            result = Number(a) + Number(result);
            console.log(result)
            break;
        case "add":
            result = Number(a) + Number(result);
            
            break;
        case "substract":
            result = Number(result) - Number(a);
            
            break;  
        case "multiply":
            result = Number(a) * Number(result);
            break;
        case "divide":
            result =  Number(result)/Number(a) ;
            
            break;
    }
    printToScreen(result);

}