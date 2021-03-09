
let number1;
let number2;
let operator;


const CaptureValue = (value)=>{

    if(value == "CE"){
        Reset()
        ClearScreen()

    }else if (checkNumber(value) || value=="."){

        ShowOnScreen(value)
        
    }else {
        
        capturerNumber()

        captureOperator(value)

        if (number1 != undefined && number2 != undefined){
            
            console.log("FAZER CALCULO")
            calculate(operator)

            Reset()
        }
    }
}


const Reset = ()=>{
    number1 = undefined;
    number2 = undefined;
    // operator = undefined;
    
}

const ClearScreen = ()=>{
    const screen = document.getElementById('screen');
    screen.innerHTML = " ";
}

const checkNumber = (value)=>{
    if (isNaN(value)){
        return false
    }else{
        return true
    }
}

const ShowOnScreen = (number) =>{
    const screen = document.getElementById('screen');
    screen.innerHTML += number;
}


const captureOperator = (value_operator) =>{

    ClearScreen()

    if( value_operator != "="){
       
        operator = value_operator

        ShowOnScreen(value_operator)

        setTimeout(ClearScreen,300)
    }
    console.log("operator:", operator)
}

const capturerNumber = () =>{

    const screen = document.getElementById('screen');
    let number = screen.innerHTML;

    if (number1 == undefined){

        number1 = number;
        console.log('number1:', number1)
        
    }else if (number2 == undefined){
        
        number2 = number;
        console.log("number2:", number2)

    }
}


const calculate = (operator)=>{
    let result;

    number1 = parseFloat(number1)
    number2 = parseFloat(number2)

    switch (operator){
        case '+':
            result =  number1 + number2
            ShowOnScreen(result)
            return
        case '-': 
            result =  number1 - number2
            ShowOnScreen(result)
            return
        case '/': 
            if(number2 == 0){
                ClearScreen()
                ShowOnScreen("ERROR DIVISÃO 0")
                setTimeout(ClearScreen,600)
                Reset()

            }else{
                result = number1/number2 //validar divisão por 0
                ShowOnScreen(result)
            }
            return
        case 'x':
            result = (number1*number2)
            ShowOnScreen(result)
            return
    }
}

