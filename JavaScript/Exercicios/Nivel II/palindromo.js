function palindrome(phrase){

    let newWord="";

    const regexA = /[A-Za-z]/

    for(let letter of phrase){

        if(regexA.test(letter)){
            letter = letter.toUpperCase();
            newWord = newWord + letter
        }
    }

    const tam = newWord.length

    for(let i=0; i < tam; i++){ 
        console.log(`${newWord[i]} == ${newWord[tam-i-1]}`) 
        if(newWord[i] != newWord[tam-i-1]){
            console.log(`${newWord[i]} != ${newWord[tam-i-1]}`) 
            console.log(false)
            return false
        }
    }

    return true

}

const a = "Madam, I'm Adam.";

console.log(palindrome(a))