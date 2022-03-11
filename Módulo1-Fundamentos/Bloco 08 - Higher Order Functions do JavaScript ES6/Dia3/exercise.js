const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Atividade 1-----------------------------------
// const formaterBookOutput = books.map((book) => {
//   return result = `${book.name} - ${book.genre} - ${book.author.name}`;
// });

// console.log(formaterBookOutput);

// Atividade 2-----------------------------------
// const ageReleaseBook = books.map((book) => (
//   {
//     Author: book.author.name,
//     Age: (book.releaseYear - book.author.birthYear)
//   }
// ));
// const order = ageReleaseBook.sort((info1, info2) => info1.Age - info2.Age);
// console.log(ageReleaseBook);

// Atividade 3-----------------------------------
// const searchGenre = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
// console.log(searchGenre);

// Atividade 4-----------------------------------
// const searchAgeRelease = books.filter((book) => (2022 - book.releaseYear) > 60);
// const orderReleaseBook = searchAgeRelease.sort((book1, book2) => book1.releaseYear - book2.releaseYear);
// console.log(orderReleaseBook);

// Atividade 5-----------------------------------
// const searchGenre = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
// const orderAuthor = searchGenre.map((author) => author.author.name).sort();
// console.log(orderAuthor);

//  Atividade 6----------------------------------
// const searchRelease60Years = books.filter((book) => (2022 - book.releaseYear) > 60);
// const listBooks60Years = searchRelease60Years.map((book) => book.name);
// console.log(listBooks60Years);

//  Atividade 7----------------------------------
const searchAuthorInitials = books.find((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.');
console.log(searchAuthorInitials);