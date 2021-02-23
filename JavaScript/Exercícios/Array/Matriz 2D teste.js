const arr = [[-9, -9, -9,  1, 1, 1],
             [ 0, -9,  0,  4, 3, 2],
             [-9, -9, -9,  1, 2, 3],
             [ 0,  0,  8,  6, 6, 0],
             [ 0,  0,  0, -2, 0, 0],
             [ 0,  0,  1,  2, 4, 0]]

const tamColuna = arr[0].length;
const tamLinha = arr.length;

let coluna = 0;
let linha = 0;

let soma = 0
let somatoria = 0;


while( true ){

    if (coluna + 2 <= tamColuna - 1){

        let col = 0;
        for(c = coluna; c < 3 + coluna; c++ ){
            let lin = 0;
            for( l = linha; l < 3 + linha; l++){
                
                    if (!( (col == 0 || col == 2 ) && lin == 1 )){
                        console.log(arr[l][c])  
                        soma = soma +  arr[l][c]
                    }
                    lin = lin + 1
            }
            col = col + 1
        }
        somatoria = soma + somatoria   
        soma = 0
        coluna = coluna +1;
     
         
    }else{
        linha = linha + 1;
        coluna = 0;

        if ( linha + 2 > tamLinha-1){
            return somatoria
            break

        }
    }
    
}


/*
const arr = [[1, 1, 1, 2],
             [0, 1, 0, 2],
             [1, 1, 1, 2]]
const arr = [[-9, -9, -9,  1, 1, 1],
             [ 0, -9,  0,  4, 3, 2],
             [-9, -9, -9,  1, 2, 3],
             [ 0,  0,  8,  6, 6, 0],
             [ 0,  0,  0, -2, 0, 0],
             [ 0,  0,  1,  2, 4, 0]]
  
while( coluna + 2 <= tamColuna-1){


    console.log(`Ampulheta ${coluna} :`)

    //fazendo as linhas
    for(c = coluna; c < 3 + coluna; c++ ){
        for( l = 0; l <3; l++){
            console.log(arr[l][c])   
        }

    }
    coluna = coluna +1;

}
*/