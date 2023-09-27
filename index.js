//Random card generator 
const pinta = ["♠", "♣", "♥", "♦"];
const valores = [];
for (let i = 2; i <= 10; i++) {
  values.push(i);
}   
values.push("J", "Q", "K", "A");
const mazo = [];
for (let i = 0; i < valores.length; i++) {
  for (let j = 0; j < values.length; j++) {
    deck.push(values[j] + suits[i]);
  }
}
const randomCard = deck[Math.floor(Math.random() * deck.length)];
console.log(randomCard);
