/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice, gamePlaying;

init();


 function btnRoll()
 {
          if(gamePlaying)
          {
          dice=Math.ceil(Math.random()*6);
          var diceDOM= document.querySelector('.dice');
          diceDOM.style.display='block';
          diceDOM.src='dice-'+dice+'.png';
         
          if(dice !== 1){
                    roundScore+=dice;
                    document.querySelector('#current-'+activePlayer).textContent=roundScore;
                    
          }
          else{
                    roundScore=0;
                    dice=0;
                    nextPlayer();

          }
          }

 }
 
document.querySelector('.btn-roll').addEventListener('click',btnRoll);

function nextPlayer()
{
          activePlayer===1?activePlayer=0:activePlayer=1;
          document.getElementById('current-0').textContent='0';
          document.getElementById('current-1').textContent='0';
          document.querySelector('.player-1-panel').classList.toggle('active');
          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('notactive');
          document.querySelector('.player-0-panel').classList.toggle('notactive');
          document.querySelector('.dice').style.display='none';
}

 document.querySelector('.btn-hold').addEventListener('click',function()
 {        
          if(gamePlaying){
          scores[activePlayer]=scores[activePlayer]+roundScore;
          //document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
          document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
          roundScore=dice=0;
          if(scores[activePlayer]>=20)
          {
                    document.getElementById('name-'+activePlayer).textContent="WINNER !";
                    document.querySelector('.player-1-panel').classList.remove('active');
                    document.querySelector('.player-0-panel').classList.remove('active');
                    document.querySelector('.player-1-panel').classList.remove('notactive');
                    document.querySelector('.player-0-panel').classList.remove('notactive');
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                    gamePlaying=false;
          }
          else
          {
                    nextPlayer();
          }}
          
 });
 
 document.querySelector('.btn-new').addEventListener('click',init);

 function init()
 {
          scores=[0,0];
          activePlayer=1;
          roundScore=0;
          gamePlaying=true;
          document.querySelector('.dice').style.display='none';
          document.querySelector('.player-0-panel').classList.remove('winner');
          document.querySelector('.player-1-panel').classList.remove('winner');
          document.getElementById('score-0').textContent='0';
          document.getElementById('score-1').textContent='0';
          document.getElementById('current-0').textContent='0';
          document.getElementById('current-1').textContent='0';
          document.getElementById('name-0').textContent="Player 1";
          document.getElementById('name-1').textContent="Player 2";
          document.querySelector('.player-1-panel').classList.remove('active');
          document.querySelector('.player-0-panel').classList.remove('active');
          document.querySelector('.player-1-panel').classList.remove('notactive');
          document.querySelector('.player-0-panel').classList.remove('notactive');
          document.querySelector('.player-1-panel').classList.add('active');
          document.querySelector('.player-0-panel').classList.add('notactive');

 }