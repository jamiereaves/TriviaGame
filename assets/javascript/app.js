//variable to hold correct answer count
var correct = 0;
//variable to hold incorrect answer count
var incorrect = 0;
//variable to hold unanswered questions
var noAnswer = 0;
var randomIndex = 0;
var repeatPrevent = [];
var attempts = 0;
//var to hold whether the theme music is playing
var isThemeMusicPlaying = 0;
//variable to hold array of possible questions
var questions = ["it's midimania!<br>the theme from which of the following shows is being butchered?",
                "it's midimania!<br>the theme from which of the following shows is being butchered?", 
                "it's midimania!<br>the theme from which of the following shows is being butchered?",
                "it's midimania!<br>the theme from which of the following shows is being butchered?", 
                "it's midimania!<br>the theme from which of the following shows is being butchered?",
                "it's midimania!<br>the theme from which of the following shows is being butchered?", 
                "it's midimania!<br>the theme from which of the following shows is being butchered?",
                "it's midimania!<br>the theme from which of the following shows is being butchered?", 
                "it's midimania!<br>the theme from which of the following shows is being butchered?",
                "it's midimania!<br>the theme from which of the following shows is being butchered?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                "WHO AM I?",
                ];
//variable to hold array of array of answers for each question
var answers = [["the animaniacs", "tiny toon adventures", "chip & dale: rescue rangers", "the tick"],
                ["beetlejuice", "johnny quest", "ahh real monsters", "catdog"],
                ["beavis & butthead", "king of the hill", "the ren & stimpy show", "the wild thornberries"],
                ["catdog", "2 angry beavers", "spongebob squarepants", "king of the hill"],
                ["danger mouse", "secret squirrel", "superdog", "wonder rabbit"],
                ["doug", "rugrats", "arthur", "hey, arnold"],
                ["ducktales", "chip & dale: rescue rangers", "tailspin", "teenage mutant ninja turtles"],
                ["george of the jungle", "tarzan", "the wild thornberries", "tailspin"],
                ["gravity falls", "over the hedge", "foster's home for imaginary friends", "aah real monsters"],
                ["he-man: masters of the universe", "thundercats", "voltron", "adventures of the gummi bears"],
                ["gene", "gary", "mitch", "brian"],
                ["troy mcclure", "roy mclean", "ron mccoy", "rex mcclintock"],
                ["powdered toast man", "captain bread head", "toasty", "wonder bread man"],
                ["pinky", "squeaky", "blinky", "todd"],
                ["louise", "tina", "linda", "tammi"],
                ["space ghost", "the phantom", "zorak", "mr. infinity"],
                ["brak", "zorak", "gorak", "gurb"],
                ["patty mayonnaise", "kelly mayonnaise", "sally mayonnaise", "annie mayonnaise"],
                ["gem", "crystal", "ruby", "opal"],
                ["heffer", "gerty", "horton", "hubert"],
            ];
//variable to hold array of image clues
var whoAmI = [0,0,0,0,0,0,0,0,0,0,
            "assets/images/gene.gif",
            "assets/images/troy.gif",
            "assets/images/toast.gif",
            "assets/images/pinky.gif",
            "assets/images/louise.gif",
            "assets/images/spaceGhost.gif",
            "assets/images/brak.gif",
            "assets/images/pattyMayonaise.gif",
            "assets/images/gem.gif",
            "assets/images/heffer.gif",
            ];
//variable to hold array of musical cues
var music = [new Audio("assets/images/animaniacs.mp3"),
            new Audio("assets/images/beetlejuice.mp3"),
            new Audio("assets/images/beavisbutthead.mp3"),
            new Audio("assets/images/catDog.mp3"),
            new Audio("assets/images/dangerMouse.mp3"),
            new Audio("assets/images/doug.mp3"),
            new Audio("assets/images/ducktales.mp3"),
            new Audio("assets/images/georgeJungle.mp3"),
            new Audio("assets/images/gravityFalls.mp3"),
            new Audio("assets/images/heMan.mp3"),
            0,0,0,0,0,0,0,0,0,0];
