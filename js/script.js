function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce'
  }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

  function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);

  if( (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||( argComputerMove == 'papier' && argPlayerMove == 'nożyce')
    || ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
    printMessage('Ty wygrywasz!');
  }
  else if (( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') || ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') || ( argComputerMove == 'papier' && argPlayerMove == 'papier')){
    printMessage('Remis!');
  }
  else {
    printMessage('Tym razem przegrywasz :(');
  }
}

function playGame(playerInput){
  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1); 

  console.log('Wylosowana liczba to: ' + randomNumber);
  
  let computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);
  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);
  displayResult(computerMove, playerMove)
}

var buttonRock = document.getElementById('play-rock');
var buttonPaper = document.getElementById('play-paper');
var buttonScissors = document.getElementById('play-scissors');

buttonRock.addEventListener('click', function(){playGame(1);});
buttonPaper.addEventListener('click', function(){playGame(2);});
buttonScissors.addEventListener('click', function(){playGame(3);});
