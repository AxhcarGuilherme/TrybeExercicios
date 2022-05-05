import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
   conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component{
  render(){
    return (
      conteudos.map((counteudo) => (
        <div>
          <h4>O conteúdo: {counteudo.conteudo}</h4>
          <h4>Status: {counteudo.status}</h4>
          <h4>Bloco : {counteudo.bloco}</h4>
        </div>
      ))
    )
  }
}

export default Content;
