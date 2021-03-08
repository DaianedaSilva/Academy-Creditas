let k = 15;
let prices = [3, 7, 2, 9, 4]

let soma = 0
let cont = 0

prices.sort(function(a,b){
    return a - b
})

console.log(prices)

prices.forEach(number=>{
    if( number + soma <= k){
        soma =  soma + number
        cont++
    }
})

console.log(cont)
