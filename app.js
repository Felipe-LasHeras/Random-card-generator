//Crear carta con DOM
const card = document.querySelector('.card');
const cardNumber = document.querySelector('.card-number');
//Div de la carta
const topDiv = document.querySelector('.top');
const middleDiv = document.querySelector('.middle');
const bottomDiv = document.querySelector('.bottom');
//Crear número de carta
const number = document.createElement('p');
number.classList.add('number');
//Crear símbolo de carta
const symbol = document.createElement('p');
symbol.classList.add('symbol');
