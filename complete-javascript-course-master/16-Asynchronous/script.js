'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.queryS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             elector('.countries');

///////////////////////////////////////

// AJAX CALL VIA HTTPRequest

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.eu/rest/v2/name/united');
// request.send();

// request.addEventListener('load', function () {
//   console.log(request.responseText);
// });

// fetch('https://restcountries.eu/rest/v2/name/united')
//   .then(resp => resp.json())
//   .then(data => console.log(data));

// creating Promise

const lotteryPromise = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) {
    resolve('You Win the lottery');
  } else {
    reject('You lost your moneyt');
  }
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
