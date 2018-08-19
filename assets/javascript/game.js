var words=["lamp","pant","sand","land","band"]

var wins = 0
var losses = 0
var correctletters=0
var guessesleft = 10
var lettersguessed = []
var spaces = []
var computerGuess= []
var letternotinword = []
function startgame(){
    computerGuess = words[Math.floor(Math.random() * words.length)];

    guessesleft=10;

    lettersguessed=[];

    document.getElementById("i0").innerHTML="_ "
    document.getElementById("i1").innerHTML="_ ";
    document.getElementById("i2").innerHTML="_ ";
    document.getElementById("i3").innerHTML="_ ";
    correctletters=0;

    }
   

document.onkeyup = function(event) {

    var userGuess = event.key;
if(lettersguessed.indexOf(userGuess)==-1){
    lettersguessed.push(userGuess)
}

    

    if (computerGuess.indexOf(userGuess)>-1){
        correctletters++;
        var index = computerGuess.indexOf(userGuess);
        console.log(index +","+userGuess+","+computerGuess);
        if (index== 0){
            document.getElementById("i0").innerHTML=userGuess;
        }
        else if (index== 1){
            document.getElementById("i1").innerHTML=userGuess;
        }
        else if (index== 2){
            document.getElementById("i2").innerHTML=userGuess;
        }
        else if (index== 3){
            document.getElementById("i3").innerHTML=userGuess;
        }
        if (correctletters==4){
            ++wins;
            alert("you won!")
            
            startgame();
            
        }
       
    }
    

    else {
        if(letternotinword.indexOf(userGuess)==-1){
            letternotinword.push(userGuess);
            guessesleft = guessesleft - 1;
        }
            
        
        if(guessesleft==0){
            
            
            losses++;
            startgame();
        }
        }
    //}

    var html =
            //"<p>word: " + spaces + "<p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses left: " + guessesleft + "</p>"+
          "<p>guesses so far: " + lettersguessed  + "</p>";
          

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
        document.getElementById("anykey").innerHTML = null;
        

    }
  



