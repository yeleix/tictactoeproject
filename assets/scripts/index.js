'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})
// this is a test
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const cells = $('.cell');
  const symbols = ['&times;', '&#9675;'];
  let currentStep = 0;
  const currentState = {};
  let gameOver = true;
  const winningCombos = {
    combo0: [0, 1, 2],
    combo1: [3, 4, 5],
    combo2: [6, 7, 8],
    combo3: [0, 3, 6],
    combo4: [1, 4, 7],
    combo5: [2, 5, 8],
    combo6: [0, 4, 8],
    combo7: [2, 4, 6]
  };

  const potentialCombos = {
    0: ['combo0', 'combo3', 'combo6'],
    1: ['combo0', 'combo4'],
    2: ['combo0', 'combo5', 'combo7'],
    3: ['combo1', 'combo3'],
    4: ['combo1', 'combo4', 'combo6', 'combo7'],
    5: ['combo1', 'combo5'],
    6: ['combo2', 'combo3', 'combo7'],
    7: ['combo2', 'combo4'],
    8: ['combo2', 'combo5', 'combo6']
  };

  const showArrow = p => { // invisible --> hides arrow thats not currently on the current player
    if (p % 2 === 0) {
      $('.player1 > .arrow').removeClass('inv');
      $('.player2 > .arrow').addClass('inv');
    } else {
      $('.player1 > .arrow').addClass('inv');
      $('.player2 > .arrow').removeClass('inv');
    }
  };

  //  const initGame = () => {
  //  if (gameOver) {
  //  cells.empty();
  //  for (let i = 0; i < 9; i++) {
  //    currentState[i] = null;
  //  };

  // currentStep = 0;
  // showArrow(currentStep); // this determines which side the arrow will be on depending on which player is playing
  // gameOver = false;
  // cells.removeClass('win');
  // $('.ss').text('');
  //  }
  //  };
  //  initGame();
  //  const winResizeHandler = () => {
  //    let c = cells,
  //  let w = c.width();
  // <<<<<<< HEAD
  // c
  // =======

  // >>>>>>> gameindexhtml01
  // .css({
  //     'line-height': `${w * 0.92}px`,
  //    'font-size': `${w}px`
  //  })
  // .height(w);
  //  };
  // $(window) // after browser has changed, this helps to resize
  //  .resize(winResizeHandler)
  //  .keydown(e => {
  //  e.preventDefault();
  //  initGame();
  // });

  winResizeHandler(); // action that will be performed when browser window is resized

  const checkCombo = a => {
    const a0 = currentState[a[0]];
    const a1 = currentState[a[1]];
    const a2 = currentState[a[2]];
    const w = (a0 === a1 && a1 === a2);
    if (w) {
      $(`.cell[data-i="${a[0]}"]`).addClass('win');
      $(`.cell[data-i="${a[1]}"]`).addClass('win');
      $(`.cell[data-i="${a[2]}"]`).addClass('win');
    }
    return w;
  };

  cells.click(function(e) {
    if (!gameOver) {
      const $this = $(this);
      const i = $this.data('i');
      if (currentState[i] === null) {
        const s = symbols[currentStep++ % 2];
        currentState[i] = s;
        $this.html(s); // loops in to check if game is not over
        for (let j = 0, len = potentialCombos[i].length; j < len; j++) {
          if (checkCombo(winningCombos[potentialCombos[i][j]])) {
            console.log(`${s}won`);
            gameOver = true;
            $('.ss').text('Press any key to start new game.');
            return;
          }
        }
        if (currentStep === 9) {
          gameOver = true;
          $('.ss').text('Draw! Press any key to start new game.');
          return;
        }
        showArrow(currentStep);
      }
    }
  });
});
