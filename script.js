'use strict';
// console.log(document.querySelector('.message').textContent);
// const guess =Number(document.querySelector('.guess').value);
const displayMessage = (message)=>{ document.querySelector('.message').textContent = message};
let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.highscore').textContent = `${highScore}`;

document.querySelector('.check').addEventListener('click', guessNumber);



 function guessNumber (){
    const guess =Number(document.querySelector('.guess').value); 
    if(guess === secretNumber){
       displayMessage('Correct guess');
        document.querySelector('body').style.backgroundColor = ' #60b347';
   document.querySelector('.number').textContent = secretNumber; 
 if(score > highScore){
    highScore = score;
   document.querySelector('.highscore').textContent = `${highScore}`;
   }
   
}    
    else if (guess > 20){
        displayMessage('Please Select number between 1-20') ;
        
    } 
    else if (guess !== secretNumber){
        displayMessage (guess > secretNumber ? 'Too high' :  'Too low');
        score--;


    }    
    // else if (guess > secretNumber){
    //    message.textContent = 'Too high';
    //     score--;


    // }    
    // else if (guess < secretNumber && guess > 0){
    //    message.textContent ='Too low' ;
    //     score--;
        
    // }    
    
      
console.log(guess);   
if(score > 0){
    document.querySelector('.score').textContent = score; 
} else{
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.score').textContent = 0;
    displayMessage('Game over , You lose!!') ;
}


 } ;

document.querySelector('.again').addEventListener('click', reset);

function reset (){
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
document.querySelector('body').style.backgroundColor = ' #222';
displayMessage('Start guessing');
document.querySelector('.score').textContent = score;
document.querySelector('.guess').value= ''; 
 }


// document.querySelector('.check').addEventListener('keydown', ()=>{
//     )if (
// });

