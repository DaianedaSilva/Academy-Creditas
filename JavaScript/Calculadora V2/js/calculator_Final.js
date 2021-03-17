let number1;
let number2;
let operator;
const screen = document.getElementById('screen');
let lastValue = " "; //registra o tipo do ultimo botão apertado

const CapturerNumber1 = () =>{
    let number = screen.innerHTML;
    number1 = number;
}

const CapturerNumber2 = () =>{
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

const CheckNumber = (value)=>{
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


const CaptureValue = (value)=>{

    if (CheckNumber(value) || value=="."){

        if (lastValue == 'operator')
            ClearScreen()
        
        ShowOnScreen(value)
        LastValue("number")

    }else {

        if(screen.innerHTML != " ")
            PrepareOperation(value)

    }
}

const PrepareOperation = (value_operator) =>{

    switch (value_operator){

        case 'CE':
            ClearScreen();
            Reset();
            break

        case '=': 

            PrepareCalculeteForEqual();
            LastValue("operator");
            break

        case operator://apertar o mesmo operador que antes           
           
            PrepareCaleculte();
            LastValue("operator");
            break
           
        default://outros operadores
            operator = value_operator; //registra o operator para fazer a conta
            LastValue("operator");
            PrepareCaleculte();  
            break
    }
}

const PrepareCaleculte = () =>{ //so realiza a conta quando tiver o number2

    switch(lastValue){//verifica qual foi o tipo da ultima tecla clicada
        
        case "operator":
            CapturerNumber1();
            break

        case "number":
            CapturerNumber2();
            Calculate(operator)
            break
    }

}

const PrepareCalculeteForEqual = () =>{ //sempre realiza a conta

    switch(lastValue){//verifica qual foi o tipo da ultima tecla clicada
        
        case "operator":
            CapturerNumber1();
            break
        case "number":
            CapturerNumber2();
            break
    }

    Calculate(operator)
}

const Calculate = (operator)=>{

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
                Reset()
                
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