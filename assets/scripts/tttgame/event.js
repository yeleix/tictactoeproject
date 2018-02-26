'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdate = function (event, result) {
  event.preventDefault()
  const data = {
    index: store.index,
    over: result
  }
  console.log(event.target.id)

  api.updateGame(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onTrack = function (event) {
  event.preventDefault()
  api.tracker(event)
    .then(ui.onTrackSuccess)
}

const onTrackTwo = function (event) {
  event.preventDefault()
  api.tracker(event)
    .then(ui.onTrackSuccessTwo)
}

const addHandlers = () => {
  $('#game-history').on('click', onTrack)
}

module.exports = {
  onCreateGame,
  onUpdate,
  onTrack,
  onTrackTwo,
  addHandlers
}
