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



let tournament1 = tournament[0]
let tournament2 = tournament[1]


let players_win = []









/*
tournament.map(games=>{
   
    
    players_win.push(rpsGameWinner(games[0]))
    console.log(players_win, "--> ganhou")

    console.log("\n\n")

    players_win.push(rpsGameWinner(games[1]))
    console.log(players_win, "--> ganhou")

  

    console.log("\n\n")
})
*/
