// Atividade 1-----------------------------------
// Dada uma matriz, transforme em um array. 
// const arrays = [
// 	['1', '2', '3'],
// 	[true],
// 	[4, 5, 6],
// ];

// function flatten () {
// 	return arrays.reduce((result, item) => result.concat(item), []);
// }
// console.log(flatten());

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

// Atividade 2-----------------------------------
// Adicione o código do exercício aqui:
// const everyAuthors = books.reduce((result, bookInfo, currentPosition, array) => {
// 	if (currentPosition === array.length - 1) return `${result}${bookInfo.author.name}.` 
// 	return `${result}${bookInfo.author.name}, `
// }, '');
// console.log(everyAuthors);

// Atividade 3-----------------------------------
// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const sumAgeOfReleaseYearBook = books.reduce((result, bookInfo) => {
// 	return result += (bookInfo.releaseYear - bookInfo.author.birthYear);
// }, 0);
// console.log(sumAgeOfReleaseYearBook/books.length);

// Atividade 4-----------------------------------
// Encontre o livro com o maior nome.
// const searchLongestBookName = books.reduce((longestNameBook, book) => {
// 	if (longestNameBook.name.length < book.name.length) {
// 		return book;
// 	}	
// 	return longestNameBook;
// });
// console.log(searchLongestBookName);

// Atividade 5-----------------------------------
// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// const countsA = names.reduce((result, name) => {
// 	return result += name.split('').reduce((count, letter) => {
// 		if (letter.toLowerCase() === 'a') return count += 1;
// 		return count;
// 	}, 0);
// }, 0); 
// console.log(countsA);

// Atividade 6-----------------------------------
// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// const studentAverage = students.map((student, codeStudent) => (
// 	{
// 		name: student,
// 		average: (grades[codeStudent].reduce((sum, grade ) => sum + grade, 0)/grades[codeStudent].length),
// 	}
// ));
// console.log(studentAverage);