//var to hold theme music
var themeMusic = new Audio("assets/images/themeTune.mp3");
//var to hold congratulatory music
var winMusic = new Audio("assets/images/applause1.wav");
//var to hold wrong music
var wrongMusic = new Audio("assets/images/loser1.mp3")
//var to hold time out music
var timesUp = new Audio("assets/images/timeOut.mp3");
//var to  hold non-game tune
var defaultMusic = new Audio("assets/images/default.mp3"); 
//variable to hold array of answer images
var answerImg = ["assets/images/animaniacs.gif",
                "assets/images/beetlejuice.gif",
                "assets/images/beavisbutthead.gif",
                "assets/images/catDog.gif",
                "assets/images/dangerMouse.gif",
                "assets/images/doug.gif",
                "assets/images/ducktales.gif",
                "assets/images/georgeJungle.gif",
                "assets/images/gravityFalls.gif",
                "assets/images/heMan.gif",
                0,0,0,0,0,0,0,0,0,0];
//var to hold array of correct images
var winnerImg = ["assets/images/winner1.gif"];
//var to hold array of wrong images
var wrongImg = ["assets/images/loser1.gif",
                "assets/images/loser2.gif",
                "assets/images/loser3.gif",
                "assets/images/loser4.gif"];
//var to hold array of correct images
var timeUpImg = ["assets/images/timeout.gif"]
//var to hold array of game over images
var playAgain = ["assets/images/playagain.gif"];
var initialView = function(){
        $("#timerBox").css("display", "none");
        $("#dialogBox").css("display", "none");
        $("#answerBox").css("display", "none");
        $("#statBox").css("display", "none");
    }
//set initial game board when the page loads by calling initialView, play waiting music
window.onload = function(){
    initialView();
}

