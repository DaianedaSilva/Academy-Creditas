
// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {

    let p = 0
    let prox = 1
    let exclusao = 0
    let tam = s.length
    
    
    
    while( p < tam){
    
        while (s[p] == s[p+prox]){
            exclusao ++;
            prox ++
        }
        p = p + prox
        prox = 1;
        
    }
    
    return exclusao
    
}
let str = "AAABBB"

alternatingCharacters(str)
