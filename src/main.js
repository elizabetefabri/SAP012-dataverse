// import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

// console.log(renderItems(data), data);



const cards = document.querySelector('#root');

cards.appendChild(renderItems(data));

// document.addEventListener("DOMContentLoaded", () => {

//   cards.appendChild(renderItems(data));
// })
