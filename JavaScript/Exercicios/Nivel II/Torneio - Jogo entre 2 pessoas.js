let game = [ ["Daiane", "TE"],["Diandria", "PA"] ]

function rpsGameWinner(game){

    if (game.length != 2){
        throw "WrongNumberOfPlayersError";
    }else{

        for (let plays of game){
            plays[1] = plays[1].toUpperCase();

            if (plays[1] != "PA" && plays[1] != "PE" && plays[1] != "TE" ){
                return "NoSuchStrategyError"
            }
        }
            
        let player1 = game[0];
        let player2 = game[1];

        if (player1[1] == player2[1]){
            return player1
        }else if ((player1[1] == "PA" && player2[1] == "PE") ||  (player1[1] == "TE" && player2[1] == "PA") || (player1[1] == "PE" && player2[1] == "TE")){
            return player1

        }else if(( player2[1] == "PA" && player1[1] == "PE") ||  (player2[1] == "TE" && player1[1] == "PA") || (player2[1] == "PE" && player1[1] == "TE") ){
            return player2
        }
    
    }
}


console.log(rpsGameWinner(game))