
let number1;
let number2;
let operator;
const screen = document.getElementById('screen');
let lastValue = " ";

const CaptureValue = (value)=>{

    if (checkNumber(value) || value=="."){

        if (lastValue == 'operator'){
            ClearScreen()
        }
    
        ShowOnScreen(value)
        LastValue("number")
    }else {

        CaptureOperator(value)
        
    }
}


const CaptureOperator = (value_operator) =>{
    
    if(value_operator == "CE"){
        ClearScreen()

    }else if(value_operator == "="){

        if (lastValue == "number"){
            capturerNumbe2()
            calculate(operator)
            

        }else{
            capturerNumbe1()
            calculate(operator)
        } 

    }else{
        operator = value_operator
        capturerNumbe1() 
    }

   LastValue("operator")

}

const calculate = (operator)=>{

    let result;
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)


    switch (operator){
        case '+':
            result =  number1 + number2
            ClearScreen()
            ShowOnScreen(result)
            return
        case '-': 
            result =  number1 - number2
            ClearScreen()
            ShowOnScreen(result)
            return
        case '/': 
            if(number2 == 0){
                ClearScreen()
                ShowOnScreen("ERROR DIVISÃO 0")
                setTimeout(ClearScreen,600)
                
            }else{
                result = number1/number2 
                ClearScreen()
                ShowOnScreen(result)
            }
            return
        case 'x':
            result = (number1*number2)
            ClearScreen()
            ShowOnScreen(result)
            return
    }
}

const capturerNumbe1 = () =>{
    let number = screen.innerHTML;
    number1 = number;
    console.log('Capturando number1:', number1)
        
}

const capturerNumbe2 = () =>{
    let number = screen.innerHTML;
    number2 = number;
    console.log(" Capturando number2:", number2)
}

const LastValue = (value) =>{
    lastValue = value;
}

const ClearScreen = ()=>{
    screen.innerHTML = " ";
}

const ShowOnScreen = (number) =>{
    screen.innerHTML += number;
}

const checkNumber = (value)=>{
    if (isNaN(value)){
        return false
    }else{
        return true
    }
}

