// get random numbers for the players
let player1 = Math.floor(Math.random() * 6 + 1);
let player2 = Math.floor(Math.random() * 6 + 1);
// set the dice image on screen
document.querySelector(".img1").setAttribute("src", "./images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + player2 + ".png");
// delcare a winner
if(player1 < player2){
    document.querySelector(".container h1").innerHTML = "Player 2 wins! &#128681";
    console.log("player2 wins!");
}else if (player1 === player2){
    document.querySelector(".container h1").innerHTML = "Draw!";
}else{
    document.querySelector(".container h1").innerHTML = "&#128681 Player 1 wins!"
}