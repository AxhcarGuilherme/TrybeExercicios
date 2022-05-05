// Atividade sobre objetos e for/in
{
  // let info = {
  //   personagem: 'Margarida',
  //   origem: 'Pato Donald',
  //   nota: 'Namorada do personagem principal nos   quadrinhos do Pato Donald',
  //   recorrente: 'Sim',
  // }

  // Atividade 1
  {
  // console.log("Bem-vinda, "+info.personagem);  
  }
  // ------------------------------------------------
  
  // Atividade 2
  {
  // console.log(info);
  }
  // ------------------------------------------------
  
  // Atividade 3
  {
  // for (let key  in info) {
  //   console.log(key);
  // }
  }
  // ------------------------------------------------

  // Atividade 4
  {
  // for (let key  in info) {
  //   console.log(info[key]);
  // }
  }
  // ------------------------------------------------

  // Atividae 5
  {
  //   let infoPato = {
  //     personagem: 'Tio Patinhas',
  //     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  //     nota: 'O último MacPatinhas', 
  //     recorrente: 'Sim',
  //   }
  //   for (let key  in info && infoPato) {
  //     if (key == 'recorrente') {
  //       if(info[key] == 'Sim' && infoPato[key]=='Sim'){
  //         console.log("Ambos recorrentes");
  //       }
  //     }
  //     else {
  //       console.log(info[key] +' e '+infoPato[key]);
  //     }
    
  //   }
  }
  // ------------------------------------------------

  // Atividade 6
  {
    // let leitor = {
    //   nome: 'Julia',
    //   sobrenome: 'Pessoa',
    //   idade: 21,
    //   livrosFavoritos: [
    //     {
    //       titulo: 'O Pior Dia de Todos',
    //       autor: 'Daniela Kopsch',
    //       editora: 'Tordesilhas',
    //     },
    //   ],
    // }
    // console.log("O livro favorito de "+ leitor.nome +' '+leitor.sobrenome+' se chama '+ leitor.livrosFavoritos[0].titulo);
  }
  // ------------------------------------------------

  // Atividade 7
  {
    // let leitor = {
    //   nome: 'Julia',
    //   sobrenome: 'Pessoa',
    //   idade: 21,
    //   livrosFavoritos: [
    //     {
    //       titulo: 'O Pior Dia de Todos',
    //       autor: 'Daniela Kopsch',
    //       editora: 'Tordesilhas',
    //     },
    //     {
    //       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    //       autor: 'JK Rowling',
    //       editora: 'Rocco',
    //     }
    //   ],
    // }
  }
  // ------------------------------------------------

  // Atividade 8
  // let leitor = {
  //   nome: 'Julia',
  //   sobrenome: 'Pessoa',
  //   idade: 21,
  //   livrosFavoritos: [
  //     {
  //       titulo: 'O Pior Dia de Todos',
  //       autor: 'Daniela Kopsch',
  //       editora: 'Tordesilhas',
  //     },
  //     {
  //       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  //       autor: 'JK Rowling',
  //       editora: 'Rocco',
  //     }
  //   ],
  // }
  // let count = 0;
  // count = leitor.livrosFavoritos.length;
  // console.log(leitor.nome +' tem '+ count+' Livros favoritos' );

}
// Atividade sobre funções
{
  // Atividade 1
  {
    // let word = 'arara'
    // function checkPalindromo(word) {
    //   let valid = 'false';
    //   let invertida = word.split('').reverse().join("");
    //   if (invertida == word) {
    //     valid = "true";
    //   }
    //   return valid;
    // }

    // let valid = checkPalindromo(word);
    // console.log(valid);
  
  }
  // ------------------------------------------------

  // Atividade 2
  {
    // let vet = [2, 3, 6, 7, 10, 1];
    // function indexMaiorValor(vet) {
    //   let indice = 0;
    //   for (let index = 0; index < vet.length; index++) {
    //     if(index  == 0){
    //       // não tem algo pra comparar
    //     }
    //     else {
    //       if (vet[index] > vet[index-1]) {
    //         indice = index;
    //       }
    //     }
    //   }
    //   return indice;
    // }
    // console.log('O índice do maior número é :'+ indexMaiorValor(vet));
  }
  // ------------------------------------------------

  // Atividade 3
  {
    // let vet = [2, 4, 6, 7, 10, 0, -3];
    // function indexMenorValor(vet) {
    //   let indice = 0;
    //   for (let index = 0; index < vet.length; index++) {
    //     if(index  == 0){
    //       // não tem algo pra comparar
    //     }
    //     else {
    //       if (vet[index] < vet[index-1]) {
    //         indice = index;
    //       }
    //     }
    //   }
    //   return indice;
    // }
    // console.log('O índice do menor número é :'+ indexMenorValor(vet));
  }
  // ------------------------------------------------

  // Atividade 4
  {
    // let vet = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

    // function maiorNome(vet) {
    //   let indiceMaiorNome = 0;
    //   let caracteresNome = 0;
    //   for (let index = 0; index < vet.length; index++) {
    //     if (caracteresNome < vet[index].length) {
    //       indiceMaiorNome = index;
    //       caracteresNome = vet[index].length;
    //     }
    //   }
    //   return indiceMaiorNome;
    // }
    // console.log(vet[maiorNome(vet)]);
  }
  // ------------------------------------------------

  // Atividade 5
  {
    // let vet = [2, 3, 2, 5, 8, 2, 3];
    // function countRepeat(vet) {
    //   let indice = 0;
    //   let aux = 0;
    //   for (let index = 0; index < vet.length; index++) {
    //     let countrepeat = 1;
    //     for (let index2 = index+1; index2 < vet.length; index2++) {
    //       if (vet[index] === vet[index2]) {
    //         countrepeat += 1;
    //       }
    //     }
    //     if (countrepeat > aux) {
    //       aux = countrepeat;
    //       indice = index;
    //     }
    //   }
    //   return indice;
    // }
    // console.log('O número que mais se repete é :'+ vet[countRepeat(vet)]);
  }
  // ------------------------------------------------

  // Atividade 6
  {
    // let num = 5;
    
    // function somatorio(num) {
    //   let sum = 0;
    //   if (num>0) {
    //     for (let index = 1; index <= num; index++) {
    //       sum += index;
    //     }
    //   }
    //   return sum;
    // }
    // console.log('O resultado da soma é :'+somatorio(num));
  }
  // ------------------------------------------------

  // Atividade 7
  {
    function verifyFimPalavra(word, ending) {
      let indice = word.length - ending.length;
      let valid = 'false';
      let pos = 0;
      for (let index = indice; index < word.length; index++) {
        if (word[index] !== ending[pos]){
          return valid;
        }
        else{
          pos += 1;
        }

      }
      valid = 'true';
      return valid;
    }
    console.log(verifyFimPalavra('trybe', 'be'));
  }
}