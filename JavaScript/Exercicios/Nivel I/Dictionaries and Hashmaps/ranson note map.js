"use strict"

let magazine_words = "two times three is not four";
let note_words = "two times two is four"

let magazine= magazine_words.split(" ");
let note = note_words.split(" ");

let index;
let check = new Map();


//lista de palavras e quantas tem
for (let word of note){

  //se a palavra ja esta no map captura o valor e adiciona 1
  if (check.has(word)){

    check.set(word, check.get(word)+1)

  //se a palavra NÃO esta no map adiciona passando o valor 1
  }else{
    check.set(word, 1)
  }

}
console.log(check)

//percorro o magazine
magazine.map((word)=>{

  //se a palavra esta no map
  if (check.has(word)){

    //descubro onde ela esta no magazine e substituo por NaN
    index = magazine.indexOf(word)
    magazine[index] = "NaN"
  
    if(check.get(word) - 1 == 0){
      //ja acabou a repetição desta palavra no map, apago para n verificar novamente
      check.delete(word)

    }else{
      //ainda tem repetições da palavra no map, porém 1 a menos que antes
      check.set(word, check.get(word)-1)
    }
    
  }
})

//se não contém mais palavras no map todas foram achadas no magazine
if(check.size == 0 ){
  console.log("Yes")
}else{
  console.log("No")
}



