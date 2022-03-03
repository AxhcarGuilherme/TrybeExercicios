const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O');
}

testingScope(true);

// Atividade 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderList = (array) => array.sort((a, b) => a - b);
const list = orderList(oddsAndEvens);
console.log(`Os números ${list} se encontram ordenados de forma crescente`);

// Parte2

