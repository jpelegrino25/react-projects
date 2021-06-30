'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// Tab component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const learmMore = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// Practicing

// selecting element
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
// console.log(document.querySelector('.features'));
// console.log(document.querySelectorAll('.section'));
// console.log(document.getElementById('section--2'));
// const header = document.querySelector('.header');
// console.log(header);

// Create ELment
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `This is a simple message to demostrate my knowdelage <button class="btn myButton">Go it</button>`;

// header.prepend(message);
// header.before(message);
// header.after(message);
// header.append(message);
// document.querySelector('.myButton').addEventListener('click', function () {
//   // message.remove();
//   message.parentElement.removeChild(message);
// });

// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// const logoSrc = logo.getAttribute('src');
// console.log(logoSrc);
// console.log(logo.dataset.hadDat);

// learmMore.addEventListener('click', function (e) {
//   e.preventDefault();
//   const clientRect = section1.getBoundingClientRect();
//   console.log(clientRect);
//   console.log(window.pageXOffset, window.pageYOffset);

//   window.scrollTo(
//     clientRect.left + window.pageXOffset,
//     clientRect.top + window.pageYOffset
//   );

//   window.scrollTo({
//     left: clientRect.left + window.pageXOffset,
//     top: clientRect.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
// });

// const randonColor = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const getRandonColor = () =>
//   `rgb(${randonColor(0, 255)},${randonColor(0, 255)},${randonColor(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandonColor();
//   console.log(e.target, e.currentTarget, this);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandonColor();
//   console.log(e.target, e.currentTarget, this);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandonColor();
//   console.log(e.target, e.currentTarget, this);
// });

// console.log(getRandonColor());

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Going downwards: child
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
// h1.closest('.header').style.background = 'orange';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(ele => {
  if (ele !== h1) ele.style.transform = 'scale(0.5)';
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;

  // Remove active
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  //Active
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// passing arguments
function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const linkSiblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    linkSiblings.forEach(l => {
      if (l !== link) l.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
