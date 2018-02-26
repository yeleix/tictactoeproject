'user strict'

const events = require('./tttgame/event')
const store = require('./store')

let result = false;
document.turn = "X";

function startGame(event) {
  result = false;
  events.onCreateGame(event)
  for (let i = 1; i <= 9; i++) {
    clearBox(i)
  }
  $('.Square').show()
  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " MAKE A MOVE")
}

function setMessage(msg) {
  document.getElementById("game-message").innerText = msg;
}

function nextMove(event) {
  const square = event.target
  store.index = event.target.id[1]-1
  if (document.winner != null) {
    setMessage(document.turn + " ALREADY WON.")
  } else if (square.innerText === '') {
    square.innerText = document.turn
    store.player = document.turn
    switchTurn();
    events.onUpdate(event, result)
  } else {
    setMessage('NOOO! ALREADY TAKEN!')
    console.log(result)
  }
}

function switchTurn() {
  if (checkForWinner(document.turn)) {
    setMessage("AWESOME!! " + document.turn + ", YOU WON!")
    document.winner = document.turn;
  } else if (document.turn === "X") {
    document.turn = 'O';
    setMessage("IT'S " + document.turn + "'S TURN'")
  } else {
    document.turn = "X";
    setMessage("IT'S " + document.turn + "'S TURN'")
  }
}

function checkForWinner(move) {
  if (checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
    result = true
  }
  return result
}

function checkRow (a, b, c, move) {
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true
  }
  return result
}

function getBox(number) {
  return document.getElementById('s' + number).innerText;
}

function clearBox(number) {
  document.getElementById('s' + number).innerText = '';
}

const addHandlers = () => {
  $('#start-over').on('click', startGame)
  $('.Square').on('click', nextMove)
}

module.exports = {
  addHandlers
}
