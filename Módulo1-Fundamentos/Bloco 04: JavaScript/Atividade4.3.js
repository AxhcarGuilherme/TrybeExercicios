//Atv1
// let result = 1;
// for(let count = 10; count > 1; count-=1){
//     result = result *count;
// }
// console.log(result);

// Atv2
// let word = 'trybe';
// function inversor (str){
//   let invertida = "";
//   for (let count = str.length - 1; count >= 0; count-= 1){
//      invertida += str[count];
//   }
//   return invertida;
// }
// console.log(inversor(word));

//Atv3
let array = ['java', 'javascript', 'python', 'html', 'css'];
function encontraMaior (array){
  let posicaoMaior = 0;
  let numCaracteres = 0;
  for (let count = 0; count < array.length; count +=1) {
    if(array[count].length > numCaracteres){
      posicaoMaior = count;
      numCaracteres = array[count].length;
    }
  }
  return array[posicaoMaior];
}
console.log(encontraMaior(array));

function encontraMenor (array){
  let posicaoMenor = 0;
  let numCaracteres = 99999;
  for (let count = 0; count < array.length; count +=1) {
    if(array[count].length < numCaracteres){
      posicaoMenor = count;
      numCaracteres = array[count].length;
    }
  }
  return array[posicaoMenor];
}
console.log(encontraMenor(array));