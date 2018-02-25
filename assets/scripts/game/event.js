// 'use strict'
//
// const getFormFields = require('../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
// const store = require('../store')
// // const gameLogic = require('../gameLogic.js')
//
// const onCreateGame = function (event) {
//  event.preventDefault()
//  const data = getFormFields(event.target)
//
//  api.create(data)
//    .then(ui.onCreateSuccess)
//    .catch(ui.onCreateFailure)
// }
//
// const onCreateNewGame = function (event) {
//  event.preventDefault()
//  const data = getFormFields(event.target)
//
//  api.create(data)
//    .then(ui.onCreateNewSuccess)
// }
//
// const onUpdate = function (event) {
//  event.preventDefault()
//  const data = {
//    id: event.target.id,
//    value: store.player,
//    over: store.over
//  }
//
//  api.updateGame(data)
//    .then(ui.onUpdateSuccess)
//    .catch(ui.onUpdateFailure)
// }
//
// const onTrack = function (event) {
//  event.preventDefault()
//  api.tracker(event)
//    .then(ui.onTrackSuccess)
// }
//
// const onTrackTwo = function (event) {
//  event.preventDefault()
//  api.tracker(event)
//    .then(ui.onTrackSuccessTwo)
// }
// module.exports = {
//  onCreateGame,
//  onUpdate,
//  onTrack,
//  onCreateNewGame,
//  onTrackTwo
// }
