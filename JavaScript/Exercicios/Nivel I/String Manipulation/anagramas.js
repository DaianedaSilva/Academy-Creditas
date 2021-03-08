//let a = "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn";
//let b = "lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk";

let a = "cde";
let b = "abcc";


let tamA = a.length;
let tamB = b.length;


let encontrou;
let excluido = 0;
let repetido = 0;
let pa = 0;

let str1 = tamA
let str2 = tamB


for (let k = 0; k < 2; k ++ ){

    for (let i = 0;i < str1; i++ ){
        encontrou = false;
    
        for (let j = 0;j < str2; j++ ){
            
            if (a[i] == b[j]){
                if(encontrou == true){
    
                    repetido ++;
                }
                encontrou = true;                   
                
            } 
           
        }
    
        if (encontrou == false){
            console.log( ` excluir : ${b[i]} `)
           
            excluido ++;
        }
     
    }

    str1 = tamB
    str2 = tamA


}
console.log( `${excluido} + ${repetido}`)

