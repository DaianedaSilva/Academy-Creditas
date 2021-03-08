
let number1;
let number2

function CaptureValue(value){

    if(value == "CE"){
        ClearScreen()
    }else{
        
        ShowOnScreen(value);
    }

    
}


const ShowOnScreen = (number)=>{
   
    const screen = document.getElementById('screen');

    if(checkNumber(number)){
        console.log("value:", number)
     
    
        screen.innerHTML += number;

    }else{
        let valor = screen.innerHTML;
        console.log("operador:", valor)

        if (number1 == undefined){
            number1 = valor;
            
        }else if (number2 == undefined){
            number2 = valor;
            if(number == "+"){
                console.log("   soma:")
                number = sum(number1, number2).toString()
                
                ShowOnScreen(number)
               

            }

        }

        ClearScreen()
    }
    
}

function ClearScreen(){
    const screen = document.getElementById('screen');
    screen.innerHTML = "";
}

function checkNumber(number){
    if (isNaN(number)){
        return false
    }else{
        return true
    }
}


function sum(number1, number2){
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)
   let sum_number = number1 + number2
   return sum_number
   
}

