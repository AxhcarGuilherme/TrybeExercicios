const fetch = require('node-fetch');
randomNumber  = () => {
  return Math.floor(Math.random() * 100 );
}

capsStr = (str) => {
  return str.toUpperCase();
}

oneLetter = (str) => {
  letters = str.split('');
  return letters[0];
}

concat = (str1, str2) => {
  return str1 + str2;
}

const requestDogs = async () => {
  const result = await fetch('https://dog.ceo/api/breeds/image/random');
  return data = await result.json();
}

module.exports = { randomNumber, capsStr, oneLetter, concat, requestDogs }; 