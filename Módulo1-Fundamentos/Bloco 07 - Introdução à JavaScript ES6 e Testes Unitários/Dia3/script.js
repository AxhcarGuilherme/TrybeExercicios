// Atividade 1 --- ___--- ___--- ___--- ___--- ___---___
// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// module.exports = sum;

// Atividade 2 --- ___--- ___--- ___--- ___--- ___---___

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// module.exports = myRemove;

// Atividade 3 --- ___--- ___--- ___--- ___--- ___--- ___

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// module.exports = myFizzBuzz;

// Atividade 4 --- ___--- ___--- ___--- ___--- ___---___
function encode(text) {
  let texCod ='';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index]=='a') {
      texCod = texCod + '1';
    }
    else if (text[index]=='e') {
      texCod = texCod + '2';
    }
    else if (text[index]=='i') {
      texCod = texCod + '3';
    }
    else if (text[index]=='o') {
      texCod = texCod + '4';
    }
    else if (text[index]=='u') {
      texCod = texCod + '5';
    }
    else {
      texCod = texCod + text[index];
    }
  }
  return texCod;
}
function decode(text) {
  let texCod ='';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index]=='1') {
      texCod = texCod + 'a';
    }
    else if (text[index]=='2') {
      texCod = texCod + 'e';
    }
    else if (text[index]=='3') {
      texCod = texCod + 'i';
    }
    else if (text[index]=='4') {
      texCod = texCod + 'o';
    }
    else if (text[index]=='5') {
      texCod = texCod + 'u';
    }
    else {
      texCod = texCod + text[index];
    }
  }
  return texCod;
}
module.exports = {
  decode,
  encode
};