//wait until the page loads 
$(document).ready(function(){
    //when the user clicks the start button, the button, statBox, and photoBox are hidden, and the timer, dialog
    //box, and answer buttons are made visible.
    $("#startGame").click(function(){
        //pause waiting music
        defaultMusic.pause();
        $("#startGame").css("display", "none")
        $("#timerBox").css("display", "inherit");
        $("#dialogBox").css("display", "inherit");
        $("#answerBox").css("display", "inherit");
        $("#statBox").css("display", "none");
        $("#photoBox").css("display", "none");
        //if there is a music file at the random index of the music array, play that file
        if (music[randomIndex] != 0){
            music[randomIndex].play();
            }
       //otherwise, play the theme music, switch the binary indicator to 1 (is playing)
        else {
        themeMusic.load();
        themeMusic.play();
        isThemeMusicPlaying = 1;
            };
    //if there is an image file at the random index of the music array, make the photoBox visible
    //and set the gamePhoto to that file    
    if (whoAmI[randomIndex] != 0){
        $("#photoBox").css("display", "inherit");
        $("#gamePhoto").attr("src", whoAmI[randomIndex]);
    };
        //attempts are initially set to 0
        attempts = 0;
        //set # of seconds for question
        timeLeft = 15;
        //display amount of time left
        $("#timerBox").html("you have " + timeLeft + " seconds remaining");
        //every second, subtract a second from timeLeft and display the remaining time
        gameClock = setInterval(function(){
            timeLeft--;
            $("#timerBox").html("you have " + timeLeft + " seconds remaining");
            //when the timer runs out (timeLeft=0) and there is musical clue playing, pause the music and
            //clear the game clock
            if (timeLeft <= 0 && music[randomIndex] !=0){
                music[randomIndex].pause();
                clearInterval(gameClock);
            }
        }, 1000);
        //start the time's up timer
        gameTimer = setTimeout("timeUpA()", 15000);
    })
    //define function with name assignQuestion
    var assignQuestion = function(){
        //variable randomIndex that creates a random number between 0 and 1 less than the length of the question array
        //this variable will keep track of the question and it's associated answer, images, music, etc...
        randomIndex = (Math.floor(Math.random()*questions.length));
        for (i=0; i<repeatPrevent.length; i++){
            //check if this randomIndex has already been chosen. if it has, restart the function-this prevents
            //the same question being asked twice in a round
            if (randomIndex == repeatPrevent[i]){
                assignQuestion();
            }
            };
        //change html of dialogBox to the chosen question
        $("#dialogBox").html(questions[randomIndex]);
        //add this randomIndex to the repeatPrevent array so it can't be chosen again
        repeatPrevent.push(randomIndex);
        //store the correct answer (the first element of the array whose index corresponds to the
        //randomIndex)
        correctAnswer = answers[randomIndex][0];
        //define a function that randomizes where the possible answers are distributed 
        var assignAnswers = function(){
            //store 4 random variables between 0 & 3
            randomAnswer1 = (Math.floor(Math.random()*4));
            randomAnswer2 = (Math.floor(Math.random()*4));
            randomAnswer3 = (Math.floor(Math.random()*4));
            randomAnswer4 = (Math.floor(Math.random()*4));
            //make sure each number is unique. if not, call the program until this is the case
            if ((randomAnswer1==randomAnswer2)||(randomAnswer1==randomAnswer3)||(randomAnswer1==randomAnswer4)||(randomAnswer2==randomAnswer3)||(randomAnswer2==randomAnswer4)||(randomAnswer3==randomAnswer4)){
                assignAnswers();
                }
            //otherwise assign a random answer from the appropriate answer array to each of the four
            //answer buttons
            else {
            $("#answerButton1").html(answers[randomIndex][randomAnswer1]);
            $("#answerButton2").html(answers[randomIndex][randomAnswer2]);
            $("#answerButton3").html(answers[randomIndex][randomAnswer3]);
            $("#answerButton4").html(answers[randomIndex][randomAnswer4]);
                }    
        }; 
        //call the assignAnswers function   
        assignAnswers();
        };
    //call assignQuesiton function
    assignQuestion();
    //create a function for when the 1st button is clicked
    $("#answerButton1").click(function(){
        //increase attempt counter
        attempts++;
        //determine if correct answer was chosen
        if (answers[randomIndex][randomAnswer1] == correctAnswer){
            //add to correct counter, play app. music, set app. volume, hide the timer and answer buttons
            //change the html of the dialog box to display an app. message
            correct++;
            winMusic.play();
            winMusic.volume = .1;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("correct!");
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
            //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", winnerImg[Math.floor(Math.random()*winnerImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
        //otherwise, if the wrong answer is chosen
        else if (answers[randomIndex][randomAnswer1] != correctAnswer){
            //add to incorrect counter, play the wrong music at the app. volume. hide the timer, and answer buttons
            //change html of dialog box to display wrong answer message and correct answer
            incorrect++;
            wrongMusic.play();
            wrongMusic.volume = .6;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("sorry. the correct answer was " + correctAnswer);
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
            //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", wrongImg[Math.floor(Math.random()*wrongImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
       
    });

    $("#answerButton2").click(function(){
        //increase attempt counter
        attempts++;
        //determine if correct answer was chosen
        if (answers[randomIndex][randomAnswer2] == correctAnswer){
            //add to correct counter, play app. music, set app. volume, hide the timer and answer buttons
            //change the html of the dialog box to display an app. message
            correct++;
            winMusic.play();
            winMusic.volume = .1;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("correct!");
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
                //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", winnerImg[Math.floor(Math.random()*winnerImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
        //otherwise, if the wrong answer is chosen
        else if (answers[randomIndex][randomAnswer2] != correctAnswer){
            //add to incorrect counter, play the wrong music at the app. volume. hide the timer, and answer buttons
            //change html of dialog box to display wrong answer message and correct answer
            incorrect++;
            wrongMusic.play();
            wrongMusic.volume = .6;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("sorry. the correct answer was " + correctAnswer);
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
            //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", wrongImg[Math.floor(Math.random()*wrongImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
    });

    $("#answerButton3").click(function(){
        //increase attempt counter
        attempts++;
        //determine if correct answer was chosen
        if (answers[randomIndex][randomAnswer3] == correctAnswer){
            //add to correct counter, play app. music, set app. volume, hide the timer and answer buttons
            //change the html of the dialog box to display an app. message
            correct++;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("correct!");
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
                //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", winnerImg[Math.floor(Math.random()*winnerImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
        //otherwise, if the wrong answer is chosen
        else if (answers[randomIndex][randomAnswer3] != correctAnswer){
            //add to incorrect counter, play the wrong music at the app. volume. hide the timer, and answer buttons
            //change html of dialog box to display wrong answer message and correct answer
            incorrect++;
            wrongMusic.play();
            wrongMusic.volume = .6;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("sorry. the correct answer was " + correctAnswer);
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
            //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", wrongImg[Math.floor(Math.random()*wrongImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
    });

    $("#answerButton4").click(function(){
        //increase attempt counter
        attempts++;
        //determine if correct answer was chosen
        if (answers[randomIndex][randomAnswer4] == correctAnswer){
            //add to correct counter, play app. music, set app. volume, hide the timer and answer buttons
            //change the html of the dialog box to display an app. message
            correct++;
            winMusic.play();
            winMusic.volume = .1;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("correct!");
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
                //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", winnerImg[Math.floor(Math.random()*winnerImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
        //otherwise, if the wrong answer is chosen
        else if (answers[randomIndex][randomAnswer4] != correctAnswer){
            //add to incorrect counter, play the wrong music at the app. volume. hide the timer, and answer buttons
            //change html of dialog box to display wrong answer message and correct answer
            incorrect++;
            wrongMusic.play();
            wrongMusic.volume = .6;
            $("#timerBox").css("display", "none");
            $("#answerBox").css("display", "none");
            $("#dialogBox").html("sorry. the correct answer was " + correctAnswer);
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            //if there is an associate answer image in the appropriate element of answerImg, display that image
            if (answerImg[randomIndex] != 0){
                $("#gamePhoto").attr("src", answerImg[randomIndex]);
                }
            //otherwise, display a random image from the winnerImg array
            else {
                $("#gamePhoto").attr("src", wrongImg[Math.floor(Math.random()*wrongImg.length)]);
            };
            //clear both timers
            clearInterval(gameClock);
            clearTimeout(gameTimer);
            //start timer for correct/incorrect screen
            resetTimer = setTimeout("timeUpB()", 5000);
        }
    });
    //create/store function that is called if the question isn't answered in time
    timeUpA = function(){
        //add to no answer and attempt counters
        noAnswer++;
        attempts++;
        //if there is a musical clue playing, stop it.
        if (music[randomIndex] != 0){
            music[randomIndex].pause();
            }
        //otherwise, stop the theme music
        else {
            themeMusic.pause();
            isThemeMusicPlaying = 0;
            }
        //play the timeout music at an appropriate volume, hide the timer and answer buttons
        //change the html of the dialog box to display the timeout message
        timesUp.play();
        timesUp.volume = .7;
        $("#timerBox").css("display", "none");
        $("#answerBox").css("display", "none");
        $("#dialogBox").html("you ran out of time. the correct answer was " + correctAnswer);
        //make sure photoBox is visible
        $("#photoBox").css("display", "inherit");
        //if there is an associate answer image in the appropriate element of answerImg, display that image
        if (answerImg[randomIndex] != 0){
            $("#gamePhoto").attr("src", answerImg[randomIndex]);
            }
        //otherwise, display a random image from the winnerImg array
        else {
            $("#gamePhoto").attr("src", timeUpImg[Math.floor(Math.random()*timeUpImg.length)]);
        };
        //clear both timers
        clearInterval(gameClock);
        clearTimeout(gameTimer);
        //start timer for correct/incorrect screen
        resetTimer = setTimeout("timeUpB()", 5000);    
    };
    //create/store function that is called when the timer for the answer result
    //(correct/incorrect/timeout) screen runs out (check for win, reset game)
    timeUpB = function(){
        //check if the max # of questions has been answered
        if (attempts == 10){
            //if it has and a musical clue is playing, pause that music
            if (music[randomIndex] != 0){
                music[randomIndex].pause();
            }
            //if it has and theme music is playing, pause that music, set music indicator to 0 (not playing)
            //reload theme music so it plays from the beginning for the next round
            else {
                themeMusic.pause();
                themeMusic.load();
                isThemeMusicPlaying = 0;
                }
            //make sure all music is stopped. reload all music so it plays from the beginning for the next round
            timesUp.pause();
            timesUp.load();
            wrongMusic.pause();
            wrongMusic.load();
            winMusic.pause();
            winMusic.load();
            //load and play default music
            defaultMusic.load();
            defaultMusic.play();
            //display start button
            $("#startGame").css("display", "inherit");
            $("#startGame").html("CLICK TO PLAY AGAIN!");
            //hide the timer, dialog box, and answer buttons
            $("#timerBox").css("display", "none");
            $("#dialogBox").css("display", "none");
            $("#answerBox").css("display", "none");
            //update and display historical stats
            $("#statBox").css("display", "inherit");
            $("#statBox").html("correct answers: " + correct + "<br> incorrect answers: " + incorrect + "<br> unanswered questions: " + noAnswer);
            //make sure photoBox is visible
            $("#photoBox").css("display", "inherit");
            $("#gamePhoto").attr("src", playAgain[Math.floor(Math.random()*playAgain.length)]);
            //clear repeatPrevent array so that no questions are prohibited next round
            repeatPrevent = [];
            //call assign question to set initial game conditions for next round
            assignQuestion();
            return;
        }
        //if user's game is not over, pause the timeout music (if applicable-clip was too long to play out)
        else {
            timesUp.pause();
            //if a musical clue is playing, stop it
            if (music[randomIndex] != 0){
                music[randomIndex].pause();
                }
            //make sure timer, dialog box, and answer buttons are visible. hide the photobox
            $("#timerBox").css("display", "inherit");
            $("#dialogBox").css("display", "inherit");
            $("#answerBox").css("display", "inherit");
            $("#photoBox").css("display", "none");
            //call assign question function to set new question/answers/images/timers/etc...
            assignQuestion();
            //if it is a musical question, pause the theme music, change the indicator to 0 (not playing)
            //and play the appropriate musical cue
            if (music[randomIndex] != 0){
                themeMusic.pause();
                isThemeMusicPlaying = 0;
                music[randomIndex].play();
            }
            //otherwise, if the theme music is not already playing (i.e. =0), play the music and change the
            //indicator to 1 (music playing)
            else if (isThemeMusicPlaying == 0){
                themeMusic.play();
                isThemeMusicPlaying = 1;
            }
            //if there is an image clue, make the photobox visible and assign the appropriate image file
            if (whoAmI[randomIndex] != 0){
                $("#photoBox").css("display", "inherit");
                $("#gamePhoto").attr("src", whoAmI[randomIndex]);
                    };
            //set number of seconds for new quesiton
            timeLeft = 15;
            //display amount of time left
            $("#timerBox").html("you have " + timeLeft + " seconds remaining");
            //every second, subtract a second from timeLeft and display the remaining time
            gameClock = setInterval(function(){
                timeLeft--;
                $("#timerBox").html("you have " + timeLeft + " seconds remaining");
                //when the timer runs out (timeLeft=0) and there is musical clue playing, pause the music and
                //clear the game clock
                if (timeLeft <= 0 && music[randomIndex] !=0){
                    music[randomIndex].pause();
                    clearInterval(gameClock);
                }
            }, 1000);
            //start the time's up timer
            gameTimer = setTimeout("timeUpA()", 15000);
         }   
    };
    

})
