
let number1;
let number2;
let operator;

const Reset = ()=>{
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    ClearScreen()
}

function ClearScreen(){
    const screen = document.getElementById('screen');
    screen.innerHTML = " ";
}

function CaptureValue(value){
    if(value == "CE"){
        Reset()
    }else{
        ShowOnScreen(value);
    }
}

function checkNumber(number){
    if (isNaN(number)){
        return false
    }else{
        return true
    }
}

const ShowOnScreen = (number)=>{
   
    const screen = document.getElementById('screen');

    if(checkNumber(number) || number=="."){
        console.log("value:", number)
       
        screen.innerHTML += number;

    }else{
    
        let value = screen.innerHTML;
        
        if (number1 == undefined){

            number1 = value;

            console.log('number1:', number1)
            
            operator = number;

            console.log("operador:", operator)
            ClearScreen()
            
        }else if (number2 == undefined){
            console.log(value)

            number2 = value;

             ClearScreen()

            let result = calculate(operator);
            console.log("resultado:", result)
            Reset()
            ShowOnScreen(result)
        }

    }
    
}

const calculate = (operator)=>{

    number1 = parseFloat(number1)
    number2 = parseFloat(number2)
    console.log("operator:", operator)

    switch (operator){
        case '+':
            return number1 + number2
        case '-': 
            return number1 - number2
        case '/': 
            return number1/number2 //validar divisão por 0
        case 'x':
            return (number1*number2)
        case '=':
            return

    }
    
}

