
var path = "images/dice";
var randomNumber
imgPlayer1= document.querySelector(".WürfelPlayer1");
imgPlayer2= document.querySelector(".WürfelPlayer2");


randomNumberPlayer1 = Math.floor(Math.random() *6) +1;
randomNumberPlayer2 = Math.floor(Math.random() *6) +1;

imgPlayer1.setAttribute("src", path+randomNumberPlayer1+".png");
imgPlayer2.setAttribute("src", path+randomNumberPlayer2+".png");

if (randomNumberPlayer1 > randomNumberPlayer2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"}

else if(randomNumberPlayer1 === randomNumberPlayer2){
  document.querySelector("h1").innerHTML = "Draw!"

}else{
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩"
}
