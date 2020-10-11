{
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function (argMoveId){ //zrobiłam stałą i funkcję nienazwaną
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

  const displayResult = function(argComputerMove, argPlayerMove){ // utworzyłam stałą i funkcję nienazwaną
    console.log('moves:', argComputerMove, argPlayerMove);

  if( (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||( argComputerMove == 'papier' && argPlayerMove == 'nożyce')
    || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
    printMessage('Ty wygrywasz!');
  }
  else if (( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') || ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') 
    || (argComputerMove == 'papier' && argPlayerMove == 'papier')){
    printMessage('Remis!');
  }
  else {
    printMessage('Tym razem przegrywasz :(');
  }
}


function playGame(playerInput) {
  clearMessages();
  const randomNumber = Math.floor(Math.random() * 3 + 1), 
  computerMove = getMoveName(randomNumber),  playerMove = getMoveName(playerInput); 
  // zmieniłam zmienne na stałe i wymieniłam po przecinku. 
  // Próbowałam funkcję zrobić nienazwaną i zmienić na stałą, ale coś nie wychodziło

  console.log('Wylosowana liczba to: ' + randomNumber);
  printMessage('Mój ruch to: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);
  
  displayResult(computerMove, playerMove)
}

let buttonRock = document.getElementById('play-rock'), buttonPaper = document.getElementById('play-paper'), 
buttonScissors = document.getElementById('play-scissors');
// zmieniłam var na let i wymieniłam po przecinku. A dlaczego wcześniej było ustawione jako 'var'?

buttonRock.addEventListener('click', function(){playGame(1);});
buttonPaper.addEventListener('click', function(){playGame(2);});
buttonScissors.addEventListener('click', function(){playGame(3);});
}
