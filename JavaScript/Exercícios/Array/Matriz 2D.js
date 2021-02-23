function hourglassSum(arr) {
    
    let somaAmpu=0;
    let i = 0;
    let j = 0;

    for (let l=0; l < 6; l++){

        for (let c=0; c< 6; c++){

            for ( i = 0; i < 3; i++){
                for ( j = l; j < (l+3); j++){
                    if (j < 6){
                        somaAmpu += arr[i][j] 
                        console.log(arr[i][j])
                    }
                }             
            }
            console.log("outra ampulheta")

        }
        
       
    }
    console.log("soma: " + somaAmpu)
   
}

const arr = [[1, 1, 1, 0, 0, 0],
             [0, 1, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0],
             [0, 0, 2, 4, 4, 0],
             [0, 0, 0, 2, 0, 0],
             [0, 0, 1, 2, 4, 0]]


hourglassSum(arr)