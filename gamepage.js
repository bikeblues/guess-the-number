// random value generated
  var y=Math.floor(Math.random()*10+1);
// counting the number of guesses
var guess=1;
// made for correct Guess
function submit(){
    var x=document.getElementById("number").value;
    if(x==y){
        alert("congratulations!"+playername+" you guessed it right in"
        +guess+" guess");
        guess=1;
    }
    else if(x>y){
        guess++;
        alert("oops sorry! try a smaller number")
        
    }
    else
    {
        guess++;
        alert("oops sorry! try a greater number")
    }
}
  
// function for number guessed by user    
function playAgain(){
    y=Math.floor(Math.random()*10+1);
}