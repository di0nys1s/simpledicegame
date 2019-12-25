// creating a number number for dice1
var randomNumber1 = Math.round(Math.random() * 5) + 1;
var randomNumber2 = Math.round(Math.random() * 5) + 1;

var newImage1 = "images/dice" + randomNumber1 + ".png";
var newImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", newImage1);
document.querySelector(".img2").setAttribute("src", newImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".refresh-page").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".refresh-page").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".refresh-page").innerHTML = "Draw!";
}
