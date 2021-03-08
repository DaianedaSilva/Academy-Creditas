function ImparouPar(number){

    number = number-2

    if (number == 0){
        console.log("par")
        return "Par"
    }else if (number < 0){
        console.log("impar")
        return "impar"
    }

    ImparouPar(number)

}

number = 5

ImparouPar(number)
