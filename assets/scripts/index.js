'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const clickEvents = require('./auth/events')
const gameEvents = require('./gameboard')
const gameApiEvents = require('./tttgame/event')

$(() => {
  setAPIOrigin(location, config)
  clickEvents.addHandlers()
  gameEvents.addHandlers()
  gameApiEvents.addHandlers()
  $('.Square').hide()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#game-history').hide()
  $('#start-over').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
