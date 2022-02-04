//Atv1
// let result = 1;
// for(let count = 10; count > 1; count-=1){
//     result = result *count;
// }
// console.log(result);

// Atv2
let word = 'trybe';
function inversor (str){
  let invertida = "";
  for (let count = str.length - 1; count >= 0; count-= 1){
     invertida += str[count];
  }
  return invertida;
}
console.log(inversor(word));

//Atv3
