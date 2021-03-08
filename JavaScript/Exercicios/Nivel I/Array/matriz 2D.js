const arr = [[-9, -9, -9,  1, 1, 1],
             [ 0, -9,  0,  4, 3, 2],
             [-9, -9, -9,  1, 2, 3],
             [ 0,  0,  8,  6, 6, 0],
             [ 0,  0,  0, -2, 0, 0],
             [ 0,  0,  1,  2, 4, 0]]



function hourglassSum(arr){
    const tamColuna = arr[0].length;
    const tamLinha = arr.length;
    let cont=0;
    let larger = -63;  //-9 <= arr[i][j] <= 9

    for (let i=0; i<tamLinha-2; i++){
        let sum = 0
        for(let j=0; j<tamColuna-2; j++){
            cont++
    
            sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] +  arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        
        if (sum > larger){

            larger = sum
        }
    }   
        
    }
    
    return larger

}

