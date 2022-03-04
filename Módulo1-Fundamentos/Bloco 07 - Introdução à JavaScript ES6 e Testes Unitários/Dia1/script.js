// Parte 1
// Atividade 1 --------------------------------------------
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   } else {
//     var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O');
// }

// testingScope(true);

// Atividade 2 --------------------------------------------
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const orderList = (array) => array.sort((a, b) => a - b);
// const list = orderList(oddsAndEvens);
// console.log(`Os números ${list} se encontram ordenados de forma crescente`);

// Parte2
// Atividade 1 --------------------------------------------
// const fatorial = (numero) => numero < 2 ? 1 : numero * fatorial(numero-1);
// console.log(fatorial(5));


// Atividade 2 --------------------------------------------
// const longestWord = phrase => {
//   let wordList = phrase.split(' ');
//   let longestSize = 0;
//   let wordResult = '';
//   for (const word of wordList) {
//     if (word.length > longestSize) {
//       longestSize = word.length;
//       wordResult = word;
//     }
//   }
//   return wordResult;
// }
// console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));

// Atividade 3 --------------------------------------------
// const buttonCount = document.getElementById('button');
// const count = document.getElementById('click-count');
// let number = 1;
// const addCount = () => {
//   count.innerHTML = number;
//   number += 1;

// }

// buttonCount.addEventListener('click', addCount);
