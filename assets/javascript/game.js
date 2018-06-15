var totLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessLetter = totLetters[Math.floor(Math.random() * totLetters.length)];
var guessesLeft=10;
var winsCounter=0;
var lossesCounter=0;
var guessesCurrent="";

var winsP= document.getElementById("wins");
var lossesP=document.getElementById("losses");
var guessesLeftP=document.getElementById("guessesLeft");
var guessesTotP=document.getElementById("guessesTot");

winsP.innerHTML="0";
lossesP.innerHTML="0";
guessesLeftP.innerHTML="10";    
guessesTotP.innerHTML="";


document.onkeyup=function(event){
    if(event.key===guessLetter){
        winsCounter++;
        winsP.innerHTML=winsCounter;
        resetGame();
    }
    else{
        if(event.key.length === 1 && ){
            guessesLeft--;
            guessesLeftP.innerHTML=guessesLeft;
            guessesCurrent+=event.key;
            guessesTotP.innerHTML= " "+guessesCurrent + " ";  
        }   
    }
    if(guessesLeft<1){
        lossesCounter++;
        lossesP.innerHTML=lossesCounter;
        resetGame();
    }
}

function resetGame(){
    guessesLeft=10;
    guessesLeftP.innerHTML=10;
    guessesCurrent="";
    guessesTotP.innerHTML="";
    guessLetter = totLetters[Math.floor(Math.random() * totLetters.length)];
}
