//The player will be shown a random number   

//Crystals will be assigned a specific number

//When the player clicks on a crystal it will add a specific amout of points to the players total

//Increment user score counter by the crystals random number

//If number goes beyond random computer number then game over

//Player wins if the total equals number of the computer 

//Player loses if score goes beyond random computer number

//When game begins again, there will be a new random number.

//All crystals will have a new value

//User score resets to zero

//Wins and losses should remain on the screen until the page is refreshed.

var wins = 0;
var losses = 0;
// var computerNumber = [];

//for (var i =0; i<3; i++){
var randomNumber = Math.floor(Math.random() * 12)+ 1;
var computerNumber = Math.floor(Math.random() * 103)+19;
computerNumber = randomNumber + computerNumber;

//}


$(document).ready(function(){
    $("#computerRandoNum").text(computerNumber)
});

$("#blue").on("click", function(){
    $("#userNum").text(randomNumber++);

});

$("#green").on("click", function(){
    $("#userNum").append("Your total number is: " + randomNumber);
});

$("#orange").on("click", function(){
    alert("test");
});

$("#red").on("click", function(){
    alert("test");
});





