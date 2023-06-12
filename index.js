

document.querySelector(".play").addEventListener("click",function () {


var randomNumber1 = Math.floor(Math.random()*6) +1;
var diceImage1 = "dice" + randomNumber1 +".png";
var image1 = "./"+diceImage1;
document.querySelector(".img1").setAttribute("src",image1);


var randomNumber2 = Math.floor(Math.random()*6) +1;
var diceImage2 = "dice" + randomNumber2 +".png";
var image2 = "./"+diceImage2;
document.querySelector(".img2").setAttribute("src",image2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins! ";
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}else
    document.querySelector("h2").innerHTML = "Draw!"
});


document.querySelector(".reset").addEventListener("click",function() {
    location.reload();
});