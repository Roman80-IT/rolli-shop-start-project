// const buttonMinus = document.querySelector('[data-action = "minus"]');
// const buttonPlus = document.querySelector('[data-action = "plus"]');

const counterE1 = document.querySelector(".items__current");
// console.dir(counterE1);
// console.dir(counterE1.closest(".counter-wrapper"));

const wrapperE1 = document.querySelector(".counter-wrapper");
// console.dir(wrapperE1);

wrapperE1.addEventListener("click", onClick);

function onClick(evt) {
  if (
    !evt.target.dataset.action === "minus" ||
    !evt.target.dataset.action === "plus"
  ) {
    return;
    //   } else {
  }
  console.dir(evt.target);
}

function onClick(evt) {
  if (
    evt.target.dataset.action === "minus" ||
    evt.target.dataset.action === "plus"
  ) {
    updateCounter(evt.target.dataset.action);
  }
}

const buttonMinus = document.querySelector('[data-action="minus"]');
const buttonPlus = document.querySelector('[data-action="plus"]');
const counterEl = document.querySelector(".items__current");
const wrapperEl = document.querySelector(".counter-wrapper");

wrapperEl.addEventListener("click", onClick);

function onClick(evt) {
  if (
    evt.target.dataset.action === "minus" ||
    evt.target.dataset.action === "plus"
  ) {
    updateCounter(evt.target.dataset.action);
  }
}

function updateCounter(action) {
  let currentCount = parseInt(counterEl.innerText);
  if (action === "minus") {
    currentCount = currentCount > 1 ? currentCount - 1 : 1;
  } else if (action === "plus") {
    currentCount = currentCount + 1;
  }
  counterEl.innerText = currentCount;
}
//! Інший спосіб

// Функція для збільшення лічильника
function incrementCounter(element) {
  var counterElement = element.parentElement.querySelector(".items__current");
  var currentCount = parseInt(counterElement.dataset.counter);
  counterElement.dataset.counter = currentCount + 1;
  counterElement.innerText = currentCount + 1;
}

// Функція для зменшення лічильника
function decrementCounter(element) {
  var counterElement = element.parentElement.querySelector(".items__current");
  var currentCount = parseInt(counterElement.dataset.counter);
  if (currentCount > 1) {
    counterElement.dataset.counter = currentCount - 1;
    counterElement.innerText = currentCount - 1;
  }
}
