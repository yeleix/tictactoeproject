'use strict'

const store = require('../store') // token too

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').css('background-color', 'green')
  // console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on signing up!')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully!')
  $('#message').css('background-color', 'green')
  // below for the token
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on signing in!')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Change password Successfully!')
  $('#message').css('background-color', 'green')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on changing password!')
  $('#message').css('background-color', 'red')
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out Successfully!')
  $('#message').css('background-color', 'green')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on signing out!')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
