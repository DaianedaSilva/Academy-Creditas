const a = [ 3,2,1 ];
           
let cont = 0
let tam = a.length

for (let i = 0; i < tam; i++){

    for (let j = 0; j < tam - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            let aux = a[j]
            a[j] = a[j+1]
            a[j+1]=aux  
            //swap(a[j], a[j + 1]);
            cont ++

            //[a[j], a[j + 1]] = [a[j + 1], a[j]]
        }
    }
}


console.log(` Array is sorted in ${cont} swaps.\n First Element: ${a[0]}\n Last Element: ${a[tam-1]}` )

return 

