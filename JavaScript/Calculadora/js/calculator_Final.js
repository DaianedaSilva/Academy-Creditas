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
        if(screen.innerHTML != " ")
            CaptureOperator(value)
  
    }
}


const CaptureOperator = (value_operator) =>{

    switch (value_operator){

        case 'CE':
            ClearScreen();
            Reset();
            return

        case '=': 

            if (lastValue == "number"){

                capturerNumbe2();
                calculate(operator);

            }
            else{
                
                capturerNumbe1();
                calculate(operator);

            } 
            LastValue("operator");
            return

        case operator:
           
            if (lastValue == "number"){

                capturerNumbe2();
                calculate(operator);
                
            }

            LastValue("operator");
           
        default:
            
            operator = value_operator;
            capturerNumbe1(); 
            LastValue("operator");
            return
    }

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
        
}

const capturerNumbe2 = () =>{
    let number = screen.innerHTML;
    number2 = number;
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

const Reset= () =>{
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
}

