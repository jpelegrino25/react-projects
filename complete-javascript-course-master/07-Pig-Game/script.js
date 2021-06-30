'use strict';

const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceElem.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElem.src = `dice-${dice}.png`;

    if (!(dice === 1)) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      // player win
      playing = false;
      diceElem.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  diceElem.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  player0Elem.classList.add('player--active');
  player1Elem.classList.remove('player--active');

  for (let i = 0; i < scores.length; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
    scores[0] = 0;
  }

  currentScore = 0;
  activePlayer = 0;
  playing = true;
});
