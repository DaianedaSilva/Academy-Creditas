let number1;
let number2;
let operator;
const screen = document.getElementById('screen');
let lastValue = " "; //registra o tipo do ultimo botão apertado

const CapturerNumbe1 = () =>{
    let number = screen.innerHTML;
    number1 = number;
}

const CapturerNumbe2 = () =>{
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

            if (lastValue == "operator"){
                // o Number1 agr é o valor da tela e realiza a ultima operação mantendo o number2
                CapturerNumbe1();
                Calculate(operator);
            }
            else{
                //captura valor na tela e realiza a conta
                CapturerNumbe2();
                Calculate(operator);
            } 
            LastValue("operator");
            break

        case operator://caso aperte o mesmo operador mais uma vez, depois de digitar um número, realiza a operação, se não digitou um numero apenas caputura o valor da tela para a nova operação
           
            if (lastValue == "number"){
                CapturerNumbe2();
                Calculate(operator);
                
            }else{
                CapturerNumbe1(); 
            }
            
           
        default://outros operadores
            operator = value_operator; //registra o operator para fazer a conta
            CapturerNumbe1(); 
            LastValue("operator");
            break


            
    }
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