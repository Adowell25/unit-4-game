//The player will be shown a computer generated random number   - done

//Crystals will be assigned a specific number - 

//When the player clicks on a crystal it will add a specific amout of points to the players total

//Increment user score counter by the crystals random number

//If number goes beyond random computer number then game over

//Player wins if the total equals number of the computer 

//Player loses if score goes beyond random computer number

//When game begins again, there will be a new random number.

//All crystals will have a new value

//User score resets to zero

//Wins and losses should remain on the screen until the page is refreshed.

$(document).ready(function(){   
});


//Global variables

var wins = 0;
var losses = 0;
var score = 0;
$("userScore").html(score);


//Computer generated random number
var computerNumber = Math.floor(Math.random() * 101)+19;
$("#computerRandoNum").html(computerNumber)


// var crystalNumber = function(){
//     var crystal_numbers = Math.floor(Math.random() * 12)+ 1;
//     return crystal_numbers;
//  }

//variables for crystals random number
var blue = Math.floor(Math.random() * 12)+ 1;
var green = Math.floor(Math.random() * 12)+ 1;
var orange = Math.floor(Math.random() * 12)+ 1;
var red = Math.floor(Math.random() * 12)+ 1;



//Displays wins
$("#wins").text("Wins: " + wins);

//Display losses
$("#losses").text("Losses: " + losses);


var blueCrystal = $(".bluecrystal").on("click", function(){
    score = score + blue;
    $("#userScore").html(score)
    if (score === computerNumber){
        alert("Winner! Totals will be reset on next selected crystal!");
        wins++;
        $("#wins").text("Wins: " + wins);
        resetNumbers(computerNumber);
        resetUserScore();
    } else if  (score > computerNumber){
        alert("Loser! Totals will be reset on next selected crystal!");
        losses++;
        $("#losses").text("Losses: " + losses);
        resetNumbers();
        resetUserScore(); 
    }
    
});



var greenCrystal = $(".greencrystal").on("click", function(){
    score = score + green;
    $("#userScore").html(score)
    if (score === computerNumber){
        alert("Winner! Totals will be reset on next selected crystal!");
        wins++;
        console.log("winner");
        $("#wins").text("Wins: " + wins);
        resetNumbers(computerNumber);
        resetUserScore();
    } else if (score > computerNumber){
        alert("Loser! Totals will be reset on next selected crystal!");
        losses++;
        $("#losses").text("Losses: " + losses);
        resetNumbers();
        resetUserScore();
    }
});

var orangeCrystal = $(".orangecrystal").on("click", function(){
    score = score + orange;
    $("#userScore").html(score)
    if (score === computerNumber){
        alert("Winner! Totals will be reset on next selected crystal!");
        console.log("winner");
        wins++;
        $("#wins").text("Wins: " + wins);
        resetNumbers(computerNumber);
        resetUserScore();
        computerNumber;
    } else if (score > computerNumber){
        alert("Loser! Totals will be reset on next selected crystal!");
        losses++;
        $("#losses").text("Losses: " + losses);
        resetNumbers();
        resetUserScore();

    }
});

var redCrystal = $(".redcrystal").on("click", function(){
    score = score + red;
    $("#userScore").html(score)
    if (score === computerNumber){
        alert("Winner! Totals will be reset on next selected crystal!");
        console.log("winner");
        wins++;
        $("#wins").text("Wins: " + wins);
        resetNumbers(computerNumber);
        resetUserScore();
    } else if (score > computerNumber){
        alert("Loser! Totals will be reset on next selected crystal!");
        losses++;
        $("#losses").text("Losses: " + losses);
        resetNumbers();
        resetUserScore();
    }
});

function resetUserScore (){
    score = 0;
    $("userScore").html(score)
}

function resetNumbers (){
    computerNumber = Math.floor(Math.random() * 101)+19;
    $("#computerRandoNum").html(computerNumber);

    blue = Math.floor(Math.random() * 12)+ 1;
    green = Math.floor(Math.random() * 12)+ 1;
    orange = Math.floor(Math.random() * 12)+ 1;
    red = Math.floor(Math.random() * 12)+ 1;

}






