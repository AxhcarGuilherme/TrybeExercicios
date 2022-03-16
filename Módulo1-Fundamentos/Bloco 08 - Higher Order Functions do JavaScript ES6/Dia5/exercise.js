// Atividade1-----------------------------------
// Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); 
// });

// Atividade2-----------------------------------
// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// const sum = (...values) => values.reduce((accSum, valor) => accSum + valor, 0);

// Atividade3-----------------------------------
// Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

// Atividade4-----------------------------------
// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// const people = [
//   {
//     name: 'Nicole',
//     bornIn: 1992,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Harry',
//     bornIn: 2008,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Toby',
//     bornIn: 1901,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Frida',
//     bornIn: 1960,
//     nationality: 'Dannish',
//   },
//   {
//     name: 'Fernando',
//     bornIn: 2001,
//     nationality: 'Brazilian',
//   },
// ];
// const filterPeople = (a) => a.filter(({ nationality, bornIn }) =>
//   nationality === 'Australian' && bornIn > 1900 && bornIn < 2001
// );
// console.log(filterPeople(people));

// Atividade5-----------------------------------
// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// const myList = [1, 2, 3];
// const swap = ([one, two, three]) => [three, two, one];
// console.log(swap(myList));

// Atividade6-----------------------------------
// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];
// const arrayToObject = ([name, brand, year]) => ({name, brand, year});
// console.log(arrayToObject(array));

// Atividade7-----------------------------------
// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// const ship = (ship) => {
//   const { name, length, measurementUnit = 'meters'} = ship;
//   return `${name} is ${length} ${measurementUnit} long`
// }

// console.log(ship(ships[0]));
// console.log(ship(ships[1]));
// console.log(ship(ships[2]));

// Atividade8-----------------------------------
// const greet = (name, phrase = 'Hi') => `${phrase} ${name}`;

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
// Atividade9-----------------------------------
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
 const { spring, summer, autumn, winter } = yearSeasons;
 const months = [...winter, ...spring, ...summer, ...autumn];
 const swap = ([dec, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov]) => [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
 console.log(swap(months));
