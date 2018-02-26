'use strict'
const store = require('../store')

const onCreateSuccess = function (data) {
  // $('#gamePage').toggle('slow')
  store.game = data.game
  console.log(store.game)
}

const onCreateNewSuccess = function (data) {
  store.game = data.game
}

const onUpdateSuccess = function (data) {
 // $('#checkmessage').text('game successfully updated')
 // $('#checkmessage').css('background-color', 'green')
  store.game = data.game
 console.log(data)
}

// const onUpdateFailure = function (error) {
//
//   console.log(error)
// }

// const onUpdateFailure = function () {
//   $('#checkmessage').text('Error on updating the game')
//   $('#checkmessage').css('background-color', 'red')
// }

const onTrackSuccess = function (data) {
  $('.game-message').text(data.games.length)
}

module.exports = {
  onCreateSuccess,
  onUpdateSuccess,
  onTrackSuccess,
  onCreateNewSuccess
}
