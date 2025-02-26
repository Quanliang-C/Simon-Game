


var level = 0;
var clickedPattern = [];

gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    buttonColors = ["red", "blue", "green", "yellow"];
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
}


function showEffect(buttonTrigger){
    switch (buttonTrigger){
        case "red":
            sound_red  = new Audio("sounds/red.mp3");
            sound_red.play();
            $("#red").fadeOut(100).fadeIn(100).addClass("pressed");
            setTimeout(function(){
                $("#red").removeClass("pressed");
            }
            , 100);
            break;
        case "blue":
            sound_blue = new Audio("sounds/blue.mp3");
            sound_blue.play();
            $("#blue").fadeOut(100).fadeIn(100).addClass("pressed");
            setTimeout(function(){
                $("#blue").removeClass("pressed");
            }
            , 100);
            break;
        case "green":
            sound_green = new Audio("sounds/green.mp3");
            sound_green.play();
            $("#green").fadeOut(100).fadeIn(100).addClass("pressed");
            setTimeout(function(){
                $("#green").removeClass("pressed");
            }
            , 100);
            break;
        case "yellow":
            sound_yellow = new Audio("sounds/yellow.mp3");
            sound_yellow.play();
            $("#yellow").fadeOut(100).fadeIn(100).addClass("pressed");
            setTimeout(function(){
                $("#yellow").removeClass("pressed");
            }
            , 100);
            break;
        default:
            console.log("Error");
    }
}




function showSequence(gamePattern){
    buttonTrigger = gamePattern[gamePattern.length -1];

    showEffect(buttonTrigger);

}

function startGame(){
    gamePattern = [];
    level = 0;
    nextSequence();
    console.log(gamePattern);
    showSequence(gamePattern);
    level++;
    $("#level-title").text("Level " + level);
}


$(document).one("keydown", function(){
    gamePattern = [];
    clickedPattern = [];
    startGame();
})




// check loop, not a efficient way to check the answer.
function checkAnswer(gamePattern, clickedPattern){

    if(gamePattern.length === 0){
        return null;
    }



    for(var i = 0; i < clickedPattern.length; i++){
        if(gamePattern[i] !== clickedPattern[i]){
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            console.log("Failed");
            return false;
        }
    }

    if(gamePattern.length === clickedPattern.length){
        console.log("Success");
        // to next level
        return true;
    }
    return null;
}


function nextLevelGame(){
    level++;
    $("#level-title").text("Level " + level);
    clickedPattern = [];
    nextSequence();
    showSequence(gamePattern);

}



function restartGame(){
    level = 0;
    gamePattern = [];
    clickedPattern = [];
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 400)
    $("#level-title").text("Game Over, Press Any Key to Restart");

    $(document).one("keydown", function(){
        gamePattern = [];
        clickedPattern = [];
        startGame();
    })
}








$("#red").click(function(){
    showEffect("red");
    clickedPattern.push("red");

    if(checkAnswer(gamePattern, clickedPattern)){
        setTimeout(function(){
            nextLevelGame();
        }
        , 1000);

    }
    else if(checkAnswer(gamePattern, clickedPattern) === false){
        restartGame();
    }

})

$("#blue").click(function(){
    showEffect("blue");
    clickedPattern.push("blue");
    if(checkAnswer(gamePattern, clickedPattern)){
        setTimeout(function(){
            nextLevelGame();
        }
        , 1000);
    }
    else if(checkAnswer(gamePattern, clickedPattern) === false){
        restartGame();
    }
})

$("#green").click(function(){
    showEffect("green");
    clickedPattern.push("green");
    if(checkAnswer(gamePattern, clickedPattern)){
        setTimeout(function(){
            nextLevelGame();
        }
        , 1000);
    }
    else if(checkAnswer(gamePattern, clickedPattern) === false){
        restartGame();
    }
})

$("#yellow").click(function(){      
    showEffect("yellow"); 
    clickedPattern.push("yellow");
    if(checkAnswer(gamePattern, clickedPattern)){
        setTimeout(function(){
            nextLevelGame();
        }
        , 1000);
    }
    else if(checkAnswer(gamePattern, clickedPattern) === false){
        restartGame();
    }
})



