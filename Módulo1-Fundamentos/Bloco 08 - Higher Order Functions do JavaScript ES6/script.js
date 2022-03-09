// Atividade 1-----------------------------------
// const peopleGenerator = (fullname) => {
//   const email = fullname.toLowerCase().split(' ').join('');
//   return { fullname, email: `${email}@trybe.com` };
// }

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva')
//   }
//   return employees;
// };
// console.log(newEmployees(peopleGenerator));

// Atividade 2-----------------------------------
// const checkValueRaffle = (raffleResult, raffle) => raffleResult === raffle;
// const resultRaffle = (raffle, callback) => {
//   const raffleResult = Math.floor(Math.random() * 5 + 1);
//   return callback(raffleResult, raffle) ? 'Parabéns, você ganhou!':'Tente Novamente!' ;
// }
// console.log(resultRaffle(2, checkValueRaffle));

// Atividade 3-----------------------------------
const verifyAnswer = (rigthAnswer, answer) => {
  let result = 0;
  for (let index = 0; index < answer.length; index += 1) {
    if (rigthAnswer[index] === answer[index]) {
      result += 1;
    } else if (answer[index] !== 'N.A') {
      result -= 0.5;
    }
  }
  return result;
}

const resultPrint = (rigthAnswer, answer, callback) => {
  return callback(rigthAnswer, answer);
}
console.log(resultPrint(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], verifyAnswer));