function myForEach(array, fn){

    if (array.length == 0){
        return
    }

    fn(array[0]);
    array.shift();
    myForEach(array, fn);
}


array = [0,1,2,3,5]

function Soma5(number){
    soma = number + 5 
    console.log(soma)

}

myForEach(array, Soma5)