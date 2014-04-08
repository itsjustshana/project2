
window.onload=function()
{
    
//----------------------SOUNDS--------------------------------------------------
    
var flip = document.createElement('audio');
flip.setAttribute('src', 'flip.mp3');

var ding = document.createElement('audio');
ding.setAttribute('src', 'dingling.mp3');

var applause = document.createElement('audio');
applause.setAttribute('src', 'applause.mp3');

var gameOver = document.createElement('audio');
applause.setAttribute('src', 'gameOver.mp3');
//-----------------------VARIABLES----------------------------------------------
var player1 = "";
var player2 = "";
var numplay;
var totalTries = 0;
var triesLeft = 24;
var twoToCompare = [];
var matchedPairs = [];
var matchedPairCount = 0;
var play=1;
var player1MatchCount=0;
var player2MatchCount=0;
var totalMatchCount=0;



var createDeck= function()
    {
// based on code from http://www.brainjar.com/js/cards/default2.asp
var ranks= ["A","9","10", "J"];
var suits= ["D", "S"];
var j, k, index=0;
      var pack_size;
    
      
pack_size= ranks.length * suits.length;
var cards= [];
      
    
      // Fill the array with 'n' packs of cards.
      while (index < pack_size)
      {
for (j= 0; j < suits.length; j++)
{
for (k= 0; k < ranks.length; k++)
{
console.log("k:",k,"index:",index);
cards[index]= {rank:ranks[k], suite:suits[j]};
              index++;
              }
           }
        }
      console.log(cards.length);
      return cards;
    }
 
    
var whenMainClicked = function()
{
    flip.play();
	console.log (this);
	twoToCompare.push(this);

	var fAndB = this.children;

	var back = fAndB[0];
	var front = fAndB[1];

	var cardValue = this.querySelector(".value").innerText;
	console.log(cardValue);
	
	back.className = "backc";
	front.className = "frontc";
	
	console.log(twoToCompare);
	console.log(twoToCompare.length);
	
	if (twoToCompare.length == 2)
	{
		console.log("We reach 2!");
		
		if(numplay ==1)
		{
	        setTimeout(compareFaceUp,1500);
		}
		else
		{
		  setTimeout(compareFaceUp2,1500);
		}
	}
	
	
}

var compareFaceUp = function()
{
    totalTries ++;
    triesLeft --;
    
    
    console.log("In function now");
    
    if (totalTries == 24)
    {
        window.alert("You have used up all your moves. The game will restart");
        location.reload();
    }
    

    
    var elem2 = document.getElementsByClassName("left")[0];
    elem2.innerText = "Tries Remaining: " + triesLeft;
   

	function sleep(miliseconds) 
	{
           var currentTime = new Date().getTime();

           while (currentTime + miliseconds >= new Date().getTime()) {
           }
       }
	   
	console.log (twoToCompare[0]);
	
	var firstFront = twoToCompare[0].getElementsByClassName("frontc")[0].querySelector(".value").innerText;
	
	var secondFront = twoToCompare[1].getElementsByClassName("frontc")[0].querySelector(".value").innerText;
	if(firstFront == secondFront)
	{
	    twoToCompare[0].getElementsByClassName("frontc")[0].className = ("frontMatched");
	    twoToCompare[1].getElementsByClassName("frontc")[0].className = ("frontMatched");
		console.log("match");
		applause.play();
		matchedPairs.push(twoToCompare[0]);
		matchedPairs.push(twoToCompare[1]);
		
		matchedPairCount++;
		
		
		//console.log(matchedPairs);
		
		twoToCompare = [];
		console.log(twoToCompare);
	
		
		
		console.log(matchedPairs.length);
		
		if (matchedPairs.length == 12)
		{
    		applause.play();
		}
		
		
		
	} //end if a match
	
	
	if (firstFront != secondFront)
	{		console.log("Not a match");
	
			twoToCompare[1].children[0].className = "back";
			twoToCompare[1].children[1].className = "front";
			
			
			
			twoToCompare[0].children[0].className = "back";
			twoToCompare[0].children[1].className = "front";
			
			//window.alert("Not a Match");
			twoToCompare = [];
			console.log(twoToCompare);
	}
	
}

var compareFaceUp2 = function()
{
    console.log(play);
    console.log("numplay compareFaceUp"+ numplay);
    function sleep(miliseconds) 
	{
           var currentTime = new Date().getTime();

           while (currentTime + miliseconds >= new Date().getTime()) {
           }
    }
    
       
	console.log (twoToCompare[0]);
	
	var firstFront = twoToCompare[0].getElementsByClassName("frontc")[0].querySelector(".value").innerText;
	
	var secondFront = twoToCompare[1].getElementsByClassName("frontc")[0].querySelector(".value").innerText;
	if(firstFront == secondFront)
	{
	    twoToCompare[0].getElementsByClassName("frontc")[0].className = ("frontMatched");
	    twoToCompare[1].getElementsByClassName("frontc")[0].className = ("frontMatched");
		console.log("match");
		applause.play();
		matchedPairs.push(twoToCompare[0]);
		matchedPairs.push(twoToCompare[1]);
		
		matchedPairCount++;
		
		twoToCompare = [];
		console.log(twoToCompare);
		
		
		console.log(matchedPairs.length);
		
			
		if (play ==1)
		{
		    console.log("Still player 1's turn");
		    player1MatchCount++;
		    
		    var elem2 = document.getElementsByClassName("left")[0];
            elem2.innerText = "Score: Player1 ("+player1 +") :"+ player1MatchCount+ "     Player 2(" +player2 +") :"+ player2MatchCount;
            document.getElementsByClassName("twoP")[0].innerText = "Player 1 ("+ player1+  ")'s Turn";
            
            if (player1MatchCount==5)
            {
                applause.play();
                alert("Player1 wins!");
                location.reload();
            }
            
            if((player1MatchCount ==4)&&(player2MatchCount==4))
            {
                gameOver.play();
                alert("Game is a tie!");
                location.reload();
            }
		}
		
		if (play ==2)
		{
		    console.log("Still player 2's turn");
		    player2MatchCount++;
		    
		    var elem2 = document.getElementsByClassName("left")[0];
            elem2.innerText = "Score: Player1 ("+player1 +") :"+ player1MatchCount+ "     Player 2(" +player2 +") :"+ player2MatchCount;
            document.getElementsByClassName("twoP")[0].innerText = "Player 2 ("+ player2+  ")'s Turn";
            
             if (player2MatchCount==5)
            {
                applause.play();
                alert("Player2 wins!");
                location.reload();
            }
            
             if((player1MatchCount ==4)&&(player2MatchCount==4))
            {
                gameOver.play();
                alert("Game is a tie!");
                location.reload();
            }
		}
		
		
		if (matchedPairs.length == 12)
		{
    		console.log("game over");
		}
		
		
	}//end if match
	if (firstFront != secondFront)
	{		console.log("Not a match");
	
			twoToCompare[1].children[0].className = "back";
			twoToCompare[1].children[1].className = "front";
			
			
			
			twoToCompare[0].children[0].className = "back";
			twoToCompare[0].children[1].className = "front";
			
			//window.alert("Not a Match");
			twoToCompare = [];
			console.log(twoToCompare);
			
			if (play ==1)
			{
			    play =2;  //goes to next Player
			    console.log("player 2's turn");
			    document.getElementsByClassName("twoP")[0].innerText = "Player 2 ("+ player2+  ")'s Turn";
			}
			
			else if (play ==2)
			{
			    play =1; //goes to next Player
			    console.log("player 1's turn");
			    document.getElementsByClassName("twoP")[0].innerText = "Player 1 ("+ player1+  ")'s Turn";
			}
	
	}
	   
	   
    
    
}
	
var showCards= function(cardJSON) 
{
    var txt= cardJSON.rank + cardJSON.suite;    
        
        // ----------------------DIVS CREATION----------------------------------------------------------
 
    var front= document.createElement('div');
    var back= document.createElement('div');
    var mainCard= document.createElement('div');
    var trying= document.createElement('p');
        
        // ----------------------FRONT CREATION----------------------------------------------------------
 
	trying.className= "value";
    trying.innerText=txt;
    front.className= "front";
	front.id= "front";
	front.appendChild(trying);
	back.className="back";
	back.style.backgroundImage= "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrb9xKMeWQ-VMIoHJmf9RQY3RXaWSM5ZZjTVa7zX6L5ws6WSgs)";
        
      
       
mainCard.className= "mainCard";
mainCard.appendChild(back);
 mainCard.appendChild(front);
 
 mainCard.onclick = whenMainClicked;
        
        
        
var area= document.getElementsByClassName("sideBox");

area[0].appendChild(mainCard);
        


} 


var shuffleCards=function()
{
    
    
var everything= document.getElementById("sidebox").childNodes;
   // console.log(everything);
    
    
for(var i=0; i<20; i++)
    {
var rand= (Math.floor(Math.random()*4)+1);

        
var copyFrom= everything[i];

var copyTo= everything[i+rand];

var from= copyFrom.getElementsByClassName("front");

var to= copyTo.getElementsByClassName("front");
    
var reallyFrom=((from[0]).childNodes[0]);

var reallyTo= ((to[0]).childNodes[0]);
         
       

        
var temp= reallyFrom.innerText;
reallyFrom.innerText= reallyTo.innerText;
reallyTo.innerText= temp;
           
    }

}

var showDeck= function(deck)
{
    var idx;
    for (idx= 0; idx < deck.length; ++idx) {
            console.log("so far, so good",deck[idx]);
            showCards(deck[idx]);
    }
}



var saveGame = function()
{
     console.log("numplay saveGame"+ numplay);
        
    console.log(twoToCompare);
    console.log(twoToCompare.length)
    
    if(twoToCompare.length === 0)
    {
        
    }
    else
    {
        console.log("why isnt it doing");
       twoToCompare[0].children[0].className = "back";
	   twoToCompare[0].children[1].className = "front"; 
    }
    
    if (numplay==1)
    {
        var message = ""+player1 + ", Are you sure you want to save?";
        console.log(message);
        
        var toSave = confirm (message);
        
        if (toSave ==true)
        {
            
            
            var g = document.getElementById("game").innerHTML;
            
            localStorage.game = g;
            localStorage.player1 = player1;
            localStorage.player2 = player2;
            localStorage.numplay = numplay;
            localStorage.triesLeft = triesLeft;
            localStorage.matchedPairCount = matchedPairCount;
            
        }
    }
    
    else
    {   
        
        console.log(numplay);
        console.log("valueeeeeeeeeeeeee");
        
        var message = ""+player1 + "" +player2+ ", Are you sure you want to save?";
        console.log(message);
        
        var toSave = confirm (message);
        
        if (toSave ==true)
        {
            
            var g = document.getElementById("game").innerHTML;
            
            localStorage.game = g;
            
            localStorage.player1 = player1;
            localStorage.player2 = player2;
            localStorage.numplay = numplay;
            localStorage.matchedPairCount = matchedPairCount;  
            localStorage.play = play;
            localStorage.player1MatchCount = player1MatchCount;
            localStorage.player2MatchCount = player2MatchCount;
            localStorage.totalMatchCount =totalMatchCount;
            
            alert("game saved");
        }


    }
}

var loadGame = function()
{
    
    var numP = prompt("Enter '1' for ONE PLAYER or '2' for TWO PLAYER");
    console.log(numP);
    
    var numComp = localStorage.numplay;
    console.log(numComp);

    if (numP==numComp)
    {
       
        if(numP==1)
        {
            
                    
            var saveName = prompt("Enter your name");
            var nameSaved = localStorage.player1;
            
            if (saveName === nameSaved)
            {
                console.log("Same player as before");
                alert("Welcome back, "+nameSaved);
                
                var deck= createDeck();
            
                showDeck(deck);
                showDeck(deck);
                
                document.getElementById("game").innerHTML = localStorage.game;
                
                player1 = localStorage.player1;
                numplay = localStorage.numplay;
                triesLeft = localStorage.triesLeft;
                matchedPairCount = localStorage.matchedPairCount;
                
               twoToCompare=[];
               matchedPairs=[];
                
                var u = document.getElementsByClassName("frontMatched");
                for (var i=0; i<u.length; i++)
                {
                    matchedPairs.push(u[i]);
                }
               
               var u = document.getElementsByClassName("mainCard")
                for (var i=0; i<u.length; i++)
                {
                    u[i].onclick = whenMainClicked;
                }
                    
            }//end Right Name one player
            else
            {
                alert("Sorry, No entery found.");
            }
        }//end Num = 1
        else if (numP==2)
        {
            var p1  = prompt("Enter player1 name");
            var nameSaved1 = localStorage.player1;
            
            
            console.log(p1);
            console.log(nameSaved1);
            
            var p2  = prompt("Enter player2 name");
            var nameSaved2 = localStorage.player1;
            
            console.log(p2);
            console.log(nameSaved2);
            
            if((p1===nameSaved1)&&(p2===nameSaved2))
            {
                console.log("Same player as before");
                //alert("Welcome back, "+nameSaved);
                
                var deck= createDeck();
            
                showDeck(deck);
                showDeck(deck);
                
                document.getElementById("game").innerHTML = localStorage.game;
                
            
                player1=localStorage.player1
                player2 =localStorage.player2;
                numplay= localStorage.numplay;
                
                matchedPairCount=localStorage.matchedPairCount;
                play= localStorage.play;
                player1MatchCount=localStorage.player1MatchCount;
                player2MatchCount=localStorage.player2MatchCount;
                totalMatchCount=localStorage.totalMatchCount;
                
                
                twoToCompare=[];
                matchedPairs=[];
                    
                    var u = document.getElementsByClassName("frontMatched");
                    for (var i=0; i<u.length; i++)
                    {
                        matchedPairs.push(u[i]);
                    }
                   
                   var u = document.getElementsByClassName("mainCard")
                    for (var i=0; i<u.length; i++)
                    {
                        u[i].onclick = whenMainClicked;
                    }
                    
                    var elem2 = document.getElementsByClassName("left")[0];
                    elem2.innerText = "Score: Player1 ("+player1 +") :"+ player1MatchCount+ "     Player 2(" +player2 +") :"+ player2MatchCount;
                
                    if (play==1)
                    {
                        
                    }
            }
            else
            {
                alert("Sorry, no saved game found");
                location.reload()
            }
        }
    }
    else
    {
        console.log("Not there");
    }

    
        
        
var newg = document.getElementById("new");
newg.addEventListener("click", newGame);


var load = document.getElementById("load");
load.addEventListener("click", loadGame);

var save = document.getElementById("save");
save.addEventListener("click", saveGame);

var restart= document.getElementById("restart");
restart.addEventListener("click", function(){location.reload()});
  
   
    
    
}


var newGame = function()
{
    var deck= createDeck();  
    
    numplay = prompt ("Enter '1' for ONE PLAYER or '2' for TWO PLAYER");
 
    if (numplay ==1)
    {
        showDeck(deck);
        showDeck(deck);
        console.log(numplay);
        
        player1 = prompt("Enter player name");
        console.log(player1);
        
        document.getElementsByClassName("oneP")[0].innerText = "Player 1: " +player1;
        
        
    }
    else if (numplay ==2)
    {
        showDeck(deck);
        showDeck(deck);
        console.log(numplay);
        
        player1 = prompt("Enter player1 name");
        console.log(player1);
        
        player2 = prompt("Enter player2 name");
        console.log(player1);
        
        play=1;
        console.log(play);
        
        document.getElementsByClassName("oneP")[0].innerText = "Player 1: " +player1 +" Player 2: "+ player2;
        document.getElementsByClassName("twoP")[0].innerText = "Player 1 ("+ player1+  ")'s Turn";
        
        var elem2 = document.getElementsByClassName("left")[0];
        elem2.innerText = "Score: Player1 ("+player1 +") :"+ player1MatchCount+ "     Player 2(" +player2 +") :"+ player2MatchCount;
            
                var newg = document.getElementById("new");
        newg.addEventListener("click", newGame);

        
        var load = document.getElementById("load");
        load.addEventListener("click", loadGame);
        
        var save = document.getElementById("save");
        save.addEventListener("click", saveGame);
        
        var restart= document.getElementById("restart");
        restart.addEventListener("click", function(){location.reload()});
        
         console.log("numplay createGame"+ numplay);
    }
    
    else
    {
        alert("Sorry, invalid entry");
        location.reload();
    }
    
    

}


var newg = document.getElementById("new");
newg.addEventListener("click", newGame);


var load = document.getElementById("load");
load.addEventListener("click", loadGame);

var save = document.getElementById("save");
save.addEventListener("click", saveGame);

var restart= document.getElementById("restart");
restart.addEventListener("click", function(){location.reload()});
        


};