"use strict"

let magazine = "ive got a lovely bunch of coconuts";
let note = "ive got some coconuts"

let magazine_words = magazine.split(" ");
let note_words = note.split(" ");

let cont = 0
let tam_Note = note_words.length;
let tam_Maga = magazine_words.length;


for (let n = 0; n < tam_Note; n++){

    for(let m = 0; m < tam_Maga; m++){

        if(magazine_words[m]  == note_words[n]){
            magazine_words.splice(m,1);
            console.log(magazine_words);
            cont ++;
            break;
        }
        
    }
}

if (cont == tam_Note){
    console.log("Yes")
}else{
    console.log("No")
}


