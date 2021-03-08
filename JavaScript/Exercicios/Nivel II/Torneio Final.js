
function rpsGameWinner(game){

    if (game.length != 2){
        throw "WrongNumberOfPlayersError";
    }else{

        for (let plays of game){
            plays[1] = plays[1].toUpperCase();

            if (plays[1] != "PA" && plays[1] != "PE" && plays[1] != "TE" ){
                throw "NoSuchStrategyError"
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



function tournamentGameWinner(tournament, player_win){

        if(typeof tournament[0][0][0] != 'string'){
 
            tournamentGameWinner(tournament[0])

        }else{
            let win = [];
            win.push(rpsGameWinner(tournament[0]))
            win.push(rpsGameWinner(tournament[1]))

            player_win.push(rpsGameWinner(win))

            return(player_win)


        }
}

let player_win = new Array;

let tournament = [  
    [   [      
            ['Armando', 'PE'], ['Dave', 'TE']    
        ],    
        [      
            ['Richard', 'PA'], ['Michael', 'TE']    
        ],  
    ],  
    [    
        [      
            ['Allen', 'TE'], ['Arthur', 'TE']    
        ],    
        [      
            ['David', 'PA'], ['Omer', 'PE']    
        ],  
    ],
];


tournament.forEach( (game, index)=>{
    tournamentGameWinner(game, player_win)
    if (index == 1){
        console.log(rpsGameWinner(player_win))
    }

})