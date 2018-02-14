
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic Tac Toe


## Technologies Used

- HTML
- CSS
- SASS
- JQuery
- (bootstrap)


## Planing/Modeling

1. Create wireframe and user stories
2. Create html/css
3. Create game logic
4. Started authenication


## Still Needs To Work On



1. Finish working on authenication
2. Create a score board for the game engine
3. Create button handlers in order to connect the engine with html
4. create & update games data on API
5. debug any errors


## Unsolved Problem

- show the current player info during game
- update user side on api


## Development Story

The game logic was the fundamental and vital part of the Tic Tac Toe game. The game itself was more difficult than what I have imagined especially since the game logic consumed much of my time. Me being a visual person, I had to have a general board interface created despite having the wireframe. There are three entities to the Tic Tac Toe game: player, board, and game. I think I spent majority of my time on the game and board, but I did not have time to implement the player api. The game logic took longer than I expected so I did not have the opportunity to fully clean up my code. At one point I was following the given schedule plan, but I should have started with the API first because that was the last thing that was taught to us. I started the signin/signout but I did not include everything since it's not fully working yet.


## WireFrame

[Teleport to My wireframe](https://i.imgur.com/LG8a9ct.png)


## User Story

As a game user...
- I want to be able to signup to have my own account
				- form.input field:  new user/email
				- form.input field:  password
				- form.input field:  password confirmation
- I want to login / logout after creating my account
				- user authentication
					- username + password
					- button: login
					- button: logout
- I want to be redirected to the game board after signing in / signing out successfully
				- Message alert (?)
						- onSigninSuccess
						- onSigninFailure
						- onSignoutSuccess
						- onSignoutFailure
- I want an indication when there is a win, loss, or tie
- I want to be able to restart once a game is finished
