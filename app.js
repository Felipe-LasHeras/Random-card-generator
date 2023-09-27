document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card');
  const cardValue = document.querySelector('.card-value');
  const cardSuit = document.querySelector('.card-suit');
  const cardSuitTop = document.querySelector('.card-suit-top');
  const cardSuitBottom = document.querySelector('.card-suit-bottom');
  const button = document.querySelector('.button');
  const suits = ["♠", "♣", "♥", "♦"];
  const values = [];
for (let i = 2; i <= 10; i++) {
    values.push(i);
  }
  values.push("J", "Q", "K", "A");
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + suits[i]);
    }
  }
  button.addEventListener('click', function() {
    const randomCard = deck[Math.floor(Math.random() * deck.length)];
    cardValue.innerHTML = randomCard[0];
    cardSuit.innerHTML = randomCard[1];
    cardSuitTop.innerHTML = randomCard[1];
    cardSuitBottom.innerHTML = randomCard[1];
    if (randomCard[1] === "♥" || randomCard[1] === "♦") {
      card.classList.add('red');
    } else {
      card.classList.remove('red');
    }
  });});
