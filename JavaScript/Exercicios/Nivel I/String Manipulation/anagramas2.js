//let a = "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn";
//let b = "lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk";

let a = "cdde";
let b = "abc";


let checkA = new Map();

let letter_check;
let value;

let cont = 0;

for (let letter of a){
  letter_check = letter;

  if (checkA.has(letter_check)){
    value = checkA.get(letter) + 1; 
    checkA.set(letter, value)
  }else{
    checkA.set(letter, 1)
  }
  value = 0;
}


for (let i=0; i< b.length; i++){

    //se B esta em A, verifica quantos tem, 
    if(checkA.has(b[i])){
        
        value = checkA.get(b[i]) ; //saber quantos tem

        checkA.set(b[i], value-1)

        if(value-1 == 0){
            checkA.delete(b[i])
        }
        
    }
    else{
        //se B n tiver me A, tira 1
        cont++;
        //console.log(`A letra: ${b[i]}, não esta em A, remove:${cont}`)
    }
}

for (let letter of checkA){
  cont = cont + letter[1]
}


console.log(cont)
return cont
