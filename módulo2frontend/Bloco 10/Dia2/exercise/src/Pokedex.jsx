import React, {Component} from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends Component{
  render(){
    return (
      pokemons.map((pokemon) => (
        <Pokemon 
          name={pokemon.name}
          type={pokemon.type}
          averageWeight={pokemon.averageWeight}
          image={pokemon.image}
        />
      ))
    )
  }
}

export default Pokedex;
