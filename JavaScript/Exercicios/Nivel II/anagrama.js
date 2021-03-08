
function combineAnagrams(arrayAnagrams){

    let newArrayAnagrams = new Array();

    arrayAnagrams.map((words)=>{
    
        let tam_word = words.length;
    
        let word_check = new Map();
    
        for (let letter of words){
    
            let letter_upper = letter.toUpperCase();
     
    
            if (word_check.has(letter_upper)){
                let value = word_check.get(letter_upper) +1;
                word_check.set(letter_upper, value);
    
            }else{
                word_check.set(letter_upper, 1);
            }
        }
    
        let newArray = arrayAnagrams.filter(item => {
    
            if ((tam_word == item.length) && (item != " ")){
    
                let item_upper = item.toUpperCase();
    
                for( let letter of item_upper){
    
                    if(!(word_check.has(letter))){
                        return false;
                    }
                }
                let index = arrayAnagrams.indexOf(item);
                arrayAnagrams[index] = " ";
                return true;
            }else{
                return false;
            }
        
        })
        //
    
        if (newArray.length != 0){
            newArrayAnagrams.push(newArray);
        }
       
    });
    
    return newArrayAnagrams;
    
}

const array = ['creams','CaRs', 'foR',  'four', 'racs', 'scar', 'poTatos' , 'scream']

console.log(combineAnagrams(array))