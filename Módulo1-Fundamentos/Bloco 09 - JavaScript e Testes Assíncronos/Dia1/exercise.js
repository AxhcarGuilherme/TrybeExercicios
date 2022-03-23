// Atividade 1-----------------------------------
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C
// Output - a, b, c

// Atividade 2-----------------------------------
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
// Output - a, c, b


// Atividade 3-----------------------------------
// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     console.log("Returned planet: ", mars);
//   };

//   setTimeout(() => {console.log(getPlanet())}, 4000);

// Atividade 4-----------------------------------
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature = () => {
//     return `Mars temperature is: ${getMarsTemperature()} degree Celsius`;
// }

// console.log(sendMarsTemperature());

// Atividade 5-----------------------------------
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) => {
//   const ajustedTemperature = toFahrenheit(temperature);
//   console.log(`It is currently ${toFahrenheit(ajustedTemperature)}ºF at Mars`);
// }

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const sendMarsTemperature = (temperatureUnit) => temperatureUnit;

// sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature()));
// sendMarsTemperature(greet(getMarsTemperature()));

// Atividade 6-----------------------------------
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) => {
//   const ajustedTemperature = toFahrenheit(temperature);
//   console.log(`It is currently ${toFahrenheit(ajustedTemperature)}ºF at Mars`);
// }

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// const sendMarsTemperature = (sucess, failed) => {
//   const processResult = Math.random() <= 0.6;
//   setTimeout(() => {
//     if (processResult) sucess(getMarsTemperature());
//     else failed();
//   }, messageDelay());

// }

// sendMarsTemperature(temperatureInFahrenheit, handleError);
// sendMarsTemperature(greet, handleError);

// Atividade 7-----------------------------------
// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };
// it('testa se faz palavra ficar completamente maiuscula', (done) => {
//   uppercase('test', (str) => {
//     try {
//       expect(str).toBe('TEST');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// Atividade 8-----------------------------------
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails((pokemon) => pokemon.name === 'Charmander',
  (error, message) => {
    if (error) console.log(error);
    else console.log(message);
  }
);

// module.exports = {
//   getPokemonDetails,
// };

// Atividade 9-----------------------------------
// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
//     const expectedErro = new Error('Não temos esse pokémon para você :(');

//     function callback(erro, result) {
//       expect(erro).toEqual(expectedErro);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Turtwig', callback);
//   });

//   it("retorna um pokemon que existe no banco de dados", () => {
//     const expectedResult= 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

//     function callback(erro, result) {
//       expect(result).toEqual(expectedResult);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
//   });
// });
